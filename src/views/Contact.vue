<template>
  <div id="contact">
    <BlockTitle title="聯絡我們" />
    <v-container>
      <h2
        :class="[
          $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
          'font-weight-bold',
          'text-center',
          'mt-9'
        ]"
      >
        免費諮詢現勘 歡迎與我們聯繫
      </h2>
      <h3
        :class="[
          $vuetify.breakpoint.xsOnly ? 'headline' : 'display-1',
          'font-weight-medium',
          'text-center',
          'mt-1'
        ]"
      >
        關懷在地產業 輔導合法經營
      </h3>
      <div class="mt-9 mx-auto text-center" style="min-width:50px">
        <p>
          <v-icon>mdi-home-map-marker</v-icon> 臺中市西區台灣大道二段536號6樓-1
        </p>
        <p>
          <a href="tel:+886-4-23121667" class="link" target="_blank">
            <v-icon>mdi-phone-classic</v-icon> 04-23121667
          </a>

          <a href="tel:+886-4-23133016" class="link" target="_blank">
            <v-icon>mdi-fax</v-icon> 04-23133016
          </a>
        </p>
        <p>
          <a href="tel:+886-980-627968" class="link" target="_blank">
            <v-icon>mdi-cellphone-iphone</v-icon> 0980-627968
          </a>
        </p>
        <p>
          <a href="mailto:youcheng108@gmail.com" class="link" target="_blank">
            <v-icon>mdi-email-multiple-outline</v-icon>
            youcheng108@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/ycland/"
            class="link"
            target="_blank"
          >
            <v-icon>mdi-facebook-box</v-icon> 佑埕粉絲團
          </a>
        </p>
      </div>
      <!-- <v-layout>
        <v-flex></v-flex>
      </v-layout> -->
    </v-container>
  </div>
</template>

<script>
import BlockTitle from "@/components/BlockTitle";

export default {
  name: "Contact",

  components: {
    BlockTitle
  },

  data: () => ({})
};
</script>

<style lang="scss" scoped>
.link {
  color: #424242;
  text-decoration: none;
}
</style>