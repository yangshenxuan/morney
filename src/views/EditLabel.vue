<template>
  <Layout>
    <div class="left">
      <svg-icon icon-class="left" />
      <span>编辑标签</span>
      <Notes filename="标签名" placeholder="请输入标签名" />
    </div>
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/money/Notes.vue";
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Notes },
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
</style>