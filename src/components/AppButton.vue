<script setup lang="ts">
import { ref } from 'vue'
import { AppColor } from '@/type'

interface IProps {
  color?: AppColor
  shape?: 'rectangle' | 'circle'
}

const props = withDefaults(defineProps<IProps>(), {
  color: AppColor.Indego,
  shape: 'rectangle',
})
const colorClass = ref<string>('')
const shapeClass = ref<string>('')

if (props.color == AppColor.Indego) {
  colorClass.value =
    'inline-flex justify-center border border-transparent bg-indigo-100 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
} else if (props.color == AppColor.Rose) {
  colorClass.value =
    'inline-flex justify-center border border-transparent bg-rose-100 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2'
}

if (props.shape == 'rectangle') {
  shapeClass.value = 'rounded-md px-4 py-2'
} else if (props.shape == 'circle') {
  shapeClass.value = 'rounded-full size-10 p-1 flex justify-center items-center'
}
</script>

<template>
  <button type="button" :class="[colorClass, shapeClass]">
    <slot />
  </button>
</template>
