'use client'

import { createContext, useState } from 'react'

export type ToDoItem = { id: string; text: string; isCompleted: boolean }

type ToDoContext = {
  toDoList: ToDoItem[]
  setToDoList: React.Dispatch<React.SetStateAction<ToDoItem[]>>
}

export const ToDoContext = createContext<ToDoContext>({
  toDoList: [],
  setToDoList: () => null,
})

export function ToDoContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toDoList, setToDoList] = useState<ToDoItem[]>([])

  return (
    <ToDoContext.Provider value={{ toDoList, setToDoList }}>
      {children}
    </ToDoContext.Provider>
  )
}
