<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyClass",
  setup() {
    return {
      msg: "Hello World",
    };
  },
});
</script>

<template>
  <div>
    MyClass

    <div class="mt-4">{{ msg }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
