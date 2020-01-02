<template>
  <v-app>
    <Drawer :drawer="drawer" @drawerToggle="status => (drawer = status)" />
    <Navbar :fullWidth="fullWidth" @drawerToggle="drawer = true" />
    <Carousel style="margin-top: 66px" />
    <div class="app-content white w-100">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Drawer from "@/components/Drawer";
import Carousel from "@/components/Carousel";
export default {
  name: "App",
  components: {
    Navbar,
    Drawer,
    Carousel
  },
  data: () => {
    return {
      fullWidth: 0,
      drawer: false
    };
  },
  methods: {
    show() {}
  },
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    this.$store.commit("setFullHeight", window.innerHeight);
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
      this.$store.commit("setFullHeight", window.innerHeight);
    };
    window.addEventListener("scroll", () => {});
  }
};
</script>

<style lang="scss">
.app-content {
  top: 100vh;
  position: relative;
  z-index: 4;
}
// @media screen and (max-width: 600px) {
//   body {
//     font-size: 12px;
//   }
// }
</style>