<script>
import dataaxios from "../dataaxios";
import moment from "moment";
import { orderBy } from "lodash";
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
          this.notification = this.newestFirst(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchMyNotifications() {
      dataaxios
        .getUserNotifications(this.userId)
        .then((response) => {
          this.notification = this.newestFirst(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    formatDate(date) {
      return moment(String(date)).format("MMM DD, hh:mm");
    },
    newestFirst(noti) {
      return orderBy(noti, "notifyDateTime", "desc");
    },
  },
  computed: {
    total() {
      return this.notification.length;
    },
  },
  created() {
    this.fetchMyNotifications();
  },
};
</script>

<!-- [ { "id": 1, "userId": 0, "message": "Your have an order to deliver", "notifyDateTime": "2022-05-13T16:51:19.611625Z" } ] -->
<template>
  <div class="container" style="text-align: left">
    <h1>Notifications</h1>
    <div
      class="card"
      v-for="item in notification"
      :key="item.id"
      style="margin-bottom: 20px"
    >
      <div class="card-body">
        <div class="card-title">{{ item.message }}</div>
        <small class="card-text">
          Sent: {{ this.formatDate(item.notifyDateTime) }} #{{ item.id }}
        </small>
      </div>
    </div>
    <p>Total: {{ total }}</p>
  </div>
</template>