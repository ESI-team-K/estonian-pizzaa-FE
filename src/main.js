import { createApp } from 'vue'
import App from './App.vue'
// import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import DeliveryForm from '@/views/DeliveryForm';
import Orders from "@/views/OrderList";
import Order from "@/views/Order";
import Notifications from "@/views/NotificationList";
import DeliveryList from "@/views/DeliveryList";
import Menu from "@/views/Menu";
import Cart from "@/views/Cart";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from "@/store";

import VeeValidate from 'vee-validate';

import UserHome from "@/components/UserHome.vue";
import UserLogin from "@/components/UserLogin.vue";
import UserRegister from "@/components/UserRegister.vue";

const UserProfile = () => import("@/components/UserProfile.vue")
const BoardDriver = () => import("@/components/BoardDriver.vue")
const BoardStaff = () => import("@/components/BoardStaff.vue")
const BoardUser = () => import("@/components/BoardUser.vue")



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PaymentForm from '@/views/PaymentForm';
import InvoiceView from '@/views/InvoiceView';
// import Login from '@/components/Login';
// import Register from '@/components/Register';

/* add icons to the library */
library.add(faUser)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

// Create a new store instance.
// const store = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

const routes = [
  // {path: "/", component: Menu},
  // {path: "/login", component: Login},
  // {path: "/register", component: Register},
  {
    path: "/",
    name: "home",
    component: UserHome,
  },
  {
    path: "/home",
    component: UserHome,
  },
  {
    path: "/login",
    component: UserLogin,
  },
  {
    path: "/register",
    component: UserRegister,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: UserProfile,
  },
  {
    path: "/driver",
    name: "driver",
    // lazy-loaded
    component: BoardDriver,
  },
  {
    path: "/staff",
    name: "staff",
    // lazy-loaded
    component: BoardStaff,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
  { path: '/deliveryform', component: DeliveryForm },
  { path: '/orderslist', component: Orders },
  { path: '/order/:id', component: Order },
  { path: '/notifications', component: Notifications},
  { path: '/delivery', component: DeliveryList},
  { path: '/menu', component: Menu },
  { path: '/cart', component: Cart },
  { path: '/paymentform', component: PaymentForm },
  { path: '/invoiceview', component: InvoiceView }
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


app.use(router);
app.use(VeeValidate);
app.use(store);

app.mount('#app')
