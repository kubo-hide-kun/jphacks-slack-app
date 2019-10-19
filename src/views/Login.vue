<template>
<div id="app">
  <v-app id="inspire">
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3 mt-3">Slack Rain</h1>

 <form class="form pa-10">
      <!--v-text-field
        v-model="email"
        :counter="20"
        label="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="Pass"
        label="Pass"
        required
      ></v-text-field-->
    <input type="text" placeholder="Username" v-model="username" class="pa-5 border">
   
    <input type="password" placeholder="Password" v-model="password" class="pa-5 border">

      <v-checkbox
        v-model="checkbox"
        label="Do you agree?"
        required
      ></v-checkbox>
  
      <v-btn class="mr-4" @click="signIn">Login</v-btn>


      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on }">
          <v-btn @click="signUp" dark v-on="on">Create</v-btn>
        </template>
        <v-card class="pa-10">
        <v-card-title class="headline">Create Acount</v-card-title>

      <!--v-text-field
        v-model="email"
        :counter="20"
        label="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="Pass"
        label="Pass"
        required
      ></v-text-field-->
    <input type="text" placeholder="Username" v-model="username" class="border2 pa-5">
    <input type="password" placeholder="Password" v-model="password" class="border2 pa-5">


      <v-checkbox
        v-model="checkbox"
        label="Do you agree?"
        required
      ></v-checkbox>


        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">キャンセル</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">登録</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>



</form>

      </v-layout>
    </v-parallax>

   <div>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
        >
        
          <span slot="opposite"></span>
          <v-card class="elevation-2 mr-5">
            <v-card-title class="title" v-text="item.title"></v-card-title>
            <v-card-text class="text--primary" v-text="item.text">
            </v-card-text>
          </v-card>

        </v-timeline-item>
      </v-timeline>
    </div>


  </v-app>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import firebase from '@firebase/app'; require('firebase/auth'); 
export default {
  name: 'Sign',
  data(){
    return {
      $v: '',
      Pass: '',
      ID: '',
      username: '',
      password: '',
      email: '',
      name: '',
      checkbox: '',
      dialog: false,
      items: [
        {color: 'light-blue darken-4', icon: 'mdi-star', title:'天候状況でアドバイス！', text:'現在地の天候状況に合わせて、Slackで出社する際のアドバイスをお届けします！'},
        {color: 'light-blue darken-1', icon: 'mdi-book-variant', title:'メンバーの状況確認！', text:'アプリでメンバーの出社状況を確認します！'},
      ],
    };
  },

  methods: {
    signUp: function(){
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
      })
      .catch(error => {
        alert(error.message)
      })
   },
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {// eslint-disable-line
          alert('Success!')
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    } 
 }
};

</script>
<style scoped>
.form {
  border-radius: 20px 20px 20px 20px;
  background-color: rgba(255,255,255,0.5);
  height: 320px;
  box-shadow: 0px 0px 0px gray;
}
.border{
  border: solid 1px #E1F5FE;
  border-radius: 40px 40px 40px 40px;
  width:100%;
  margin:5px;
}
.border2{
  border: solid 1px #B3E5FC;
  border-radius: 40px 40px 40px 40px;
  width:100%;
  margin:5px;
}
</style>
