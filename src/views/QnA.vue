<template>
  <div id="qna">
    <BlockTitle title="常見問答" />
    <v-container>
      <v-layout wrap>
        <!-- <v-flex text-center>
          <img src="@/assets/bk2-2.jpg" style="max-width: 100%" />
        </v-flex> -->
        <v-flex over-flow-hidden>
          <v-list>
            <v-list-group
              no-action
              sub-group
              :value="false"
              prepend-icon="mdi-arrow-up-circle"
              v-for="(item, i) in $store.state.QAData"
              :key="i"
            >
              <template v-slot:activator>
                <v-list-item-title>{{ item.data[0] }}</v-list-item-title>
              </template>
              <p
                class="black--text pa-9"
                v-html="item.data[1].replace(/\r\n|\n/g, '<br>')"
              ></p>
              <!-- <v-list-item link>
              <v-list-item-content></v-list-item-content>
            </v-list-item> -->
            </v-list-group>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BlockTitle from "@/components/BlockTitle";

export default {
  name: "QnA",

  components: {
    BlockTitle
  },

  data: () => ({})
};
</script>

<style lang="scss" scoped>
.logo-img {
  flex: 1 1 300px;
}
.over-flow-hidden {
  overflow: hidden;
}
.v-list-group {
  .v-list-group__header {
    .v-list-item__title {
      white-space: normal;
    }
  }
}
</style>