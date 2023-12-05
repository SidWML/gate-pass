"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Line, Pie, PolarArea, Doughnut } from "react-chartjs-2";
import { BarChart, Box, Car, Check, CheckCheck, ChevronRightCircle, Clock, Move, Shield, Star, Truck, User, UserPlus } from "lucide-react";
import Table from "./reusables/Table";
Chart.register(CategoryScale);

export default function Dashboard() {
  const [gatePassData, setGatePassData] = useState({
    types: ["Visitor", "Material", "Vehicle"],
    counts: [120, 80, 50],
    colors: ["#007bff", "#2ecc71", "#f1c40f"],
  });
  const [activeUsersData, setActiveUsersData] = useState({
    labels: ["John Doe", "Jane Doe", "Mike Smith"],
    values: [25, 18, 12],
  });
  const [data, setData] = useState({
    types: ["Visitor", "Material", "Vehicle"],
    inPasses: {
      nonReturned: [30, 20, 10],
      returned: [60, 40, 25],
      cancelled: [5, 5, 3],
    },
    outPasses: {
      pending: [15, 10, 5],
      approved: [20, 15, 10],
      cancelled: [3, 2, 1],
    },
    colors: ["#007bff", "#2ecc71", "#f1c40f"],
  });

  const inPassData = {
    labels: data.types,
    datasets: [
      {
        label: "Non-Returned IN Passes",
        data: data.inPasses.nonReturned,
        backgroundColor: data.colors[0],
      },
      {
        label: "Returned IN Passes",
        data: data.inPasses.returned,
        backgroundColor: data.colors[1],
      },
      {
        label: "Cancelled IN Passes",
        data: data.inPasses.cancelled,
        backgroundColor: data.colors[2],
      },
    ],
  };

  const outPassData = {
    labels: data.types,
    datasets: [
      {
        label: "Pending OUT Passes",
        data: data.outPasses.pending,
        backgroundColor: data.colors[0],
      },
      {
        label: "Approved OUT Passes",
        data: data.outPasses.approved,
        backgroundColor: data.colors[1],
      },
      {
        label: "Cancelled OUT Passes",
        data: data.outPasses.cancelled,
        backgroundColor: data.colors[2],
      },
    ],
  };

  const Card = ({ metric, count, color, icon }) => (
    <div className={`card rounded-lg p-4 shadow ${color}`}>
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold text-gray-200 mb-2">{metric}</span>
      </div>
      <div className=" flex items-center justify-between w-full text-white">
        <h3 className="text-xl font-bold">{count}</h3>
        <Link href={``}>
          <ChevronRightCircle className="w-4 h-4 " />
        </Link>
      </div>
    </div>
  );

  const QuickAction = ({ label, href, color, icon }) => (
    <Link href={``} className={`rounded-lg text-[14px] border border-black/10 text-black font-semibold ${color} hover:bg-opacity-75 p-2 flex items-center gap-2 hover:bg-blue-100 `}>
      <span className="">
        {icon}
      </span>
        <span>{label}</span>
    </Link>
  );

  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const options = { hour12: true, hour: "numeric", minute: "numeric", second: "numeric" };
    const formattedTimeString = currentTime.toLocaleTimeString("en-US", options);
    setFormattedTime(formattedTimeString);
  }, []);


  const topVisitorsData = [
    { 'No of Visit': 5, 'Visitor Name': 'John Doe', 'Contact No': '123-456-7890', 'In Time':'9:00', 'Out Time':'-' },
  ];
  
  const contractorWorkerData = [
    { 'Worker Code': 'W001', 'Worker Name': 'Alice', 'IN Time': '10:00 AM', 'Out Time': '05:00 PM' },
  ];
  
  const topVisitorsColumns = ['No of Visit', 'Visitor Name', 'Contact No', 'In Time', 'Out Time'].map((field) => ({
    field,
    header: field,
  }));
  
  const contractorWorkerColumns = ['Worker Code', 'Worker Name', 'IN Time', 'Out Time'].map((field) => ({
    field,
    header: field,
  }));

  return (
    <div className="flex flex-col  w-full h-full">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white text-lg font-bold ">
        <span>Gate Pass Dashboard</span>
        <div className=" flex items-center gap-4">
          <span>{new Date().toLocaleDateString()}</span>
          <span>{formattedTime}</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4  py-4">
        <Card metric="Total Visitors Today" count={231} color="bg-blue-500" icon={<User />} />
        <Card metric="Material Movement Today" count="12.5T" color="bg-green-500" icon={<Truck />} />
        <Card metric="Vehicle Entries/Exits Today" count={456} color="bg-yellow-500" icon={<Car />} />
        <Card metric="Contractors" count="John Doe" color="bg-indigo-500" icon={<Star />} />
        <Card metric="Movement (In / Out)" count="150" color="bg-teal-500" icon={<Move />} />
      </div>

      <div className=" py-4">
        <h2 className="text-xl font-semibold ">Quick Actions</h2>
        <div className=" grid grid-cols-5 mt-6 gap-4">
          <QuickAction label="Approve Pending Pass" href="/gatepass/pending" color="blue" icon={<Check />} />
          <QuickAction label="Issue Visitor Pass" href="/gatepass/new/visitor" color="green" icon={<UserPlus />} />
          <QuickAction label="View Recent Pass History" href="/gatepass/history" color="gray" icon={<Clock />} />
          <QuickAction label="Manage Security Personnel" href="/security/personnel" color="purple" icon={<Shield />} />
          <QuickAction label="Generate Reports" href="/reports" color="orange" icon={<BarChart />} />
          <QuickAction label="Track Material Movement" href="/material/movement" color="indigo" icon={<Box />} />
          <QuickAction label="Manage Vehicles" href="/vehicles" color="teal" icon={<Truck />} />
        </div>
      </div>

      <div className=" py-4">
        <h2 className="text-xl font-semibold ">Gate Pass Activity</h2>
        <div className=" grid grid-cols-5 gap-5 mt-8">
          <div className=" flex flex-col justify-between col-span-1 border border-black/10 rounded-[5px] p-4">
            <Doughnut
              data={{
                labels: gatePassData.types,
                datasets: [
                  {
                    label: "Gate Pass Types",
                    data: gatePassData.counts,
                    backgroundColor: gatePassData.colors,
                  },
                ],
              }}
            />
            <h1 className=" text-center font-semibold mt-4">Gate Pass Type</h1>
          </div>
          <div className=" col-span-2 border border-black/10 rounded-[5px] p-4">
            <Bar data={inPassData} />
            <h1 className=" text-center font-semibold mt-4">Weekly No of (IN) Passess </h1>
          </div>
          <div className=" col-span-2 border border-black/10 rounded-[5px] p-4 ">
            <Bar data={outPassData} />
            <h1 className=" text-center font-semibold mt-4">Weekly No of (OUT) Passess </h1>
          </div>
        </div>
      </div>
      <div className=" py-4 w-full">
        <h2 className="text-xl font-semibold ">Visitors</h2>
        <div className=" mt-6">
        <Table columns={topVisitorsColumns} data={topVisitorsData} />
        </div>
        </div>
        <div className=" py-4 w-full">
        <h2 className="text-xl font-semibold ">Visitors</h2>
        <div className=" mt-6">
        <Table columns={contractorWorkerColumns} data={contractorWorkerData} />
        </div>
        </div>
    </div>
  );
}
