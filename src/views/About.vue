<template>
  <div id="about">
    <BlockTitle title="服務項目" />
    <v-container mb-9 pb-md-9>
      <v-layout flex-wrap align-center>
        <v-flex ma-5 logo-img>
          <img src="@/assets/logo_02.png" alt="" class="w-100" />
        </v-flex>
        <v-flex logo-img px-sm-9 px-md-0>
          <h2
            :class="[
              $vuetify.breakpoint.smAndDown ? 'headline' : 'display-1',
              'font-weight-bold',
              'my-3',
              'text-center',
              'amber--text'
            ]"
          >
            專業。用心。積極。負責
          </h2>
          <p class="body-1">
            佑埕開發顧問有限公司擁有專業的土地、測量、消防、環保、水利、水保及建築師團隊，以專案輔導農地工廠合法化。秉持著客戶即朋友的精神，用心、積極為您服務。
          </p>
          <p class="ma-0 body-1">服務項目如下：</p>
          <ul class="body-1">
            <li>申請農地工廠納管</li>
            <li>撰寫工廠改善計畫書</li>
            <li>取得特定工廠登記證</li>
            <li>毗連非都市土地擴展</li>
            <li>廢污水排放許可申請</li>
            <li>建築補領使用執照</li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BlockTitle from "@/components/BlockTitle";

export default {
  name: "About",

  components: {
    BlockTitle
  }
};
</script>

<style lang="scss" scoped>
.logo-img {
  flex: 1 1 300px;
}
</style>