<template>
  <div class="tags">
    <button class="new" @click="create">新增标签</button>
    <ul>
      <li
        :class="{ selected: selectedTags.indexOf(tags) >= 0 }"
        @click="toggle(tags)"
        v-for="tags in dataSource"
        :key="tags"
      >
        {{ tags }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tags: string) {
    const index = this.selectedTags.indexOf(tags);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tags);
    }
    this.$emit("pass", this.selectedTags);
  }
  create() {
    const name = window.prompt("请输入标签名");
    if (name && this.dataSource) {
      this.$emit("update:dataSource", [...this.dataSource, name]);
    }
  }
}
</script>

<style lang='scss' scoped>
.tags {
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;

  > .new {
    padding: 0px 6px 1px 6px;
    border: none;
    background: transparent;
    border-bottom: 1px solid;
    color: rgb(126, 126, 126);
    margin: 10px 0px 13px 15px;
    font-size: 14px;
    width: 100px;
  }
  font-size: 14px;
  > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > li {
      background: rgb(206, 206, 206);
      margin: 10px 13px;
      border-radius: 30px;
      padding: 4px 25px;
    }
    .selected {
      color: white;
      background: rgb(107, 107, 107);
      animation: click 50ms linear;
    }
    @keyframes click {
      0% {
        transform: scale(0.4);
      }
      25% {
        transform: scale(0.5);
      }
      50% {
        transform: scale(0.6);
      }
      75% {
        transform: scale(0.7);
      }
      100% {
        transform: scale(0.8);
      }
    }
  }
}
</style>