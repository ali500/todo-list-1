<script setup>
import { useTodolist } from '@/composables/useTodolist'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { TodoOption } from '@/type'

const { setTodoOption } = useTodolist()
</script>

<template>
  <Menu>
    <MenuButton
      class="rounded py-1 px-6 bg-indigo-100 hover:bg-indigo-200 text-indigo-900"
      >فیلتر</MenuButton
    >
    <MenuItems
      class="absolute top-16 -left-20 min-w-40 z-40 bg-white text-zinc-900 flex flex-col gap-2 px-2 py-2 rounded shadow-md"
    >
      <MenuItem class="py-3 px-2 rounded" v-slot="{ active }">
        <div
          @click="setTodoOption(TodoOption.All)"
          class="cursor-pointer transition"
          :class="{
            'hover:bg-zinc-100 text-zinc-900': active,
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
          }"
        >
          تکمیل نشده
        </div>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
