<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Delivery Form</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="submitForm">
          <!-- Full Name -->
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="fullName" name="fullName"
                   v-model="form.fullName" placeholder="Full Name" required>
          </div>
          <!-- Address -->
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" name="address"
                   v-model="form.address" placeholder="Address" required>
          </div>
          <!-- Phone number -->
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" class="form-control" id="phoneNumber" name="phoneNumber"
                   v-model="form.phoneNumber" placeholder="Phone Number" required>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button type="submit" class="btn btn-primary" @click="submitForm">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "DeliveryForm",
  data() {
    return {
      form: {
        fullName: '',
        address: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    submitForm() {
      // axios submit form
      axios.post('/api/delivery', this.form)
      .then(response => {
            console.log(response);
          }
      )
      .catch(error => {
            console.log(error);
          }
      );
    }
  }
}
</script>

<style scoped>

</style>