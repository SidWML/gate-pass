import { AccordionDemo } from '@/components/AccordionDemo'
import Sidebar from '@/components/dashboard/Sidebar'


export default function Home() {
  return (
  <div className=" flex  w-full h-[100vh]">
    <div className=" w-[18%] h-full border-r border-black/10">
      <Sidebar />
    </div>
  </div>
  )
}
