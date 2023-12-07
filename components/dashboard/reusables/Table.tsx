import { Delete, Edit, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Table({ data,title }) {
  const { columns, rows,  } = data;

  return (
    <div className=" w-full border space-y-6 p-5">
       <h2 className="text-xl font-semibold pl-2 ">{title}</h2>
      <div className="my-2 flex sm:flex-row flex-col">
        <div className="flex flex-row mb-1 sm:mb-0">
          <div className="relative">
            <select className="appearance-none h-full rounded-l border block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="block relative">
          <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
          <input placeholder="Search" className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
      </div>
      <div className="w-full h-full border rounded-[5px]  overflow-x-auto">
        <table className="table  min-w-full max-w-full    ">
          <thead className="border-b-2 border-gray-200 w-full  ">
            <tr className="w-full bg-gray-800 ">
              {columns.map((column) => (
                <th key={column.field} className={`${column.width} px-6 border-l text-gray-200 py-2 text-start  whitespace-nowrap `}>
                  {column.header}
                </th>
              ))}
              <th className=" px-6 border-l text-gray-200 py-2 text-start  whitespace-nowrap">
                  Actions
              </th>
            </tr>
          </thead>
          <tbody className="w-full mt-4">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={`w-full   ${rowIndex % 2 ? " bg-[#f8f7f6] " : " bg-white "}`}>
                {columns.map((column) => (
                  <td key={column.field} className={`${column.width} px-6 py-2 whitespace-nowrap`}>
                    <Link href={""}>{typeof row[column.field] === "object" ? row[column.field].value : row[column.field]}</Link>
                  </td>
                ))}
                 <td className=" px-6 border-l text-gray-200 py-2 text-start flex items-center justify-center gap-2 whitespace-nowrap">
                  <button><Eye className=" w-4 h-4 text-black hover:text-blue-600" /> </button> <button><Edit className=" w-4 h-4 text-green-400 hover:text-green-500" /> </button> <button><Delete className=" w-4 h-4 text-red-400 hover:text-red-500" /> </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
