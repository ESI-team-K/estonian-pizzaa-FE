import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHashHistory } from 'vue-router'
import DeliveryForm from '@/views/DeliveryForm';
import HelloWorld from '@/components/HelloWorld';
import Orders from "@/views/OrderList";

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
  { path: '/', component: HelloWorld },
  { path: '/deliveryform', component: DeliveryForm },
  { path: '/orderslist', component: Orders },
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

app.use(router);
app.use(store);

app.mount('#app')
