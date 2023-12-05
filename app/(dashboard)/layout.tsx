import Navbar from '@/components/dashboard/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className=" flex  w-full h-[100vh]">
    <div className=" w-[18%] h-full border-r border-black/10">
      <Sidebar />
    </div>
    <div className=" w-[82%] h-full">
      <div className="">
      <Navbar />
      </div>
      <div className=" w-full h-[92vh] overflow-y-scroll p-4">
      {children}
      </div>
    </div>
  </div>
  )
}
