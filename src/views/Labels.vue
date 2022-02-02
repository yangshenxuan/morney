<template>
  <Layout>
    <div class="top">
      <span>新建标签</span>
    </div>
    <div class="labels">
      <!-- <li>
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
      </li> -->
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <div class="left">
          <svg-icon icon-class="flag" class="icon" /><span>{{ tag.name }}</span>
        </div>
        <svg-icon icon-class="right" class="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Vue from "vue";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import TagHelper from "@/mixins/TagHelper";

@Component({
  components: { Button },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2dcf5d;
  font-size: 20px;
}
.labels {
  margin-top: 8px;
  background: #fafafa;
  font-size: 16px;
  padding-left: 15px;
  > .tag {
    min-height: 50px;
    border-bottom: 1px solid #d1d1d4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    > .right {
      width: 23px;
      height: 26px;
      margin-right: 15px;
    }
    > .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      > .icon {
        width: 23px;
        height: 26px;
        margin-right: 10px;
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