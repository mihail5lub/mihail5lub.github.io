import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/router";
import './assets/styles/styles.scss'
import 'material-design-icons-iconfont'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: "AIzaSyAwaG0d_wj5qTs36nUsHHU_vzBDCOHEdbk",
  authDomain: "online-shop-89eca.firebaseapp.com",
  databaseURL: "https://online-shop-89eca.firebaseio.com",
  projectId: "online-shop-89eca",
  storageBucket: "online-shop-89eca.appspot.com",
  messagingSenderId: "953371100749",
  appId: "1:953371100749:web:cfa0e9e4a7496e9641be04",
  measurementId: "G-PTD86C6943"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      render: h => h(App),
      store,
      router
    }).$mount('#app')
  }
})


