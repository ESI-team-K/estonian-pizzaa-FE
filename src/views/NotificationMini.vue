<script>
import Notifications from "@/views/NotificationList";
import { take } from 'lodash';
export default {
  name: "NotificationMini",
  extends: Notifications,
  computed: {
    noti: function () {
      return take(this.notification, 3)
    }
  },
};
</script>
<template>
  <div class="container">
    <div class="" v-for="item in noti" :key="item.id">
      <div class="">
        <div class="">{{ item.message }}</div>
        <small class="">Sent: {{ this.formatDate(item.notifyDateTime) }}</small>
        <hr />
      </div>
    </div>
    <a href="#/notifications">View all</a>
  </div>
</template>