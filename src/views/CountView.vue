<template>
  <div class="count">
    카운트: {{ count }}
    <div class="button-container">
      <button class="red" @click="add">더하기</button>
      <button class="light-blue" @click="subtract">빼기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const add = () => count.value++;
const subtract = () => count.value--;
</script>

<style scoped lang="scss">
.count {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
.button-container {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;

  button {
    width: 100px;
    height: 55px;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    &.red {
      background-color: red;
    }

    &.light-blue {
      background-color: lightblue;
    }
  }
}
</style>
