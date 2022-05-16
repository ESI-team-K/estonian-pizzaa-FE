<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
      <p> Hey there!</p>
<p> Please, register/login to order from 'Estonian pizzaa' </p>

<p class="lead">
    <a class="btn btn-success btn-lg" href="/register" role="button">Create Account</a> &nbsp; <a class="btn btn-secondary btn-lg" href="/login" role="button">Login</a>
  </p>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "UserHome",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
