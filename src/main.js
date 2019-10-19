import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

Vue.config.productionTip = false

const config = {
    apiKey: "AIzaSyCsvFrlF2MNpZEOUV48dO4lOTYiAZQzJsg",
    authDomain: "jphacks-6a562.firebaseapp.com",
    databaseURL: "https://jphacks-6a562.firebaseio.com",
    projectId: "jphacks-6a562",
    storageBucket: "jphacks-6a562.appspot.com",
    messagingSenderId: "85468317597",
    appId: "1:85468317597:web:fb90eab2568018225c9174",
    measurementId: "G-B4RZE8XJYC"
};
firebase.initializeApp(config);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
