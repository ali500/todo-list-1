<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import AppButton from './AppButton.vue'
import { AppColor } from '@/type'

const props = defineProps<{
  isOpen: boolean
  todoId: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'on-delete-todo', todoId: number): void
}>()

const isOpen = computed(() => props.isOpen)

function closeModal() {
  emit('close')
}

function deleteTodo() {
  emit('on-delete-todo', props.todoId)
  emit('close')
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
                class="text-lg font-medium leading-6 text-gray-900"
              >
                حذف یک برنامه
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  آیا از حذف این برنامه مطمئن هستید؟
                </p>
              </div>

              <div class="mt-4 space-x-2 space-x-reverse">
                <AppButton @click="closeModal">لغو</AppButton>
                <AppButton @click="deleteTodo" :color="AppColor.Rose">
                  حذف کنید
                </AppButton>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
