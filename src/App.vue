<script setup lang="ts">
import AppButton from './components/AppButton.vue'
import AppInput from './components/AppInput.vue'
import AppTodo from './components/AppTodo.vue'
import { AppColor } from './type'
</script>

<template>
  <main class="container mx-auto">
    <div class="flex justify-center mt-10">
      <AppTodo />
    </div>
  </main>
</template>
