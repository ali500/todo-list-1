<script setup lang="ts">
import AppInput from './AppInput.vue'
import AppButton from './AppButton.vue'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const task = defineModel()
defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ (e: 'on-add'): void; (e: 'close-modal'): void }>()

const closeModal = (): void => {
  emit('close-modal')
}

const addTask = (): void => {
  emit('on-add')
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-v-light leading-6 text-gray-900"
              >
                افزودن یک وظیفه
              </DialogTitle>
              <div class="mt-2">
                <AppInput
                  v-model="task"
                  @keydown.enter="addTask"
                  class="w-full ring-1 ring-zinc-200"
                  placeholder="برنامه جدید ..."
                />
              </div>

              <div class="mt-4 space-x-4 space-x-reverse">
                <AppButton @click="closeModal"><slot name="close" /></AppButton>
                <AppButton @click="addTask"><slot name="add" /></AppButton>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
