<template>
  <div>My Detail page</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const params = useRoute().params;
console.log("params", params);
</script>

<style scoped></style>
