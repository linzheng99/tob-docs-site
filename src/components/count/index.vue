<template>
  <div class="flex flex-col items-center">
    {{ count }}
    <button @click="add" class="bg-violet-800 c-white b-none cursor-pointer p-1 w-10">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let count = ref(0)
const add = () => {
  count.value++
}
</script>

<style>
.name {
  align-items: center;
}
</style>
