<template>
  <v-navigation-drawer
    :value="drawer"
    @input="status => $emit('drawerToggle', status)"
    disable-resize-watcher
    app
    right
  >
    <v-list dense class="menu text-center" id="drawer_menu">
      <v-list-item
        v-for="item in $store.state.menu"
        :key="item.id"
        :class="linkActive(item.id)"
        @click="$vuetify.goTo(`#${item.id}`, $store.state.scrollOption)"
      >
        <!-- <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action> -->
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  props: {
    drawer: Boolean
  },
  methods: {
    linkActive(linkId) {
      return this.$store.state.activeLink === linkId ? "active" : "";
    }
  }
};
</script>

<style lang="scss" scoped>
#drawer_menu .active {
  color: #95c85a !important;
}
</style>