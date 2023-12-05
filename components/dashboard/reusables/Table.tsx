import React from 'react'

export default function Table({columns,data}) {
  return (
    <div className="table-container">
      <table className="table w-full ">
        <thead className=' w-full'>
          <tr className=' w-full'>
            {columns.map((column) => (
              <th className=' w-full' key={column.field}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr className=' w-full' key={rowIndex}>
              {columns.map((column) => (
                <td key={column.field}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
