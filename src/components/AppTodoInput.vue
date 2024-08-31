<script setup lang="ts">
import AppButton from './AppButton.vue'
import AppDropdown from './AppDropdown.vue'

interface IProps {
  type?: string
}

const model = defineModel()

withDefaults(defineProps<IProps>(), {
  type: 'text',
})
</script>

<template>
  <div
    class="flex relative gap-2 p-2 max-w-96 rounded shadow bg-white ring-indigo-200 focus-within:ring-2"
  >
    <input
      v-model="model"
      :type="type"
      class="grow outline-none py-2 px-2 bg-transparent"
      placeholder="جستجو"
    />
    <AppDropdown />
  </div>
</template>
