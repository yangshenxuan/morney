<template>
  <div class="tags">
    <button class="new">新增标签</button>
    <ul>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang='scss' scoped>
.tags {
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;

  > .new {
    padding: 0px 6px 1px 6px;
    border: none;
    background: transparent;
    border-bottom: 1px solid;
    color: rgb(126, 126, 126);
    margin: 10px 0px 13px 15px;
    font-size: 14px;
    width: 100px;
  }
  font-size: 14px;
  > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > li {
      background: rgb(206, 206, 206);
      margin: 10px 13px;
      border-radius: 30px;
      padding: 4px 25px;
    }
  }
}
</style>