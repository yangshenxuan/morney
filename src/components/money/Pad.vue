<template>
  <div class="pad">
    <div class="screen">100123</div>
    <ul class="numbers">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="gray">+</button>
      <button class="gray">删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button class="gray">-</button>
      <button class="gray">清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="gray">×</button>
      <button class="OK">OK</button>
      <button>.</button>
      <button>0</button>
      <button>%</button>
      <button class="gray">÷</button>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang = 'scss' scoped>
@import "~@/assets/style/helper.scss";

.pad {
  > .screen {
    @extend %clearfix;
    height: 67px;
    font-size: 37px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 12px;
    font-family: Consolas, monospace;
  }
  > .numbers {
    @extend %clearfix;
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.5);
    $bg: #f2f2f2;
    > button {
      border: 1px solid #b3b3b3;
      color: white;
      width: 20%;
      height: 64px;
      float: left;
      background: #5c5c5c;
      &.gray {
        background: #7c7c7c;
      }
      &.OK {
        color: black;
        height: 64 * 2px;
        float: right;
        background: #2dcf5d;
      }
    }
  }
}
</style>