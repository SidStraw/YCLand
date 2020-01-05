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
    getBolckOffsetTop() {
      return this.$store.state.menu
        .map((item, index) => {
          if (index === 0)
            return {
              id: item.id,
              offsetTop: 0
            };
          return {
            id: item.id,
            offsetTop:
              document.querySelector(`#${item.id}`).offsetTop +
              this.$store.state.fullHeight * 0.75
          };
        })
        .reverse();
    }
  },
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    this.$store.commit("setFullHeight", window.innerHeight);

    // const bolckOffsetTop = this.getBolckOffsetTop();
    this.$store.commit("setState", {
      targetState: "activbolckOffsetTopeLink",
      value: this.getBolckOffsetTop()
    });
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
      this.$store.commit("setFullHeight", window.innerHeight);
      this.$store.commit("setState", {
        targetState: "activbolckOffsetTopeLink",
        value: this.getBolckOffsetTop()
      });
    };
    window.addEventListener("scroll", () => {
      const [
        ...activbolckOffsetTopeLink
      ] = this.$store.state.activbolckOffsetTopeLink;

      activbolckOffsetTopeLink.some(item => {
        if (window.pageYOffset > item.offsetTop) {
          this.$store.commit("setState", {
            targetState: "activeLink",
            value: item.id
          });
          return true;
        } else {
          this.$store.commit("setState", {
            targetState: "activeLink",
            value: "home"
          });
        }
      }); //計算目前位置是第幾個連結的目標
    });
    this.$store.dispatch("getData")
  }
};
</script>

<style lang="scss">
.app-content {
  top: 100vh;
  position: relative;
  z-index: 4;
}
.w-100 {
  width: 100%;
}
</style>