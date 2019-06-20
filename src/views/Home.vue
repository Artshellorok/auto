<template>
  <v-layout v-if="coordinates">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img :src="require('@/assets/sample.jpeg')" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Автомойка самообслуживания "Туймаада"</h3>
            <div>{{coordinates.latitude}} , {{coordinates.longitude}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["coordinates"],

  mounted() {},

  components: {}
};
</script>
