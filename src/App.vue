<template>
  <div id="app">
    <v-app>
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
      </v-toolbar>

      <v-content class="content">
        <router-view :coordinates="coordinates"/>
      </v-content>
    </v-app>
  </div>
</template>

<style scoped>
.content {
  margin-top: 15px;
}
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      coordinates: undefined
    };
  },
  methods: {},

  mounted() {
    navigator.geolocation.watchPosition(
      position => {
        this.coordinates = position.coords;
        console.log(this.coordinates);
      },
      err => {
        alert("Пожалуйста, включите геолокацию!");
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  }
};
</script>
