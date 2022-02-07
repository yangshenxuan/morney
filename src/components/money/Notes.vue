<template>
  <div class="notes">
    <div class="tips">{{ this.fileName }}</div>
    <template v-if="type === 'date'">
      <input
        :type="type || 'text'"
        :value="x(value)"
        @input="onValueChange($event.target.value)"
        :placeholder="this.placeholder"
      />
    </template>
    <template v-else>
      <input
        :type="type || 'text'"
        :value="value"
        @input="onValueChange($event.target.value)"
        :placeholder="this.placeholder"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import dayjs from "dayjs";

@Component
export default class Notes extends Vue {
  @Prop({ required: true }) fileName!: string;
  @Prop() placeholder?: string;
  @Prop({ default: "" }) readonly value!: string;
  @Prop() type?: string;

  onValueChange(value: string) {
    this.$emit("update:value", value);
  }

  x(value: string) {
    return dayjs(value).format("YYYY-MM-DD");
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