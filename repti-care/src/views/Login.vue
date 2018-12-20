<template>
  <div class="login">
     <form action="" class="form-signin">
    <h3 class="heading">Sign In</h3>
    <input type="text" placeholder="Email" v-model="email" class="form-control"><br>
    <input type="password" placeholder="Password" v-model="password" class="form-control"><br>
    <button @click="login" class="btn btn-lg btn-primary btn-block">Log In</button>
    <p>You don't have an account? You can <router-link to="/sign-up">create one here</router-link></p>

    </form>
  </div>
</template>

<style scoped>
.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  border: 1px solid rgba(0,0,0,0.1);  
  background-color: white;
}

.form-control {
  position: relative;
	font-size: 16px;
	height: auto;
	padding: 10px;
}

input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}

  .heading {
    margin-bottom: 30px;
  }

  .btn {
    margin-bottom: 30px;
  } 

</style>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
    email: '',
    password: ''
    }
  },
  methods: {
    login: function () {
     firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      (user) => {
        this.$router.replace('home')
      },
       (error) => {
         alert(`Ooops ${error.message}`)
       }
     )
    }
  }
}
</script>



