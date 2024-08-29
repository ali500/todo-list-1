<script setup lang="ts">
interface IProps {
  type: string
}

withDefaults(defineProps<IProps>(), {
  type: 'text',
})
</script>

<template>
  <input type="text" />
</template>
