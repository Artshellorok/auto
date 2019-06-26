<template>
  <div id="app">
    <v-app>
      <v-toolbar>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute width="200" id="drawer">
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>local_car_wash</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Автомойки</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/reg">
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Регистрация</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
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
      coordinates: undefined,
      drawer: false
    };
  },
  methods: {},

  mounted() {
    navigator.geolocation.watchPosition(
      position => {
        this.coordinates = position.coords;
      },
      () => {
        alert("Пожалуйста, включите геолокацию!");
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  }
};
</script>
