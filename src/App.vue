<script setup lang="ts">
import AppButton from './components/AppButton.vue'
import { AppColor } from './type'
</script>

<template>
  <main>
    <div>
      <AppButton :color="AppColor.Rose" shape="circle">+</AppButton>
      <AppButton :color="AppColor.Indego" shape="circle">+</AppButton>
      <AppButton :color="AppColor.Rose" shape="rectangle">کلید کنید</AppButton>
      <AppButton :color="AppColor.Indego" shape="rectangle"
        >کلید کنید</AppButton
      >
    </div>
  </main>
</template>
