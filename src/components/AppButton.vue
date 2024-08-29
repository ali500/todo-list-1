<script setup lang="ts">
import { ref } from 'vue'
import { AppColor } from '@/type'

interface IProps {
  color: AppColor
  shape: 'rectangle' | 'circle'
}

const props = withDefaults(defineProps<IProps>(), {
  color: AppColor.Indego,
  shape: 'rectangle',
})
const colorClass = ref<string>('')
const shapeClass = ref<string>('')

if (props.color == AppColor.Indego) {
  colorClass.value =
    'bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 px-4 py-2 rounded text-white'
} else if (props.color == AppColor.Rose) {
  colorClass.value =
    'bg-rose-700 hover:bg-rose-800 active:bg-rose-900 px-4 py-2 rounded text-white'
}

if (props.shape == 'rectangle') {
  shapeClass.value = 'rounded'
} else if (props.shape == 'circle') {
  shapeClass.value =
    'rounded-full w-14 h-14 text-2xl flex justify-center items-center'
}
</script>

<template>
  <button type="button" :class="[colorClass, shapeClass]">
    <slot />
  </button>
</template>
