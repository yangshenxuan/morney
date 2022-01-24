<template>
  <div class="select">
    <span :class="status === '-' && 'selected'" @click="click('-')">支出</span>
    <span :class="status === '+' && 'selected'" @click="click('+')">收入</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
@Component
export default class Status extends Vue {
  status = "-";
  click(status: string) {
    this.status = status;
  }
  @Watch("status")
  updateStatus(status: string) {
    this.$emit("pass", this.status);
  }
}
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
      background: #2dcf5d;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
      animation: 150ms pop;
    }
    @keyframes pop {
      0% {
        transform: scaleX(0);
      }
      25% {
        transform: scaleX(0.25);
      }
      50% {
        transform: scaleX(0.5);
      }
      75% {
        transform: scaleX(0.75);
      }
      100% {
        transform: scaleX(1);
      }
    }
  }
}
</style>