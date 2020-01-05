<template>
  <div id="footer" class="grey darken-4 grey--text text-center pa-5">
    © Copyright 2018 - {{ new Date().getFullYear() }} | 開發顧問有限公司 |
    版權所有
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.link {
  color: #424242;
  text-decoration: none;
}
</style>