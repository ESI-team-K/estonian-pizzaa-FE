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
            <a href="#/orderslist" class="nav-link"> All Orders </a> <!-- TODO: Only show this button to kitchen -->
          </li>
          <li class="nav-item">
            <a href="#/menu" class="nav-link">Menu</a> <!-- TODO: Only show this button to customers -->
          </li>
          <li class="nav-item">
              <a
                href="#/cart"
                class="nav-link"
                type="button"
              >
                <font-awesome-icon icon="cart-shopping" /> <!-- TODO: Only show this button to customers -->
              </a>
          </li>
          <li class="nav-item">
            <a href="#/delivery" class="nav-link"> My Delivery </a> <!-- TODO: Only show this button to driver -->
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