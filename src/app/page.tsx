import Header from '@/components/header'
import taskAddInput from '../components/taskAddInput'

export default function Home() {
  return (
    <div className="">
      <Header />
      <div>
        <taskAddInput />
      </div>
    </div>
  )
}
