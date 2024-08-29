import { ref } from 'vue'

interface Todolist {
  id: number
  text: string
}

const todolists = ref<Todolist[]>([
  { id: 0, text: 'تماس گرفتن' },
  { id: 1, text: 'پیامک دادن' },
])

export const useTodolist = () => {
  // افزودن به فهرست وظایف
  const addTodo = (todo: string): void => {
    todolists.value.push({ id: todolists.value.length - 1, text: todo })
  }

  // ویرایش فهرست وظایف
  const editTodo = (todoId: number, text: string): void => {
    const newTodos = todolists.value.map((todo: Todolist) =>
      todo.id === todoId ? { ...todo, text } : todo
    )
    todolists.value = newTodos
  }

  // حذف از فهرست وظایف
  const removeTodo = (todoId: number): void => {
    const index: number = todolists.value.findIndex(
      (todo: Todolist) => todo.id === todoId
    )
    todolists.value.splice(index, 1)
  }

  return { todolists, addTodo, editTodo, removeTodo }
}
