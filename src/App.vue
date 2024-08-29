<script setup lang="ts">
import AppButton from './components/AppButton.vue'
import { AppColor } from './type'
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline">این یک متن آزمایشی است</h1>
    <AppButton :color="AppColor.Indego" shape="circle">+</AppButton>
  </main>
</template>
