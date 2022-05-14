<template>
  <nav class="navbar navbar-expand navbar-light mb-5">
    <div class="container">
      <a href="#" class="navbar-brand">Home</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Sign up</router-link>
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
          <li class="nav-item">
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
      </div>
    </div>
  </nav>
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
  data() {
    return { };
  },
  created() {
    
  },
};
</script>