<template>
  <Layout class-prefix="layout">
    <Tags :dataSource.sync="tags" @pass="updateTags" />
    <Notes @pass="updateNotes" filename="备注" placeholder="请输入备注" />
    <Select @pass="updateSelect" />
    <Pad @pass="updatePad" @submit="saveRecord" />
    {{ recordList }}
  </Layout>
</template>

<script lang='ts'>
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Select from "@/components/money/Select.vue";
import Pad from "@/components/money/Pad.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import store from "@/store/index2";

@Component({
  components: { Tags, Notes, Select, Pad },
})
export default class Money extends Vue {
  tags = store.tagList;

  recordList = store.recordList;

  record: RecordItem = {
    tags: [],
    notes: "",
    select: "-",
    pad: "0",
  };

  updateTags(value: string[]) {
    this.record.tags = value;
  }
  updateNotes(value: string) {
    this.record.notes = value;
  }
  updateSelect(value: string) {
    this.record.select = value;
  }
  updatePad(value: string) {
    this.record.pad = value;
  }
  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
