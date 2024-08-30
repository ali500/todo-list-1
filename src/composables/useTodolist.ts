import { ref } from 'vue'

interface Todolist {
  id: number
  text: string
}

const todolists = ref<Todolist[]>([
  { id: 0, text: 'تماس گرفتن' },
  { id: 1, text: 'پیامک دادن' },
  { id: 2, text: 'درس دادن' },
])

export const useTodolist = () => {
  // افزودن به فهرست وظایف
  const addTodo = (todo: string): void => {
    todolists.value.push({ id: todolists.value.length, text: todo })
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
    const result: boolean = confirm('آیا می‌خواهید این آیتم را پاک کنید؟')

    if (result) {
      const index: number = todolists.value.findIndex(
        (todo: Todolist) => todo.id === todoId
      )

      todolists.value.splice(index, 1)

      const newTodolists = todolists.value.map((todo, index) => {
        return { ...todo, id: index }
      })

      todolists.value = newTodolists
    }
  }

  return { todolists, addTodo, editTodo, removeTodo }
}
