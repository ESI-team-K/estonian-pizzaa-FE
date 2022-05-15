<template>
    <form @submit.prevent="handlerRegister">
        <h3>Sign Up</h3>
        <div class="form-group">
            <input type="text" class="form-control" v-model="username" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>
        <button class="btn btn-success btn-block">Signup</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RegisterUser',
    data() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async handleRegister() {
        const response = await axios.post('https://estonian-pizzaa-be.herokuapp.com/api/auth/signup', {
          username: this.username,
          email: this.email,
          password: this.password
        }
        );

        console.log(response);
        this.$router.push('/login');
          
      }
    }
    
}
</script>