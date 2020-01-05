<template>
  <v-carousel
    cycle
    :height="$store.state.fullHeight - 66"
    hide-delimiter-background
    show-arrows-on-hover
    :continuous="true"
    class="carousel"
    id="home"
  >
    <!-- <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item> -->

    <!-- 投影片1 -->
    <v-carousel-item>
      <v-layout
        h-100
        carousel-item
        :style="{ backgroundImage: `url(${img[0]})` }"
      >
        <v-layout
          flex-column
          justify-center
          align-center
          white--text
          text-center
          :style="{ backgroundColor: `rgba(0,0,0,0.15)` }"
        >
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-3'
            ]"
          >
            王銘山建築師主持
          </h2>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-3'
            ]"
          >
            佑埕開發顧問有限公司
          </h2>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-3'
            ]"
          >
            宇城建築師事務所團隊
          </h2>
          <p
            :class="[
              $vuetify.breakpoint.xsOnly ? 'body-1' : 'display-1',
              'ma-9'
            ]"
          >
            專辦特定工廠登記證 輔導農地工廠合法
          </p>
        </v-layout>
      </v-layout>
    </v-carousel-item>

    <!-- 投影片2 -->
    <v-carousel-item>
      <v-layout
        h-100
        carousel-item
        :style="{ backgroundImage: `url(${img[1]})` }"
      >
        <v-layout
          flex-column
          justify-center
          align-center
          white--text
          text-center
          :style="{ backgroundColor: `rgba(0,0,0,0.15)` }"
        >
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-9'
            ]"
          >
            您衝事業 我做後盾
          </h2>
          <p
            :class="[
              $vuetify.breakpoint.xsOnly ? 'body-1' : 'display-1',
              'ma-9'
            ]"
          >
            專業顧問讓您無後顧之憂
          </p>
        </v-layout>
      </v-layout>
    </v-carousel-item>

    <!-- 投影片3 -->
    <v-carousel-item>
      <v-layout
        h-100
        carousel-item
        :style="{ backgroundImage: `url(${img[2]})` }"
      >
        <v-layout
          flex-column
          justify-center
          align-center
          white--text
          text-center
          :style="{ backgroundColor: `rgba(0,0,0,0.15)` }"
        >
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-9'
            ]"
          >
            整合土地、測量、建築、環保、水利、水保、消防及營建
          </h2>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-3'
            ]"
          >
            專辦【用地變更】的首選團隊
          </h2>
          <p
            :class="[
              $vuetify.breakpoint.xsOnly ? 'body-1' : 'display-1',
              'ma-9'
            ]"
          >
            跨界整合、業界第一
          </p>
        </v-layout>
      </v-layout>
    </v-carousel-item>

    <!-- 投影片4 -->
    <v-carousel-item>
      <v-layout
        h-100
        carousel-item
        :style="{ backgroundImage: `url(${img[3]})` }"
      >
        <v-layout
          flex-column
          justify-center
          align-center
          white--text
          text-center
          :style="{ backgroundColor: `rgba(0,0,0,0.15)` }"
        >
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-1'
            ]"
          >
            農地工廠納管
          </h2>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-1'
            ]"
          >
            ↓
          </h2>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-1'
            ]"
          >
            就地輔導
          </h2>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-1'
            ]"
          >
            ↓
          </h2>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-1'
            ]"
          >
            合法經營
          </h2>
          <p
            :class="[
              $vuetify.breakpoint.xsOnly ? 'body-1' : 'display-1',
              'mt-9'
            ]"
          >
            步驟簡化、一站式服務
          </p>
          <!-- <p
            :class="[
              $vuetify.breakpoint.xsOnly ? 'body-1' : 'display-1',
              'ma-1'
            ]"
          >
            ↓
          </p>
          <p
            :class="[
              $vuetify.breakpoint.xsOnly ? 'body-1' : 'display-1',
              'ma-1'
            ]"
          >
            就地輔導
          </p>
          <h2
            :class="[
              $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
              'font-weight-bold',
              'mt-9'
            ]"
          >
            步驟簡化、一站式服務
          </h2> -->
        </v-layout>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import img1 from "@/assets/001.jpg";
import img2 from "@/assets/002.jpg";
import img3 from "@/assets/003.jpg";
import img4 from "@/assets/004.jpg";
export default {
  name: "Carousel",
  props: {
    drawer: Boolean
  },
  data() {
    return {
      img: [img1, img2, img3, img4],
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
.h-100 {
  height: 100%;
}
.carousel-item {
  background-position: center center;
  background-size: cover;
}
</style>