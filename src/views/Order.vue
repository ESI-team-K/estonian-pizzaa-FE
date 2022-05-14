<template>
<div id= "order-status"  v-if="order">
      <div class="col-md-12">
        <h1>Order Number {{order.orderId}}</h1>
      </div>
        <li>
        <!-- cart -->
        <div class="cart" v-for= "cartItem in order.cartItems" :key="cartItem.id">
            {{cartItem.menuItem.name}} - Size {{cartItem.menuItem.size}}
        </div>
        </li>
        <!-- status -->
        Status: 
        <span class="red" v-if="order.status == 'CANCELLED'">CANCELLED<br></span>
        <span class="green" v-if="order.status == 'CONFIRMED'">CONFIRMED<br></span>
        <span v-if="order.status == 'PENDING'">PENDING<br></span>
        <span v-if="order.status == 'DELIVERING'">DELIVERING<br></span>
        <span class="green" v-if="order.status == 'FULFILLED'">FULFILLED<br></span>
        <!-- button -->
        <button  v-if="order.status !== 'CANCELLED' && order.status !== 'FULFILLED'" 
            class="btn btn-danger" v-on:click="cancelOrder()">Cancel Order</button>
</div>
</template>
<script>
import dataaxios from "../dataaxios";
export default {
  name: "OrdersList",
    components: {
  },
  data: function() {
  return {
      order: null
  }
  
},
methods: {
    fetchOrder(orderId) {
        dataaxios.getOrder(orderId)
            .then(response => {
                this.order = response.data;
            })
            .catch(e => {
            console.log(e);
            });
    },
    cancelOrder() {
        dataaxios.sendCancelReq(this.$route.params.id)
            .then(this.fetchOrder())
            .catch(e => {
            console.log(e);
            });
    },
},

created(){
    this.fetchOrder(this.$route.params.id);
},

};
</script>

<style scoped>


#order-status{
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#order-status ul{
padding: 10px;
text-align: stretch;
display: block;
}
#order-status li{
display: block;
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: #f3f3f3;
text-align: left;
}
.red{
    color: rgb(255, 0, 0);
}
.green{
    color: rgb(32, 168, 43);
}
.buttons ul{
    text-align: left;
}
</style>