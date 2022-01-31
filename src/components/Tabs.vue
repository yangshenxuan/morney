<template>
  <ul class="tabs">
    <li
      v-for="item in dataSource"
      :key="item.value"
      :class="{
        [classPrefix + '-item']: classPrefix,
        selected: item.value === value,
      }"
      @click="select(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
type DataSourceItem = {
  text: string;
  value: string;
};

@Component
export default class Tabs extends Vue {
  @Prop(String) classPrefix?: string;
  @Prop(String)
  value!: string;
  @Prop({ required: true, type: Array })
  dataSource!: DataSourceItem[];
  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 10px;
  > li {
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