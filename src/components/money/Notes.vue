<template>
  <div class="notes">
    <div class="tips">备注</div>
    <input type="text" placeholder="点击添加备注" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang='scss' scoped>
.notes {
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  font-size: 14px;
  > .tips {
    margin: 20px 17px;
  }
  > input {
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>