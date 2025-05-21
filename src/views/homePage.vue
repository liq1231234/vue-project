<style scoped lang="less">
.box {
  width: 100%;
  height: 100vh;

  .title {
    color: @primary-color;
    font-size: @fontSize;
    .text_ellipsis_some(3);
  }
}
</style>
<template>
  <div class="box flex-center">
    <div class="title">123</div>
    <div class="fj"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// eslint-disable-next-line
const title = ref('123')
</script>
