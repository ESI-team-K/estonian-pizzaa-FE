<template>
<div id= "menu-item-list">
      <div class="col-md-12">
        <h1>Restaurant Menu</h1>
      </div>
    <ul>
    <li class="item" v-for= "menuItem in menuItemList" :key="menuItem.id">
        <!-- id and name -->
        <span> {{menuItem.name}}</span><br>

        <!-- ingredients -->
        <span> Ingredients: {{menuItem.ingredients}}</span><br>
        
        <!-- buttons -->
        <button class="btn btn-success" v-on:click="addToCart(menuItem)">Add to Cart</button>
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
      menuItemList: null,
      cart: []
  }
},
mounted() {
    if (localStorage.getItem('cart')) {
        try {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        } catch(e) {
            localStorage.removeItem('cart');
        }
    }
},
methods: {
    fetchMenu() {
        dataaxios.getMenu()
            .then(response => {
                this.menuItemList = response.data;
            })
            .catch(e => {
            console.log(e);
            });
    },
    addToCart(menuItem) {
        this.cart.push(menuItem);
        this.saveCart();
    },
    saveCart() {
        const parsed = JSON.stringify(this.cart);
        localStorage.setItem('cart', parsed);
    },
    
},

created(){
    this.fetchMenu();
},

};
</script>

<style scoped>


#menu-item-list{
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#menu-item-list ul{
padding: 10px;
text-align:center;
display:flex;
}
#menu-item-list li{
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