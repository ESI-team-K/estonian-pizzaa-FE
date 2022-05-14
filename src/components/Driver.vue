<!-- { "id": 1, "status": null, "driver_name": null } -->
<template>
  <div v-if="driverInfo">
    <h1>Driver Info</h1>
    Name:
    <span v-if="driverInfo.driver_name">{{ driverInfo.driver_name }}</span>
    <p v-if="driverInfo.status">Status: {{ driverInfo.status }}</p>
    <p v-else>Please indicate your status!</p>

    <button
      type="button"
      class="btn btn-success m-2"
      v-if="!driverInfo.status || driverInfo.status != 'AVAILABLE'"
      v-on:click="updateDriverAvailable(driverInfo.Id)"
    >
      Available
    </button>
    <button
      type="button"
      class="btn btn-danger m-2"
      v-if="!driverInfo.status || driverInfo.status != 'BUSY'"
      v-on:click="updateDriverBusy(driverInfo.Id)"
    >
      Busy
    </button>
  </div>
</template>

<script>
import dataaxios from "../dataaxios";
export default {
  name: "DriverInfo",
  data() {
    return {
      driverInfo: null,
      userId: 1,
    };
  },
  methods: {
    getDriver() {
      dataaxios
        .getDriver(this.userId)
        .then((response) => {
          this.driverInfo = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateDriverAvailable() {
      dataaxios
        .updateDriverAvailable(1)
        .catch((e) => {
          console.log(e);
        });
        this.getDriver();
    },
    updateDriverBusy() {
      dataaxios
        .updateDriverBusy(1)
        .catch((e) => {
          console.log(e);
        });
        this.getDriver();
    },
  },
  mounted() {
    this.getDriver();
  },
};
</script>
