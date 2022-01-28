<template>
  <Layout>
    <router-link class="top" to="/Labels">
      <svg-icon icon-class="left" class="left" />
      <span>编辑标签</span>
    </router-link>
    <div class="form-wrapper">
      <Notes
        :value="tag.name"
        @pass="updateTag"
        filename="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button class="delete" @click="removeTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/money/Notes.vue";
import Button from "@/components/Button.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import store from "@/store/index2";

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;
  created() {
    this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      store.updateTag(this.tag.id, name);
    }
  }
  removeTag() {
    if (this.tag) {
      store.removeTag(this.tag.id);
    }
    this.$router.push("/Labels");
  }
}
</script>

<style lang='scss' scoped>
.selected {
  color: #2dcf5d;
}
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
    background: #830000;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
}
</style>