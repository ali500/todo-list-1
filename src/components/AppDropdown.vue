<script setup lang="ts">
import { useTodolist } from '@/composables/useTodolist'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { TodoOption } from '@/type'
import { computed } from 'vue'
import IconCheck from './icons/IconCheck.vue'

const { setTodoOption, todoOption } = useTodolist()

interface ButtonsLable {
  all: string
  complete: string
  unComplete: string
}

const buttonsLable: ButtonsLable = {
  all: 'همه',
  complete: 'انجام شده',
  unComplete: 'انجام نشده',
}

const buttonLable = computed(() => {
  let list: string = 'فیلتر'

  switch (todoOption.value) {
    case TodoOption.All:
      list = buttonsLable.all
      break

    case TodoOption.UnCompleted:
      list = buttonsLable.unComplete
      break

    case TodoOption.Completed:
      list = buttonsLable.complete
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
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute top-16 -left-20 min-w-48 z-40 backdrop-blur-lg bg-white/30 rounded-lg border border-black/10 text-zinc-900 flex flex-col gap-2 px-2 py-2"
      >
        <MenuItem
          class="py-3 px-2 rounded flex justify-between"
          v-slot="{ active }"
        >
          <div
            @click="setTodoOption(TodoOption.All)"
            class="cursor-pointer transition text-sm"
            :class="{
              'hover:bg-zinc-400/10': active,
              '': todoOption === TodoOption.All,
            }"
          >
            <p>
              {{ buttonsLable.all }}
            </p>
            <span
              v-show="todoOption === TodoOption.All"
              class="flex items-center"
            >
              <IconCheck />
            </span>
          </div>
        </MenuItem>
        <MenuItem
          class="py-3 px-2 rounded flex justify-between"
          v-slot="{ active }"
        >
          <div
            @click="setTodoOption(TodoOption.Completed)"
            class="cursor-pointer transition text-sm"
            :class="{
              'hover:bg-zinc-400/10': active,
              '': todoOption === TodoOption.Completed,
            }"
          >
            <p>
              {{ buttonsLable.complete }}
            </p>
            <span
              v-show="todoOption === TodoOption.Completed"
              class="flex items-center"
            >
              <IconCheck />
            </span>
          </div>
        </MenuItem>
        <MenuItem
          class="py-3 px-2 rounded flex justify-between"
          v-slot="{ active }"
        >
          <div
            @click="setTodoOption(TodoOption.UnCompleted)"
            class="cursor-pointer transition text-sm"
            :class="{
              'hover:bg-zinc-400/10': active,
              '': todoOption === TodoOption.UnCompleted,
            }"
          >
            <p>
              {{ buttonsLable.unComplete }}
            </p>
            <span
              v-show="todoOption === TodoOption.UnCompleted"
              class="flex items-center"
            >
              <IconCheck />
            </span>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
