'use client'

import { ToDoContext, ToDoItem } from '@/context/toDoContext'
import Image from 'next/image'
import { FormEvent, useContext, useState } from 'react'
import { v4 } from 'uuid'

export default function TaskAddInput() {
  const { setToDoList } = useContext(ToDoContext)

  const [inputValue, setInputValue] = useState('')

  function handleCreateToDoItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newToDoItem: ToDoItem = {
      id: v4(),
      text: inputValue,
      isCompleted: false,
    }

    setToDoList((prevToDoList) => [...prevToDoList, newToDoItem])
    setInputValue('')
  }
  return (
    <div className="w-full -translate-y-2/4">
      <form
        className="w-full flex items-center justify-center gap-2"
        onSubmit={(e) => handleCreateToDoItem(e)}
      >
        <input
          className="p-4 w-full rounded-lg bg-custom-gray-500 text-custom-gray-300"
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="h-full p-4 rounded-lg flex items-center justify-center gap-2 bg-blue-dark text-custom-gray-100"
          type="submit"
        >
          Criar
          <Image src="./plus.svg" width={20} height={20} alt="" />
        </button>
      </form>
    </div>
  )
}
