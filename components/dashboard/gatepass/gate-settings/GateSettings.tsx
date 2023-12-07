import React from 'react'
import Table from '../../reusables/Table';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function GateSettings() {
    const gateData = {
        columns: [
          { field: "SNo", header: "S.No.", width: "w-[5%]" },
          { field: "GateNo", header: "Gate No", width: "w-[10%]" },
          { field: "GateName", header: "Gate Name", width: "w-[70%]" },
          { field: "CreateDate", header: "Create Date", width: "w-[15%]" },
        ],
        rows: [
          {
            SNo: { value: 1, width: "w-1/12" },
            GateNo: { value: 1, width: "w-1/12" },
            GateName: { value: "Main Gate", width: "w-7/12" },
            CreateDate: { value: "04-Dec-2023 12:34 PM", width: "w-1/4" },
          },
        ],
      };
      
      
  return (
    <div className=" space-y-6">
        <div className=" flex items-center justify-end">
        <Link href='/dashboard/gate-settings/add-new-gate' className='bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-1'><Plus className='w-4 h-4' /> <span className="">New Gate</span> </Link>
        </div>
        <div className="">
        <Table title={`Gates`} data={gateData} />
        </div>
    </div>
  )
}
