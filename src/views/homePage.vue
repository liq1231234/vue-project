<style scoped lang="less">
.box {
  width: 100%;
  height: 100vh;
  .flex-center();
  .title {
    color: @primary-color;
    font-size: @fontSize;
    .text_ellipsis_some(3);
  }
  .fj {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div class="box flex-center">
    <div class="title">123</div>
    <div class="fj"></div>
  </div>
</template>
<script setup lang="ts"></script>
