<template>
  <v-carousel
    cycle
    :height="$store.state.fullHeight - 66"
    hide-delimiter-background
    show-arrows-on-hover
    class="carousel"
    id="home"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    drawer: Boolean
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  position: fixed;
  z-index: 0;
}
</style>