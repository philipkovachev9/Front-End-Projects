<template>
  <div class="sign-up">
    <form action="" class="form-signin">
    <h3 class="heading">Create a new account</h3>
    <input type="text" placeholder="Email" v-model="email" class="form-control"><br>
    <input type="password" placeholder="Password" v-model="password" class="form-control"><br>
    <button @click="signUp" class="btn btn-lg btn-success btn-block">Sign Up</button>
    <span>Already have an account?<router-link to="/login"> Sign in Here</router-link></span>
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
  name: 'signUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(user) {
        alert('Your account has been created!')
      },
      function (error) {
        alert(`Ooops ${error.message}`)
      }
      )
    }
  }
}
</script>
