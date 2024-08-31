<script setup lang="ts">
import { ref, watch } from 'vue'
import AppTodoInput from './AppTodoInput.vue'
import { useTodolist } from '@/composables/useTodolist'
// import type { Todolist } from '@/type'
import AppButton from './AppButton.vue'

import { AppColor, TodoOption } from '@/type'
import AppModal from './AppModal.vue'
import IconPencil from './icons/IconPencil.vue'
import IconTrash from './icons/IconTrash.vue'

const {
  todolists,
  addTodo,
  removeTodo,
  editTodo,
  toggleTodoComplete,
  unCompletedTodo,
  CompletedTodo,
  todoOption,
} = useTodolist()
const isEditable = ref<boolean>(false)
const isOpen = ref<boolean>(false)
const task = ref<string>('')
const filter = ref<string>('')
const editTaskId = ref<number>(-1)

const list = ref(todolists.value)

watch(todolists, () => {
  list.value = todolists.value
})

watch(todoOption, () => {
  switch (todoOption.value) {
    case TodoOption.All:
      list.value = todolists.value
      break

    case TodoOption.UnCompleted:
      list.value = unCompletedTodo.value
      break

    case TodoOption.Completed:
      list.value = CompletedTodo.value
      break

    default:
      break
  }
})

function closeModal(): void {
  isOpen.value = false
}
function openModal(isEdit: boolean, todoId: number = -1): void {
  editTaskId.value = todoId
  isEditable.value = isEdit
  isOpen.value = true
}
function addTask(): void {
  addTodo(task.value)
  closeModal()
  task.value = ''
}
function editTask(todoId: number, text: string): void {
  editTodo(todoId, text)
  closeModal()
  task.value = ''
}
</script>

<template>
  <div class="mx-auto relative">
    <AppTodoInput v-model="filter" />
    <div class="mt-5 rounded bg-white text-zinc-800 shadow">
      <template v-for="todo in list" :key="`todo-${todo.id}`">
        <div
          @click="toggleTodoComplete(todo.id)"
          class="py-5 px-5 hover:cursor-pointer hover:bg-zinc-50 transition flex first:border-t-0 border-t border-zinc-200 justify-between items-center group"
        >
          <p
            class="text-zinc-700"
            :class="todo.isComplete ? 'line-through' : ''"
          >
            {{
              Intl.NumberFormat('fa-IR', { useGrouping: false }).format(todo.id)
            }}
            - {{ todo.text }}
          </p>
          <div
            class="space-x-1 space-x-reverse invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all"
          >
            <AppButton
              @click.stop="openModal(true, todo.id)"
              shape="circle"
              :color="AppColor.Indigo"
            >
              <IconPencil />
            </AppButton>
            <AppButton
              @click.stop="removeTodo(todo.id)"
              shape="circle"
              :color="AppColor.Rose"
            >
              <IconTrash />
            </AppButton>
          </div>
        </div>
      </template>
      <AppButton
        @click="openModal(false)"
        shape="circle"
        class="!size-12 absolute -bottom-5 -left-6 shadow"
      >
        +
      </AppButton>
      <AppModal
        v-model="task"
        :isEditable="isEditable"
        :isOpen="isOpen"
        :editTaskId="editTaskId"
        @close-modal="closeModal"
        @on-add="addTask"
        @on-edit="editTask"
      >
        <template #close>بستن</template>
        <template v-if="isEditable === false" #action>افزودن</template>
        <template v-else-if="isEditable === true" #action>ویرایش</template>
      </AppModal>
    </div>
  </div>
</template>
