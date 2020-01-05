<template>
  <!-- <div class="navbar white"> -->
  <v-app-bar app color="white" height="66px" :elevate-on-scroll="true">
    <v-container>
      <v-layout mx-auto align-center>
        <!-- <div class="navbar"> -->
        <v-toolbar-title class="d-flex align-center">
          <img
            src="@/assets/logo_02.png"
            alt=""
            class="w-100"
            :style="
              $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.xsOnly
                ? { width: '220px' }
                : { width: '270px' }
            "
          />
          <!-- 佑埕開發顧問 -->
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-layout menu justify-end v-if="fullWidth >= 1100">
          <v-btn
            append
            text
            :ripple="false"
            v-for="item in $store.state.menu"
            :key="item.id"
            :class="linkActive(item.id)"
            @click="$vuetify.goTo(`#${item.id}`, $store.state.scrollOption)"
            >{{ item.name }}</v-btn
          >
        </v-layout>
        <!-- <v-btn @click.native="activeItem = 3" append flat to="/personnel">人員資料</v-btn> -->
        <!-- </v-toolbar-items> -->
        <v-app-bar-nav-icon
          v-if="fullWidth < 1100"
          @click="$emit('drawerToggle')"
        />
        <!-- </div> -->
      </v-layout>
    </v-container>
  </v-app-bar>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Nav",
  props: {
    fullWidth: Number
  },
  methods: {
    linkActive(linkId) {
      return this.$store.state.activeLink === linkId ? "active" : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  // margin: 0 auto;
  // max-width: 1100px;
  height: 66px;
  display: flex;
  justify-content: center;
}
.max-width {
  max-width: 1100px;
}
.theme--light.v-btn--active::before {
  opacity: 0;
}
.theme--light.v-btn:hover::before {
  opacity: 0;
}
.menu .active {
  color: #95c85a;
}
</style>