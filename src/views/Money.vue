import new from '../store/index';
<template>
  <Layout class-prefix="layout">
    <Tags />
    <Notes />
    <Select />
    <Pad />
  </Layout>
</template>

<script lang="ts">
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Select from "@/components/money/Select.vue";
import Pad from "@/components/money/Pad.vue";
export default {
  components: { Tags, Notes, Select, Pad },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
