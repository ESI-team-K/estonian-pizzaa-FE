import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHashHistory } from 'vue-router'
import DeliveryForm from '@/views/DeliveryForm';
import Orders from "@/views/OrderList";
import Notifications from "@/views/NotificationList";
import Menu from "@/views/Menu";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App);

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
  { path: '/notifications', component: Notifications},
  { path: '/menu', component: Menu },
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

app.use(router);
app.use(store);

app.mount('#app')
