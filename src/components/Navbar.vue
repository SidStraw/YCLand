<template>
  <!-- <div class="navbar white"> -->
  <v-app-bar app color="white" height="66px" :elevate-on-scroll="true">
    <v-layout max-width mx-auto align-center="">
      <!-- <div class="navbar"> -->
      <v-toolbar-title>佑埕開發顧問</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
    
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
      
          <v-menu left bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
      
            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
      <!-- <v-toolbar-items class="d-flex flex xs7"> -->
      <v-layout justify-end v-if="fullWidth >= 1100">
        <v-btn
          append
          text
          :ripple="false"
          v-for="item in $store.state.menu"
          :key="item.id"
          @click="$vuetify.goTo('#home', $store.state.scrollOption)"
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
  </v-app-bar>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Nav",
  props: {
    fullWidth: Number
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
</style>