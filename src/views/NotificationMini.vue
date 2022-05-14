<script>
import Notifications from "@/views/NotificationList";

export default {
  name: "NotificationMini",
  extends: Notifications,
};
</script>
<template>
  <div class="container">
    <div class="" v-for="item in notification" :key="item.id">
      <div class="">
        <div class="">{{ item.message }}</div>
        <small class="">Sent: {{ this.formatDate(item.notifyDateTime) }}</small>
        <hr />
      </div>
    </div>
    <a href="#/notifications">View all</a>
  </div>
</template>