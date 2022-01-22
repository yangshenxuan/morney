<template>
  <div class="select">
    <span id="out">支出</span>
    <span id="in" class="selected">收入</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang='scss' scoped>
.select {
  background: #c4c4c4;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 10px;
  > span {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
    &.selected::after {
      content: " ";
      position: absolute;
      background: #333;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
    }
  }
}
</style>