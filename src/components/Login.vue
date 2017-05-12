<template>
  <div class="login-page">
	<input type="text" v-model="username"></input>
	<input type="password" v-model="password"></input>
	<button @click="validateLogin()">Login</button>
	</br>
	<label v-if="errorLogin">Wrong username or password</label>
  </div>
</template>

<script>
  import userData from '../assets/json/user.json'
  import storage from '../js/storage'

  export default {
    name: 'login-page',
    data () {
      return {
        users: userData,
        username: '',
        password: '',
        errorLogin: false
      }
    },
    methods: {
      validateLogin () {
        if (this.getUser () != null) {
          storage.methods.saveUser (this.getUser ())
          let route = '/'
          if (this.getUser ().isAdmin === 1) {
            route = route + 'admin'
          }
          this.$router.push (route)
        } else {
          this.errorLogin = true
        }
      },
      getUser () {
        return this.users.filter (user => user.username === this.username && user.password === this.password)[0]
      },
      clearUser () {
        storage.methods.clearStorage ()
      }
    },
    created () {
      console.log ('created')
      this.clearUser ()
    }
  }
</script>
