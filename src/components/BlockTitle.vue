<template>
  <v-layout flex-column>
    <v-flex pa-5 bg-primary>
      <h2
        :class="[
          $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2',
          'font-weight-bold',
          'text-center',
          'mt-5'
        ]"
        style="color: #424242"
      >
        {{ title }}
      </h2>
      <h3
        v-if="subTitle"
        :class="[
          $vuetify.breakpoint.xsOnly ? 'headline' : 'display-1',
          'font-weight-medium',
          'text-center',
          'mt-1'
        ]"
        style="color: #424242"
      >
        {{ subTitle }}
      </h3>
    </v-flex>
    <v-flex hide-line>
      <div
        class="fusion-fullwidth fullwidth-box hundred-percent-fullwidth non-hundred-percent-height-scrolling"
        style="background-color: #ffffff;background-position: center center;background-repeat: no-repeat;padding-top:0px;padding-right:30px;padding-bottom:0px;padding-left:30px;"
      >
        <div class="fusion-builder-row fusion-row ">
          <div
            class="fusion-layout-column fusion_builder_column fusion_builder_column_1_1 fusion-builder-column-5 fusion-one-full fusion-column-first fusion-column-last fusion-column-no-min-height 1_1"
            style="margin-top:0px;margin-bottom:0px;"
          >
            <div
              class="fusion-column-wrapper"
              style="padding: 0px 0px 0px 0px;background-position:left top;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;"
              data-bg-url=""
            >
              <div
                class="fusion-section-separator section-separator waves-opacity"
                style="font-size:0;margin-left:-30px;margin-right:-30px;"
              >
                <svg
                  class="fusion-waves-opacity-candy"
                  fill="rgba(139,195,74,0.45)"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="100%"
                  viewBox="0 0 1000 211"
                  preserveAspectRatio="none"
                >
                  <path
                    class="st0"
                    d="M0,210.4c18.9,0.5,37.8,1.6,56.3,0.3C258.1,196.1,299,87.1,500.6,70.3c180.5-15.1,279,59.5,453.4,40.3c16.5-1.8,31.7-4.3,46-7.4V0.4H0V210.4z"
                  ></path>
                  <path
                    class="st1"
                    d="M0,191.8c29.5,1.6,58.2,1.6,84.8-0.4C286.6,176.7,277.5,71.7,479.2,54.9c180.6-15.1,272,56.8,446.4,37.5c27.6-3.1,52.2-8,74.4-14.3v-78H0V191.8z"
                  ></path>
                  <path
                    class="st2"
                    d="M0,165.9c21.7,0.3,42.8-0.2,62.7-1.7C264.5,149.6,255.9,54.3,457.6,37.5c180.5-15.1,221.5,49.9,395.9,30.6C907,62.2,955.9,50.2,1000,35.2V0.1H0V165.9z"
                  ></path>
                  <path
                    class="st3"
                    d="M0,158.3c3.9-0.2,7.8-0.4,11.6-0.7C213.3,142.9,234.2,36.2,435.9,19.4c180.6-15.1,221,40.1,395.4,20.8c62.5-7,119-20.3,168.7-37V0.1H0V158.3z"
                  ></path>
                </svg>
              </div>
              <div class="fusion-clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "BlockTitle",
  props: {
    title: String,
    subTitle: String
  }
};
</script>

<style lang="scss" scoped>
.bg-primary {
  background-color: #95c85a;
}
.hide-line {
  position: relative;
  top: -3px;
  z-index: -1;
}
</style>