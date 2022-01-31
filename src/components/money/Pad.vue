<template>
  <div class="pad">
    <div class="screen">{{ n }}</div>
    <div class="numbers">
      <button @click="stringAdd">1</button>
      <button @click="stringAdd">2</button>
      <button @click="stringAdd">3</button>
      <button class="gray">+</button>
      <button class="gray" @click="remove">退格</button>
      <button @click="stringAdd">4</button>
      <button @click="stringAdd">5</button>
      <button @click="stringAdd">6</button>
      <button class="gray">-</button>
      <button class="gray" @click="clear">清空</button>
      <button @click="stringAdd">7</button>
      <button @click="stringAdd">8</button>
      <button @click="stringAdd">9</button>
      <button class="gray">×</button>
      <button class="OK" @click="OK">OK</button>
      <button @click="stringAdd">.</button>
      <button @click="stringAdd">0</button>
      <button @click="percent">%</button>
      <button class="gray">÷</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Pad extends Vue {
  selectedButton: string[] = [];
  n: string = "0";
  stringAdd(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    // this.selectedButton.push(input);
    // console.log(input);
    if (this.n.length === 13) {
      return;
    }
    if (this.n === "0") {
      //一开始的状态this.n必为0
      if ("0123456789".indexOf(input) >= 0) {
        this.n = input;
      } else {
        this.n += input;
      }
      return;
    }
    if (this.n.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.n += input;
  }
  // add() {
  //   const addNumber = parseInt(this.n);
  //   console.log(addNumber);
  //   this.n = "0";
  //   console.log(this.n);
  // }
  remove() {
    if (this.n.length === 1) {
      this.n = "0";
    } else {
      this.n = this.n.slice(0, -1);
    }
  }
  clear() {
    this.n = "0";
  }
  percent() {
    const b: number = parseFloat(this.n);
    const c: number = b * 0.01;
    this.n = c.toString();
    // console.log(this.n); 字符串长度太大bug
    // if (this.n.length === 6) {
    //   return;
    // }
  }
  OK(value: string) {
    if (this.n === "0") {
      window.alert("金额不能为空，请重新输入");
      return;
    } else {
      this.$emit("update:value", this.n);
      this.$emit("submit", this.n);
    }
    this.n = "0";
  }
}
</script>

<style lang = 'scss' scoped>
@import "~@/assets/style/helper.scss";

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
      /* &.selected {
        background: #000;
      } */
    }
  }
}
</style>