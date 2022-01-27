<template>
  <div class="notes">
    <div class="tips">{{ this.filename }}</div>
    <input type="text" v-model="tips" :placeholder="this.placeholder" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({ required: true }) filename!: string;
  @Prop() placeholder?: string;
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