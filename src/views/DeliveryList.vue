<script>
import dataaxios from "../dataaxios";
import moment from "moment";
export default {
  name: "DeliveryList",
  data() {
    return {
      deliveries: [],
      userId: 0, //TODO: get current user id
      orderId: 1, //TODO: show 1, or delivery history if have time
      deliveryId: 1,
    };
  },

  methods: {
    //Admin only
    fetchAllDeliveries() {
      dataaxios
        .getAllDeliveries()
        .then((response) => {
          this.deliveries = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchMyDelivery() {
      dataaxios
        .getDelivery(this.deliveryId)
        .then((response) => {
          this.deliveries = [response.data];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deliveryDispatched(orderId) {
      dataaxios
        .updateDeliveryDispatched(orderId)
        .then((_) => {
          this.fetchAllDeliveries();
          console.log(_);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deliveryDelivered(orderId) {
      dataaxios
        .updateDeliveryDelivered(orderId)
        .then((_) => {
          this.fetchAllDeliveries();
          console.log(_);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deliveryRejected(orderId) {
      dataaxios
        .updateDeliveryRejected(orderId)
        .then((_) => {
          this.fetchAllDeliveries();
          console.log(_);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    formatDate(date) {
      if (date == null) return "-";
      return moment(String(date)).format("MMM DD, hh:mm");
    },
  },
  computed: {
    total() {
      return this.deliveries.length;
    },
  },
  created() {
    this.fetchAllDeliveries();
    //this.fetchMyDelivery()
  },
};
</script>

<!-- {
        "id": 1,
        "driverId": 0,
        "orderId": 4,
        "estimateDeliveryTime": 15,
        "startDeliveryTime": "2022-05-14T06:58:23.400518Z",
        "endDeliveryTime": null,
        "recipientName": null,
        "recipientPhoneNumber": null,
        "recipientAddress": null,
        "status": "READY"
    } -->
<template>
  <div class="container" style="text-align: left">
    <h1>Deliveries</h1>
    <div
      class="card"
      v-for="item in deliveries"
      :key="item.id"
      style="margin-bottom: 20px"
    >
      <div class="card-body">
        <div class="card-title">Deliver #{{ item.id }}</div>
        <div class="card-text row">
          <div class="col-sm-8">
            Recipient:
            <h4>{{ item.recipientName }}</h4>
            <p>
              Address: {{ item.recipientAddress }}<br />
              Phone: {{ item.recipientPhoneNumber }}
            </p>
            <small> Estimate: {{ item.estimateDeliveryTime }} minutes</small
            ><br />
            <small>
              Dispatched time:
              {{ this.formatDate(item.startDeliveryTime) }}</small
            ><br />
            <small>
              Deliveried time:
              {{ this.formatDate(item.endDeliveryTime) }}</small
            >
          </div>
          <div class="col-sm-4">
            Status<br />
            <h3>{{ item.status }}</h3>

            <button
              type="button"
              class="btn btn-primary m2"
              v-if="item.status == 'READY'"
              v-on:click="deliveryDispatched(item.orderId)"
            >
              Dispatch
            </button>
            <button
              type="button"
              class="btn btn-success m-2"
              v-if="item.status == 'DISPATCHED'"
              v-on:click="deliveryDelivered(item.orderId)"
            >
              Success
            </button>
            <button
              type="button"
              class="btn btn-danger m-2"
              v-if="item.status == 'READY'||item.status == 'DISPATCHED'"
              v-on:click="deliveryRejected(item.orderId)"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <p>Total: {{ total }}</p>
  </div>
</template>