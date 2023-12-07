
import React from 'react'
import Table from '../../reusables/Table';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function PreApprovedGatePass() {
    const visitorsData = {
        columns: [
          {
            field: "SNo",
            header: "S.No.",
            width: "w-[5%]",
          },
          {
            field: "VisitFromDateTime",
            header: "Visit From Date Time",
            width: "w-[15%]",
          },
          {
            field: "VisitToDateTime",
            header: "Visit To Date Time",
            width: "w-[15%]",
          },
          {
            field: "PassNo",
            header: "Pass No",
            width: "w-[10%]",
          },
          {
            field: "GateNo",
            header: "Gate No",
            width: "w-[10%]",
          },
          {
            field: "PassType",
            header: "Pass Type",
            width: "w-[10%]",
          },
          {
            field: "VisitorType",
            header: "Visitor/Driver/Contractor",
            width: "w-[15%]",
          },
          {
            field: "VehicleNo",
            header: "Vehicle No",
            width: "w-[10%]",
          },
          {
            field: "ContactNo",
            header: "Contact No",
            width: "w-[10%]",
          },
          {
            field: "Identity",
            header: "Identity",
            width: "w-[10%]",
          },
          {
            field: "Status",
            header: "Status",
            width: "w-[10%]",
          },
        ],
        rows: [
          // Entry 1
          {
            SNo: { value: 1, width: "w-1/12" },
            VisitFromDateTime: { value: "2023-12-04 09:30 AM", width: "w-1/6" },
            VisitToDateTime: { value: "2023-12-04 05:30 PM", width: "w-1/6" },
            PassNo: { value: "P001", width: "w-1/12" },
            GateNo: { value: 1, width: "w-1/12" },
            PassType: { value: "Regular", width: "w-1/12" },
            VisitorType: { value: "Visitor", width: "w-1/6" },
            VehicleNo: { value: "ABC123", width: "w-1/12" },
            ContactNo: { value: "9876543210", width: "w-1/12" },
            Identity: { value: "ID123", width: "w-1/12" },
            Status: { value: "Approved", width: "w-1/12" },
          },
          // Entry 2
          {
            SNo: { value: 2, width: "w-1/12" },
            VisitFromDateTime: { value: "2023-12-05 10:45 AM", width: "w-1/6" },
            VisitToDateTime: { value: "2023-12-05 03:30 PM", width: "w-1/6" },
            PassNo: { value: "P002", width: "w-1/12" },
            GateNo: { value: 2, width: "w-1/12" },
            PassType: { value: "VIP", width: "w-1/12" },
            VisitorType: { value: "Driver", width: "w-1/6" },
            VehicleNo: { value: "XYZ789", width: "w-1/12" },
            ContactNo: { value: "9876541230", width: "w-1/12" },
            Identity: { value: "ID456", width: "w-1/12" },
            Status: { value: "Pending", width: "w-1/12" },
          },
          // Entry 3
          {
            SNo: { value: 3, width: "w-1/12" },
            VisitFromDateTime: { value: "2023-12-06 02:15 PM", width: "w-1/6" },
            VisitToDateTime: { value: "2023-12-06 05:00 PM", width: "w-1/6" },
            PassNo: { value: "P003", width: "w-1/12" },
            GateNo: { value: 3, width: "w-1/12" },
            PassType: { value: "Regular", width: "w-1/12" },
            VisitorType: { value: "Contractor", width: "w-1/6" },
            VehicleNo: { value: "MNO456", width: "w-1/12" },
            ContactNo: { value: "9876547890", width: "w-1/12" },
            Identity: { value: "ID789", width: "w-1/12" },
            Status: { value: "Rejected", width: "w-1/12" },
          },
          // Entry 4
          {
            SNo: { value: 4, width: "w-1/12" },
            VisitFromDateTime: { value: "2023-12-07 11:00 AM", width: "w-1/6" },
            VisitToDateTime: { value: "2023-12-07 01:30 PM", width: "w-1/6" },
            PassNo: { value: "P004", width: "w-1/12" },
            GateNo: { value: 4, width: "w-1/12" },
            PassType: { value: "VIP", width: "w-1/12" },
            VisitorType: { value: "Visitor", width: "w-1/6" },
            VehicleNo: { value: "JKL789", width: "w-1/12" },
            ContactNo: { value: "9876545678", width: "w-1/12" },
            Identity: { value: "ID101", width: "w-1/12" },
            Status: { value: "Approved", width: "w-1/12" },
          },
          // Entry 5
          {
            SNo: { value: 5, width: "w-1/12" },
            VisitFromDateTime: { value: "2023-12-08 03:30 PM", width: "w-1/6" },
            VisitToDateTime: { value: "2023-12-08 05:30 PM", width: "w-1/6" },
            PassNo: { value: "P005", width: "w-1/12" },
            GateNo: { value: 5, width: "w-1/12" },
            PassType: { value: "Regular", width: "w-1/12" },
            VisitorType: { value: "Driver", width: "w-1/6" },
            VehicleNo: { value: "PQR123", width: "w-1/12" },
            ContactNo: { value: "9876542345", width: "w-1/12" },
            Identity: { value: "ID112", width: "w-1/12" },
            Status: { value: "Pending", width: "w-1/12" },
          },
          // Add more entries as needed
        ],
      };
      
  return (
    <div className=" space-y-6">
        <div className=" flex items-center justify-end">
        <Link href='/dashboard/pre-approved-gatepass/add-pre-approved-gatepass' className='bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-1'><Plus className='w-4 h-4' /> <span className="">New Pre Approved Gatepass</span> </Link>
        </div>
        <div className="">
        <Table title={`In Gate Passess`} data={visitorsData} />
        </div>
    </div>
  )
}
