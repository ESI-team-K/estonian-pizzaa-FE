<script>
import dataaxios from "../dataaxios";
import moment from "moment";
export default {
  data() {
    return {
      notification: null,
      userId: 0, //TODO: get current user id
    };
  },

  methods: {
    //Admin only
    fetchAllNotification() {
      dataaxios
        .getAllNotifications()
        .then((response) => {
          this.notification = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchMyNotifications() {
      dataaxios
        .getUserNotifications(this.userId)
        .then((response) => {
          this.notification = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    formatDate(date) {
      return moment(String(date)).format("MM/DD/YYYY hh:mm");
    },
  },
  created() {
    this.fetchMyNotifications();
  },
};
</script>
<!-- [ { "id": 1, "userId": 0, "message": "Your have an order to deliver", "notifyDateTime": "2022-05-13T16:51:19.611625Z" } ] -->
<template>
<div class="container">
  <h1>Notifications</h1>
  <div class="card" v-for="item in notification" :key="item.id">
    <div class="card-body">
      <p class="card-title">{{ item.message }}</p>
      <small class="card-text">Sent: {{ this.formatDate(item.notifyDateTime) }}</small>
    </div>
  </div>
</div>
  
</template>