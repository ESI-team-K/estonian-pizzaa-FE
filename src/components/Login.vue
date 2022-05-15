<template>
    <form @submit.prevent="handleLogin">
        <h3>Login</h3>
        <div class="form-group">
            <input type="text" class="form-control" v-model="username" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>
        <button class="btn btn-success btn-block">Login</button>
    </form>
</template>

<script>
import axios from 'axios'
 export default {
     name: 'LoginPage',
     data(){
       return {
         username: '',
         password: ''
       }
     },
     methods: {
       async handleLogin() {
         const response = await axios.post('https://estonian-pizzaa-be.herokuapp.com/api/auth/signin', {
           username: this.username,
           password: this.password
         });
         console.log(response);
         localStorage.setItem('token', response.data.token);
         this.$router.push('/');
       }
     }
 }
</script>
