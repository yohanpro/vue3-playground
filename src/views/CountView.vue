<template>
  <div class="count">
    카운트: {{ count.count }}
    <div class="button-container">
      <button class="red" @click="count.increment">더하기</button>
      <button class="light-blue" @click="count.decrement">빼기</button>
      <button class="gray" @click="count.reset">초기화</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCount from "../hooks/useCount";

const count = useCount(0);
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
    width: 25%;
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
