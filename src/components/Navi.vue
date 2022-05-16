<template>
  <nav class="navbar navbar-expand navbar-light mb-5">
    <div class="container">
      <router-link to="/" class="navbar-brand">Estonian Pizzaa</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="showDriverBoard" class="nav-item">
          <router-link to="/driver" class="nav-link">Driver Page</router-link>
        </li>
        <li v-if="showStaffBoard" class="nav-item">
          <router-link to="/staff" class="nav-link">Staff Page</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User Page</router-link>
        </li>

          <li class="nav-item">
            <router-link to="/orderslist" class="nav-link">All orders</router-link> <!-- TODO: Only show this button to kitchen -->
          </li>
          <li class="nav-item">
            <router-link to="/menu" class="nav-link">Menu</router-link> <!-- TODO: Only show this button to customers -->
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart</router-link> <!-- TODO: Only show this button to customers -->
          </li>
          <li v-if="showDriverBoard" class="nav-item">
            <router-link to="/delivery" class="nav-link">My Delivery</router-link> <!-- TODO: Only show this button to driver -->
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
                <font-awesome-icon icon="bell" />
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Notifications />
              </div>
            </div>
          </li>
        </ul>

        <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
           <i class="fa-solid fa-user-plus"></i> Register
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
             <i class="fa-solid fa-user-lock"></i> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <i class="fa-solid fa-user-shield"></i>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-danger text-light" @click.prevent="logOut">
            <i class="fa-solid fa-circle-xmark"></i> Exit
          </a>
        </li>
      </div>

      </div>
    </div>
  </nav>
  <div class="container">
      <router-view />
    </div>
</template>

<script>
import Notifications from "@/views/NotificationMini";
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faBell)
library.add(faShoppingCart)

export default {
  name: "NaviPage",
  components: {
    Notifications,
    FontAwesomeIcon
  },

   computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showDriverBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_DRIVER');
      }

      return false;
    },
    showStaffBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_STAFF');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }

 

};
</script>