<template>
  <Layout class-prefix="layout">
    <Tags @pass="updateTags" />
    <Notes @pass="updateNotes" filename="备注" placeholder="请输入备注" />
    <Tabs
      class-prefix="type"
      :data-source="typeList"
      :value.sync="record.type"
    />
    <Pad :value.sync="record.pad" @submit="saveRecord" />
    {{ recordList }}
  </Layout>
</template>

<script lang='ts'>
import Tags from "@/components/money/Tags.vue";
import Tabs from "@/components/Tabs.vue";
import Notes from "@/components/money/Notes.vue";
import Pad from "@/components/money/Pad.vue";
import typeList from "@/constants/typeList";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Tags, Notes, Tabs, Pad },
})
export default class Money extends Vue {
  typeList = typeList;
  type = "-";
  get recordList() {
    return this.$store.state.recordList;
  }
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    pad: "0",
  };

  created() {
    this.$store.commit("fetchRecords");
  }
  updateTags(value: string[]) {
    this.record.tags = value;
  }
  updateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
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
