import { ref } from 'vue'

interface Todolist {
  id: number
  isComplete: boolean
  text: string
}

// فهرست برنامه‌ها
const todolists = ref<Todolist[]>([
  { id: 0, isComplete: false, text: 'تماس گرفتن' },
  { id: 1, isComplete: false, text: 'پیامک دادن' },
  { id: 2, isComplete: false, text: 'درس دادن' },
])

export const useTodolist = () => {
  // افزودن به فهرست برنامه‌ها
  const addTodo = (todo: string): void => {
    todolists.value.push({
      id: todolists.value.length,
      isComplete: false,
      text: todo,
    })
  }

  // تعویض حالت کامل شدن یک برنامه
  const toggleTodoComplete = (todoId: number): void => {
    const newTodos = todolists.value.map((todo: Todolist) =>
      todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
    )
    todolists.value = newTodos
  }

  // ویرایش فهرست برنامه‌ها
  const editTodo = (todoId: number, text: string): void => {
    const newTodos = todolists.value.map((todo: Todolist) =>
      todo.id === todoId ? { ...todo, text } : todo
    )
    todolists.value = newTodos
  }

  // حذف از فهرست برنامه‌ها
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

  return { todolists, addTodo, toggleTodoComplete, editTodo, removeTodo }
}
