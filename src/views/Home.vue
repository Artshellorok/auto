<template>
  <v-layout v-if="coordinates">
    <v-flex>
      <v-card>
        <v-img :src="require('@/assets/sample.jpeg')" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Автомойка самообслуживания "Туймаада"</h3>
            <div>{{coordinates.latitude}} , {{coordinates.longitude}}</div>
            <div>{{calcDist(cards[0], coordinates)}}</div>
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
import { getPreciseDistance } from "geolib";

export default {
  data() {
    return {
      cards: [
        {
          latitude: 62.009584,
          longitude: 129.67872,
          title: `Автомойка самообслуживания "Туймаада"`
        }
      ]
    };
  },
  props: ["coordinates"],
  methods: {
    calcDist(from, to) {
      return getPreciseDistance(
        { latitude: from.latitude, longitude: from.longitude },
        { latitude: to.latitude, longitude: to.longitude },
        1
      );
    }
  },

  components: {}
};
</script>
