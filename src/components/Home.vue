<template>
<div>
    <h3 v-if="user">Welcome, {{user.username}}</h3>
    <h3 v-if="!user">You are not logged  in!</h3>
</div>
    
</template>
<script>
import axios from 'axios'

 export default {
     name: 'HomePage',
     data() {
       return {
         user: null
      }
     },
     async created() {
       const response = await axios.get('user', {
         headers: {
           Authorization: 'Bearer' + localStorage.getItem('token')
         }
       })
       console.log(response);
       this.user = response.data;
     }  
     
 }
</script>
