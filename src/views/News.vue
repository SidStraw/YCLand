<template>
  <div id="news">
    <BlockTitle
      title="最新消息"
      subTitle="工廠管理輔導法&特定工廠資訊一手掌握"
    />
    <v-container>
      <!-- <h3 class="text-center headline font-weight-medium mb-5">
        工廠管理輔導法&特定工廠資訊一手掌握
      </h3> -->
      <!-- <v-layout> -->
      <div v-for="item in $store.state.LINKData" :key="item.index">
        <a target="_blank" :href="item.data[1]" class="news-link">
          <v-hover>
            <template v-slot="{ hover }">
              <div
                :class="`box-shadow${hover ? '-up' : ''}`"
                class="mx-auto pa-6 transition-swing title"
              >
                <v-icon large color="#95c85a">mdi-home</v-icon>
                {{ item.data[0] }}
              </div>
            </template>
          </v-hover>
        </a>
      </div>
      <!-- </v-layout> -->
    </v-container>
  </div>
</template>

<script>
import BlockTitle from "@/components/BlockTitle";

export default {
  name: "Team",

  components: {
    BlockTitle
  }
};
</script>

<style lang="scss" scoped>
.logo-img {
  flex: 1 1 300px;
}
.news-link {
  color: #424242;
  text-decoration: none;
}
.box-shadow {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0) !important;
}
.box-shadow-up {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
    0px 15px 22px 2px rgba(0, 0, 0, 0), 0px 6px 28px 5px rgba(0, 0, 0, 0) !important;
}
</style>