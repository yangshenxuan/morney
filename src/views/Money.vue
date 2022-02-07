<template>
  <Layout class-prefix="layout">
    <Tags @update:value="record.tags = $event" />
    <Notes
      fileName="备注"
      :value.sync="record.notes"
      placeholder="请输入备注"
    />
    <div class="createdAt">
      <Notes
        fileName="日期"
        type="date"
        :value.sync="record.createdAt"
        placeholder="选择日期"
      />
    </div>
    <Tabs
      class-prefix="type"
      :data-source="typeList"
      :value.sync="record.type"
    />
    <Pad :value.sync="record.pad" @submit="saveRecord" />
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
  get recordList() {
    return this.$store.state.recordList;
  }
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    pad: 0,
    createdAt: new Date().toISOString(),
  };

  created() {
    this.$store.commit("fetchRecords");
  }
  updateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      window.alert("请至少选择一个标签");
      return;
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
      this.$router.replace("/statistics");
    }
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
