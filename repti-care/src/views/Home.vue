<template>
<div class="home">
  <h1>Welcome to the home page</h1>
  <button class="btn btn-danger" @click="logout">Logout</button>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'home',
  methods: {
  logout: function() {
  firebase.auth().signOut().then(() => {
  this.$router.replace('login')
  })
  }
 }
}
</script>

