import new from '../store/index';
<template>
  <Layout class-prefix="layout">
    <div class="tags">
      <button class="new">新增标签</button>
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
    <div class="notes">
      <div class="tips">备注</div>
      <input type="text" placeholder="点击添加备注" />
    </div>
    <div class="select">
      <span id="out">支出</span>
      <span id="in" class="selected">收入</span>
    </div>
    <div class="pad">
      <div class="screen">100123</div>
      <ul class="numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="gray">+</button>
        <button class="gray">删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="gray">-</button>
        <button class="gray">清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="gray">×</button>
        <button class="OK">OK</button>
        <button>.</button>
        <button>0</button>
        <button>%</button>
        <button class="gray">÷</button>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

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
.select {
  background: #c4c4c4;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 10px;
  > span {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
    &.selected::after {
      content: " ";
      position: absolute;
      background: #333;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
    }
  }
}
.pad {
  > .screen {
    @extend %clearfix;
    height: 67px;
    font-size: 37px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 12px;
    font-family: Consolas, monospace;
  }
  > .numbers {
    @extend %clearfix;
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.5);
    $bg: #f2f2f2;
    > button {
      border: 1px solid #b3b3b3;
      color: white;
      width: 20%;
      height: 64px;
      float: left;
      background: #5c5c5c;
      &.gray {
        background: #7c7c7c;
      }
      &.OK {
        color: black;
        height: 64 * 2px;
        float: right;
        background: #2dcf5d;
      }
    }
  }
}
</style>

