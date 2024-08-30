<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input
    v-model="model"
    type="text"
    class="flex gap-2 p-2 max-w-96 rounded shadow bg-white focus:ring-indigo-200 focus:ring-2 outline-none py-2 px-2"
  />
</template>
