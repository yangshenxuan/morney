<template>
  <div class="notes">
    <div class="tips">备注</div>
    <input
      type="text"
      :tips="tips"
      @input="output"
      placeholder="点击添加备注"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  tips = "";
  output(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.tips = input.value;
    console.log(this.tips);
  }
}
</script>


<style lang='scss' scoped>
.notes {
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  font-size: 14px;
  > .tips {
    margin: 20px 17px;
  }
  > input {
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>