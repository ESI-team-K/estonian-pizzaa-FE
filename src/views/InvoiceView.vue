<template>
  <div class="container">
    <div class="col-md-12">
      <h1>Invoice</h1>
    </div>
    <div id="invoice-items">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Ingredients</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in cart" v-bind:key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.ingredients }}</td>
                        <td>{{ item.price }}</td>
                      </tr>
                    <!-- Sum -->
                      <tr>
                        <td></td>
                        <td></td>
                        <td>{{ this.cart.reduce((partialSum, a) => partialSum + a.price, 0) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceView",
  data() {
    return {
      cart: [],
    }
  },
  mounted() {
    if (localStorage.getItem('invoiceItems')) {
      try {
        this.cart = JSON.parse(localStorage.getItem('invoiceItems'));
      } catch(e) {
        localStorage.removeItem('invoiceItems');
      }
    }
  },

}
</script>

<style scoped>

</style>