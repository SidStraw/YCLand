<template>
  <v-navigation-drawer
    :value="drawer"
    @input="status => $emit('drawerToggle', status)"
    disable-resize-watcher
    app
    right
  >
    <v-list dense class="text-center">
      <v-list-item v-for="item in $store.state.menu" :key="item.id">
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
  }
};
</script>
