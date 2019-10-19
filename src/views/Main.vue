<template>
<div id="app">
  <v-app id="inspire">

<div class="p">

<v-card id="create">


      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="blue darken-2"
            dark
            fab


            
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="green"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card>
</div>

  </v-app>
</div>
</template>

<script>
// @ is an alias to /src
export default {
      transition: 'slide-y-reverse-transition',
      direction: 'top',
       fab: false,

computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { class: 'purple', icon: 'account_circle' }
        case 'two': return { class: 'red', icon: 'edit' }
        case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    },
  },
}
</script>
<style scoped>
#create .v-speed-dial {
  position: fixed;
}

#create .v-btn--floating {
  position: relative;
}
.p {
  position:fixed;
 right:100px;
 bottom:100px;
}
</style>