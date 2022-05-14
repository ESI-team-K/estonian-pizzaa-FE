<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Payment Form</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <div class="card">
          <div class="card-header">
            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
              <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                <li class="nav-item" @click="paymentMethod='card'">
                  <a data-toggle="pill" class="nav-link active ">Credit
                    Card</a>
                </li>
                <li class="nav-item" @click="paymentMethod='cash'">
                  <a data-toggle="pill" class="nav-link ">Cash</a>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div v-show="paymentMethod==='card'" class="pt-3">
                <form role="form" onsubmit="event.preventDefault()">
                  <div class="form-group">
                    <label for="username">
                      <h6>Card Owner</h6>
                    </label>
                    <input type="text" placeholder="Card Owner Name" required
                           class="form-control" v-model="cardOwner">
                  </div>
                  <div class="form-group">
                    <label for="cardNumber">
                      <h6>Card number</h6>
                    </label>
                    <div class="input-group">
                      <input type="text" v-model="validCardNumber"
                             placeholder="Valid card number"
                             class="form-control " required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="form-group">
                        <label>
                          <span class="hidden-xs">
                            <h6>Expiration Date</h6>
                          </span>
                        </label>
                        <div class="input-group">
                          <input type="number" placeholder="MM" name="" class="form-control" required v-model="expirationMonth">
                          <input type="number" placeholder="YY" name="" class="form-control" required v-model="expirationYear">
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="form-group mb-4">
                        <label>
                          <h6>
                            CVV
                          </h6>
                        </label>
                        <input type="text" required class="form-control" v-model="cvv">
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button type="button" class="btn btn-primary btn-block shadow-sm" @click="submitForm()">
                      Confirm Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div v-show="paymentMethod==='cash'" class="pt-3">
              <p> You will be requested to pay at the register or with the
                delivery driver.
              </p>
              <button type="button" class="btn btn-primary" @click="submitForm()">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataaxios from '@/dataaxios';

export default {
  name: "PaymentForm",
  data() {
    return {
      paymentMethod: 'card',
      cardOwner: "",
      validCardNumber: '',
      expirationMonth: '',
      expirationYear: '',
      cvv: '',
      cart: [],
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
    async submitForm() {
      localStorage.setItem('invoiceItems', JSON.stringify(this.cart));
      localStorage.removeItem('cart');

      let orderReq = JSON.parse(localStorage.getItem('order'));

      let order = await dataaxios.createOrder(orderReq);
      let orderId = order.data;
      let invoice = await dataaxios.createInvoice(this.cart);
      invoice = invoice.data;

      if (this.paymentMethod === 'card') {
        await dataaxios.payByCard(invoice.payment.id, {
          cardHolder: this.cardOwner,
          cardNumber: this.validCardNumber,
          cardExpiration: `${this.expirationMonth}/${this.expirationYear}`,
          cardType: 'MASTERCARD',
        });
      } else {
        await dataaxios.payByCash(invoice.payment.id);
      }

      // If is a delivery, should be an enum really
      if (orderReq.type === "2") {
        let deliveryInfo = JSON.parse(localStorage.getItem('deliveryForm'));
        let deliveryForm = {
          estimateDeliveryTime: 5,
          recipientName: deliveryInfo.fullName,
          recipientPhoneNumber: deliveryInfo.phoneNumber,
          recipientAddress: deliveryInfo.address
        }
        await dataaxios.createDelivery(orderId, deliveryForm);
      }

      await this.$router.push({ path: "/invoiceview" });
    }
  }
}
</script>

<style scoped>

</style>