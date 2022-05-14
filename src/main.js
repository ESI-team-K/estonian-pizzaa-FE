import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHashHistory } from 'vue-router'
import DeliveryForm from '@/views/DeliveryForm';
import Orders from "@/views/OrderList";
import Order from "@/views/Order";
import Notifications from "@/views/NotificationList";
import DeliveryList from "@/views/DeliveryList";
import Menu from "@/views/Menu";
import Cart from "@/views/Cart";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUser)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const routes = [
  { path: '/deliveryform', component: DeliveryForm },
  { path: '/orderslist', component: Orders },
  { path: '/order/:id', component: Order },
  { path: '/notifications', component: Notifications},
  { path: '/delivery', component: DeliveryList},
  { path: '/menu', component: Menu },
  { path: '/cart', component: Cart },
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

app.use(router);
app.use(store);

app.mount('#app')
