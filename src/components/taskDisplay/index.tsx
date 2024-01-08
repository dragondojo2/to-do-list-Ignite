'use client'

import * as Checkbox from '@radix-ui/react-checkbox'
import { ToDoContext } from '@/context/toDoContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function TaskDisplay() {
  const { toDoList, setToDoList } = useContext(ToDoContext)

  function handleCheckChange(index: number) {
    const newItens = [...toDoList]

    newItens[index].isCompleted = !toDoList[index].isCompleted

    setToDoList(newItens)
  }

  function handleDeleteItem(index: number) {
    const newItens = [...toDoList]

    newItens.splice(index, 1)

    setToDoList(newItens)
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between">
        <span className="flex gap-2 text-blue-normal">
          Tarefas criadas
          <span className="bg-custom-gray-400 px-2 rounded-full text-custom-gray-200">
            {toDoList.length}
          </span>
        </span>
        <span className="flex gap-2 text-purple-normal">
          Concluídas
          <div className="bg-custom-gray-400 px-2 rounded-full text-custom-gray-200">
            {
              toDoList.filter((toDoItem) => {
                return toDoItem.isCompleted
              }).length
            }
            &nbsp;de&nbsp;
            {toDoList.length}
          </div>
        </span>
      </div>
      <div className="flex flex-col items-center py-16 border-t-2 rounded-lg gap-4 border-custom-gray-400">
        {toDoList.length === 0 && (
          <>
            <Image src="/Clipboard.svg" width={56} height={56} alt="" />
            <div className="flex flex-col text-custom-gray-300">
              <span className="font-bold">
                Você ainda não tem tarefas cadastradas
              </span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </>
        )}

        {toDoList.map((toDoItem, index) => (
          <div
            className="w-full flex items-start gap-4 p-4 rounded-lg bg-custom-gray-500"
            key={toDoItem.id}
          >
            <Checkbox.Root
              className=" overflow-hidden hover:bg-violet3 flex h-[23px] w-[23px] appearance-none items-center justify-center rounded-[100%] bg-transparent outline-none focus:shadow-[0_0_0_2px_black] border-2 border-blue-normal data-[state=checked]:border-purple-normal"
              id={toDoItem.id}
              checked={toDoItem.isCompleted}
              onCheckedChange={() => handleCheckChange(index)}
            >
              <Checkbox.Indicator className="text-violet11 bg-purple-normal">
                <Image
                  className="text-custom-gray-100"
                  src="./check.svg"
                  width={23}
                  height={23}
                  alt=""
                />
              </Checkbox.Indicator>
            </Checkbox.Root>
            {}
            <span
              className={`flex-1 text-custom-gray-100 ${
                toDoItem.isCompleted && 'line-through text-custom-gray-300'
              }`}
            >
              {toDoItem.text}
            </span>
            <Image
              className=""
              src="./trasherIcon.svg"
              width={20}
              height={20}
              alt=""
              onClick={() => handleDeleteItem(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
