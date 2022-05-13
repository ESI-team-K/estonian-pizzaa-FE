<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">Home</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Sign up</a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a
                class="nav-link"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Notifications 
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Notifications />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// var x;
import Notifications from "@/views/NotificationList";
export default {
  name: "NaviPage",
  components: {
    Notifications,
  },
  data() {
    return { };
  },
  created() {
    
  },
};
</script>