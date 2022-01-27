<template>
  <div class="notes">
    <div class="tips">{{ this.filename }}</div>
    <input
      type="text"
      :value="value"
      @input="onValueChange($event.target.value)"
      :placeholder="this.placeholder"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({ required: true }) filename!: string;
  @Prop() placeholder?: string;
  @Prop({ default: "" }) readonly value!: string;

  @Watch("value")
  onValueChange(value: string) {
    this.$emit("pass", value);
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