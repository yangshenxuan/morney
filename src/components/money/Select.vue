<template>
  <div class="select">
    <span
      :class="{
        [classPrefix + '-item']: classPrefix,
        selected: status === '-',
      }"
      @click="click('-')"
      >支出</span
    >
    <span
      :class="{
        [classPrefix + '-item']: classPrefix,
        selected: status === '+',
      }"
      @click="click('+')"
      >收入</span
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Status extends Vue {
  @Prop(String) classPrefix?: string;
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
</style>