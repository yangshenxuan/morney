import new from '../store/index';
<template>
  <Layout class-prefix="layout">
    <Tags :dataSource.sync="tags" @pass="updateTags" />
    <Notes @pass="updateNotes" />
    <Select @pass="updateSelect" />
    <Pad @pass="updatePad" @submit="saveRecord" />
  </Layout>
</template>

<script lang='ts'>
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Select from "@/components/money/Select.vue";
import Pad from "@/components/money/Pad.vue";
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import model from "@/model";

const recordList: RecordItem[] = model.fetch();

@Component({
  components: { Tags, Notes, Select, Pad },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: RecordItem[] = recordList;

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
    const cord: RecordItem = JSON.parse(JSON.stringify(this.record));
    cord.time = new Date();
    this.recordList.push(cord);
  }
  @Watch("recordList")
  onRecordListChange() {
    model.save(this.recordList);
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
