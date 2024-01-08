import Header from '@/components/header'
import TaskAddInput from '@/components/taskAddInput'
import TaskDisplay from '@/components/taskDisplay'

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex items-center flex-col w-3/5 my-0 mx-auto gap-16">
        <TaskAddInput />
        <TaskDisplay />
      </div>
    </div>
  )
}
