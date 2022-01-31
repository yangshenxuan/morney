<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" />
      <Tabs
        class-prefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      />
      <div>type:{{ type }}</div>
      <hr />
      <div>interval:{{ interval }}</div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList";
import typeList from "@/constants/typeList";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  intervalList = intervalList;
  typeList = typeList;
  type = "-";
  interval = "day";
}
</script>

<style lang='scss' scoped>
::v-deep .type-item {
  background: #c4c4c4;
  &.selected {
    background: #2dcf5d;
    &::after {
      display: none;
    }
  }
}
</style>