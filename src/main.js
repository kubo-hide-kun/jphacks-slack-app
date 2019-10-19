import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyB_C233N_7cIqAPAE-reEnzdD2R0w9jzdo",
  authDomain: "conoha-60071.firebaseapp.com",
  databaseURL: "https://conoha-60071.firebaseio.com",
  projectId: "conoha-60071",
  storageBucket: "conoha-60071.appspot.com",
  messagingSenderId: "98838455718"
}

firebase.initializeApp(config);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
