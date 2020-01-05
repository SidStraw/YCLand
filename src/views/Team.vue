<template>
  <div id="team">
    <BlockTitle title="專業團隊" />
    <v-container>
      <h2 class="text-center display-1">專業服務團隊</h2>
      <h3 class="text-center headline mb-5">
        由王銘山建築師領導專業特定工廠服務團隊
      </h3>
      <v-layout
        v-for="(item, index) in team"
        :key="item.title"
        :class="index % 2 ? '' : 'grey lighten-3'"
      >
        <div style="flex: 0 0 7rem" class="d-flex align-center justify-center">
          {{ item.title }}
        </div>
        <v-flex table-value py-5 v-html="item.value"></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BlockTitle from "@/components/BlockTitle";

export default {
  name: "Team",

  components: {
    BlockTitle
  },

  data: () => ({
    team: [
      {
        title: "建築師姓名",
        value: "王銘山"
      },
      {
        title: "學　歷",
        value: "逢甲大學建築及都市計畫研究所碩士"
      },
      {
        title: "現　任",
        value: `宇城建築師事務所  主持建築師<br>國立勤益技術學院  景觀設計與管理系兼任講師`
      },
      {
        title: "經　歷",
        value: `國科會中部科學工業園區籌備處  組員<br>交通部觀光局日月潭國家風景區管理處  專員、課長<br>交通部觀光局東北角海岸國家風景區管理處  技士<br>台中市政府交通局  課長`
      },
      {
        title: "考試及資格",
        value: `開業建築師 / 專門職業及技術人員高等考試建築師考試及格 / 公務人員高等考試土木工程科系建築工程科考試及格 / 土地登記專業代理人 / 特種考試土地登記專業代理人考試及格`
      },
      {
        title: "主要專長",
        value: `建築規劃設計 / 景觀工程設計 / 不動產登記事務`
      },
      {
        title: "參與案例",
        value: `(1)中部科學工業園區管理中心專案管理暨新建統包工程<br>(2)中部科學工業園區建築執照審查及都市設計審議<br>(3)龜山島入口意象暨景觀工程計畫<br>(5)日月潭國家風景區車埕木業博物館新建工程<br>(6)日月潭國家風景區水社遊客服務中心興建工程<br>(7)台中市大坑風景區六號步道整建工程<br>(8)台中市旱溪自行車道一、二、三期規劃設計、監造<br>(9)台中市大墩路店舖、辦公室新建工程<br>(10)台中市潭子區住宅新建工程<br>(11)台中市北區太平路店舖、辦公室、住宅新建工程<br>(12)台中市西區大全街住宅新建工程<br>(13)中部科學工業園區豐聯資訊辦公室-室內裝修規劃設計、施工<br>(14)中部科學工業園區寶麗明廠房-室內裝修規劃設計、施工<br>(15)中部科學工業園區大青節能科技廠房-室內裝修規劃設計、施工<br>(16)台中市西屯區青海南街視聽歌唱場所新建工程<br>(17)台中市西屯區享溫馨KTV台中店新建工程<br>(18)台中市西屯區安和路住宅新建工程<br>(19)台中市豐原區豐社段店舖、住宅新建工程<br>(20)台中市西屯區西苑二街住宅新建工程`
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.logo-img {
  flex: 1 1 300px;
}
.table-value {
  line-height: 2rem;
}
</style>