<template>
<div id= "orders-list">
    <h1>Orders List</h1>
    <ul>
    <li class="item" v-for= "order in ordersList" :key="order.orderId">
        <span class="id"> <b>Order #{{order.orderId}}</b></span><br>

        <!-- cart -->
        <div class="cart" v-for= "cartItem in order.cartItems" :key="cartItem.id">
            {{cartItem.menuItem.name}} - Size {{cartItem.menuItem.size}}
        </div>

        <!-- status -->
        <span class="red" v-if="order.status == 'CANCELLED'">CANCELLED<br></span>
        <span class="green" v-if="order.status == 'CONFIRMED'">CONFIRMED<br></span>
        
        <!-- buttons -->
        <span class="buttons" v-if="order.status == 'PENDING'">
            <button v-on:click="confirmOrder(order.orderId)">Confirm</button>
        </span>
        <span class="buttons" v-if="order.status !== 'CANCELLED'">
            <button v-on:click="cancelOrder(order.orderId)">Cancel</button>
            <button v-on:click="cancelAndRefundOrder(order.orderId)">Cancel and Refund</button>
        </span>
    </li>
    </ul>
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
      ordersList: null
  }
  
},
methods: {
    fetchOrders() {
        dataaxios.getAllOrders()
            .then(response => {
                this.ordersList = response.data;
            })
            .catch(e => {
            console.log(e);
            });
    },
    confirmOrder(orderId) {
        dataaxios.confirmOrder(orderId)
            .then(response => {
                alert("Order with id " + orderId + " has been confirmed.")
                console.log(response)
                this.fetchOrders();
            })
            .catch(e => {
            console.log(e);
            });
    },
    cancelOrder(orderId) {
        dataaxios.cancelOrder(orderId)
            .then(response => {
                alert("Order with id " + orderId + " has been canceled.")
                console.log(response)
                this.fetchOrders();
            })
            .catch(e => {
            console.log(e);
            });
    },
    cancelAndRefundOrder(orderId) {
        dataaxios.cancelAndRefundOrder(orderId)
            .then(response => {
                alert("Order with id " + orderId + " has been refunded.")
                console.log(response)
                this.fetchOrders();
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

h1 {
  font-size: 20px ;
}


#orders-list{
background: #f3f3f3;
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#orders-list ul{
padding: 0;
text-align: left;
display: block;
}
#orders-list li{
display: block;
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: rgba(255,255,255,0.7);
}
.red{
    color: rgb(255, 0, 0);
}
.green{
    color: rgb(32, 168, 43);
}
</style>