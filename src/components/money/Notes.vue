<template>
  <div class="notes">
    <div class="tips">备注</div>
    <input type="text" v-model="tips" placeholder="点击添加备注" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  tips = "";
  @Watch("tips")
  tipsChange(tips: string) {
    this.$emit("pass", this.tips);
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