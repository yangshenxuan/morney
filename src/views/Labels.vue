<template>
  <Layout>
    <ol class="labels">
      <li>
        <div class="left">
          <svg-icon icon-class="clothes" class="icon" /><span>衣</span>
        </div>
        <svg-icon icon-class="right" class="right" />
      </li>
      <li>
        <div class="left">
          <svg-icon icon-class="food" class="icon" /><span>食</span>
        </div>
        <svg-icon icon-class="right" class="right" />
      </li>
      <li>
        <div class="left">
          <svg-icon icon-class="hotel" class="icon" /><span>住</span>
        </div>
        <svg-icon icon-class="right" class="right" />
      </li>
      <li>
        <div class="left">
          <svg-icon icon-class="go" class="icon" /><span>行</span>
        </div>
        <svg-icon icon-class="right" class="right" />
      </li>
      <li v-for="tag in tags" :key="tag">
        <div class="left">
          <svg-icon icon-class="flag" class="icon" /><span>{{ tag }}</span>
        </div>
        <svg-icon icon-class="right" class="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

tagListModel.fetch();
@Component
export default class Labels extends Vue {
  y: number = 0;
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "space") {
        window.alert("标签名不能为空");
      } else if (message === "duplicated") {
        window.alert("标签重复，请重新输入");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.labels {
  background: #fafafa;
  font-size: 16px;
  padding-left: 15px;
  > li {
    min-height: 50px;
    border-bottom: 1px solid #d1d1d4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .right {
      width: 23px;
      height: 26px;
      margin-right: 15px;
    }
    > .left {
      width: 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .icon {
        width: 23px;
        height: 26px;
      }
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
.selected {
  background: #2dcf5d;
}
</style>