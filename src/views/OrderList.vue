<template>
<div class="OrderList">
    <h1>This is the Orders list page</h1>
    <orders-list-compo v-if="this.ordersListResponse" :ordersList="ordersListResponse"/>

</div>
</template>
<script>
import OrdersListCompo from "@/components/OrderListComponent.vue";
import dataaxios from "../dataaxios";
export default {
  name: "OrdersList",
    components: {
    OrdersListCompo
  },
  data: function() {
  return {
      ordersListResponse: null
  }
  
},
methods: {
    fetchOrders() {
        dataaxios.getAllOrders()
            .then(response => {
                this.ordersListResponse = response.data;
            })
            .catch(e => {
            console.log(e);
            });


    }
},

created(){
    this.fetchOrders();
},

};
</script>

<style scoped>

</style>