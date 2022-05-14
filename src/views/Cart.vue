<template>
<div id= "cart">
      <div class="col-md-12">
        <h1>Shopping Cart</h1>
      </div>
    <ul>
    <li class="item" v-for= "menuItem in cart" :key="menuItem.id">
        <!-- id and name -->
        <span> {{menuItem.name}}</span><br>

        <!-- ingredients -->
        <span> Ingredients: {{menuItem.ingredients}}</span><br>
        
        <!-- buttons -->
        <button class="btn btn-danger" v-on:click="removeFromCart(menuItem)">Remove</button>
    </li>
    </ul>
        <input type="radio" v-model="orderType" value="0"> Reserve Table<br>
        <input type="radio" v-model="orderType" value="1"> Takeaway<br>
        <input type="radio" v-model="orderType" value="2"> Delivery<br>


    <button class="btn btn-success" v-on:click="makeOrder()">Continue to Payment</button>
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
      cart: [],
      orderType: 0
  }
  
},

mounted() {
    if (localStorage.getItem('cart')) {
        try {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        } catch(e) {
            localStorage.removeItem('cats');
            
            console.log(e);
        }
    }
},
methods: {
    removeFromCart(menuItem) {
        // Find index of menuitem
        const index = this.cart.indexOf(menuItem);
        // remove menuItem
        if (index > -1) {
            this.cart.splice(index, 1);
            this.saveCart();
        }
    },
    saveCart() {
        const parsed = JSON.stringify(this.cart);
        localStorage.setItem('cart', parsed);
    },
    continueToPayment() {
        this.makeOrder();
        // TODO: Redirect to payment somehow
        this.cart = [];
        this.saveCart();
    },
    makeOrder() {
        var customerId = 0; // TODO: get this from auth (?)
        var orderReq = {
            type: this.orderType,
            shoppingCart: this.cart,
            customerId: customerId
        }
        
        dataaxios.createOrder(orderReq);
    }
},



};
</script>

<style scoped>


#cart{
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#cart ul{
padding: 10px;
text-align:center;
display:flex;
}
#cart li{
display: grid;
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: #f3f3f3;
text-align: inherit;
border-radius:20px;
}
.buttons ul{
    text-align: center;
}
</style>