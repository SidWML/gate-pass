import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className=" h-[100vh] w-full">
        <Navbar />
      <div className=" flex  w-full h-[93vh] relative overflow-hidden ">
        <div className=" overflow-y-auto w-[18%] sticky top-0 self-start h-full border-r border-black/10">
          <Sidebar />
        </div>
          <div className=" w-[82%] h-[93vh] overflow-y-scroll  p-4">{children}</div>
      </div>
    </div>
  );
}
