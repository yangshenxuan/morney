<template>
  <Layout class-prefix="layout">
    <Tags />
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

@Component({
  components: { Tags, Notes, Select, Pad },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  record: RecordItem = {
    tags: [],
    notes: "",
    select: "-",
    pad: "0",
  };

  created() {
    this.$store.commit("fetchRecord");
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
