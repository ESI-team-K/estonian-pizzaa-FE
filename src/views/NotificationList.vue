<script>
import dataaxios from "../dataaxios";
import moment from "moment";
export default {
  name: "NotificationList",
  data() {
    return {
      notification: [],
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
      return moment(String(date)).format("MMM DD, hh:mm");
    },

  },
  computed: {
    total() {
      // `this` points to the component instance
      return this.notification.length;
    }
  },
  created() {
    this.fetchMyNotifications();
  },
};
</script>

<!-- [ { "id": 1, "userId": 0, "message": "Your have an order to deliver", "notifyDateTime": "2022-05-13T16:51:19.611625Z" } ] -->
<template>
<div class="container">
  <!-- <h1>Notifications</h1> -->
  <div class="" v-for="item in notification" :key="item.id">
    <div class="">
      <div class="">{{ item.message }}</div>
      <small class="">Sent: {{ this.formatDate(item.notifyDateTime) }}</small>
      <hr/>
    </div>
  </div>

  <!-- <p>Total: {{ total }}</p> -->
  <a href="#/notifications">Show all</a>
</div>
  
</template>