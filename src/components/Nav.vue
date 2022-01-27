<template>
  <div class="nav">
    <router-link to="/labels" class="item" active-class="selected">
      <svg-icon icon-class="labels"></svg-icon>
      标签</router-link
    >
    <router-link to="/money" class="item" active-class="selected">
      <svg-icon icon-class="money"></svg-icon>
      记账</router-link
    >
    <router-link to="/statistics" class="item" active-class="selected">
      <svg-icon icon-class="statistics"></svg-icon>统计</router-link
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang='scss' scoped>
.nav {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background: #f3f3f3;
  font-size: 12px;
  > .item {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    width: 33.33333%;
    align-items: center;
    > .svg-icon {
      width: 26px;
      height: 26px;
    }
  }
  > .item.selected {
    color: #2dcf5d;
  }
}
</style>