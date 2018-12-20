// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Initialize Firebase
let app = ''
const config = {
  apiKey: 'AIzaSyDE0IVgepdhCOJLjcunmLN35AJ-6e0X0ak',
  authDomain: 'repti-care-90f1d.firebaseapp.com',
  databaseURL: 'https://repti-care-90f1d.firebaseio.com',
  projectId: 'repti-care-90f1d',
  storageBucket: 'repti-care-90f1d.appspot.com',
  messagingSenderId: '551446965940'
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
