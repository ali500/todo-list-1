export enum AppColor {
  Indigo,
  Rose,
}

export interface Todolist {
  id: number
  isComplete: boolean
  text: string
}

export enum TodoOption {
  All,
  Completed,
  UnCompleted,
}
