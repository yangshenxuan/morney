<template>
  <Layout>
    <div class="top">
      <svg-icon icon-class="left" class="left" />
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <Notes filename="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button class="delete">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/money/Notes.vue";
import Button from "@/components/Button.vue";
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang='scss' scoped>
.top {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #2dcf5d;
  > .left {
    width: 24px;
    height: 24px;
    margin: 0 5px 0 8px;
  }
  > span {
    font-size: 20px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  > .delete {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
}
</style>