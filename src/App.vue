<template>
  <p>
    <router-link to="/deliveryform">Delivery Form</router-link>
    <router-link to="/orderslist">Orders List</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view> <!-- TODO: Remove/alter this line when auth is properly implemented -->

  <div id="app">
      <navi/>
    
    <div class="home-wrapper">
      <div class="home-inner">
        <Login/>
      </div>
    </div>
  </div>
  

</template>

<script>
import Navi from '@/components/Navi';
import Login from '@/components/Login';

export default {
  name: 'App',
    components: {
      Navi,
      Login
    }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  *{
    box-sizing: border-box;
  }

  body {
    background: #dbe6f1;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }

  h1,h2,h3,h4,h5,h6,label, span{
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body, html, #app, #root, .home-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }

  .home-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .home-inner{
    width: 450px;
    margin: auto;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

  .home-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }

  .home-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

</style>
