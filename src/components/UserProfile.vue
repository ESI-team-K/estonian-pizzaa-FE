<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>Welcome, </strong> <span class="text-muted">{{currentUser.username}}</span>
      </h3>

      <div class="alert alert-light" role="alert">
         Your user id is {{currentUser.id}} and you have the following roles:
         <ul>
          <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
        </ul>
      </div>
          <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <a :href="'mailto:' + currentUser.email" class="btn btn-info">Contact User</a>
    </header>

  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>