<script setup lang="ts">
import { useTodolist } from '@/composables/useTodolist'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { TodoOption } from '@/type'
import { computed } from 'vue'

const { setTodoOption, todoOption } = useTodolist()

const buttonLable = computed(() => {
  let list: string = 'فیلتر'

  switch (todoOption.value) {
    case TodoOption.All:
      list = 'همه'
      break

    case TodoOption.UnCompleted:
      list = 'تکمیل نشده'
      break

    case TodoOption.Completed:
      list = 'تکمیل شده'
      break

    default:
      break
  }

  return list
})
</script>

<template>
  <Menu>
    <MenuButton
      class="rounded py-1 text-sm px-6 min-w-32 bg-indigo-100 hover:bg-indigo-200 text-indigo-900"
    >
      {{ buttonLable }}
    </MenuButton>
    <MenuItems
      class="absolute top-16 -left-20 min-w-48 z-40 bg-white text-zinc-900 flex flex-col gap-2 px-2 py-2 rounded shadow-md"
    >
      <MenuItem class="py-3 px-2 rounded" v-slot="{ active }">
        <div
          @click="setTodoOption(TodoOption.All)"
          class="cursor-pointer transition"
          :class="{
            'hover:bg-zinc-100 text-zinc-900': active,
            'bg-zinc-100': todoOption === TodoOption.All,
          }"
        >
          همه
        </div>
      </MenuItem>
      <MenuItem class="py-3 px-2 rounded" v-slot="{ active }">
        <div
          @click="setTodoOption(TodoOption.Completed)"
          class="cursor-pointer transition"
          :class="{
            'hover:bg-zinc-100 text-zinc-900': active,
            'bg-zinc-100': todoOption === TodoOption.Completed,
          }"
        >
          تکمیل شده
        </div>
      </MenuItem>
      <MenuItem class="py-3 px-2 rounded" v-slot="{ active }">
        <div
          @click="setTodoOption(TodoOption.UnCompleted)"
          class="cursor-pointer transition"
          :class="{
            'hover:bg-zinc-100 text-zinc-900': active,
            'bg-zinc-100': todoOption === TodoOption.UnCompleted,
          }"
        >
          تکمیل نشده
        </div>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
