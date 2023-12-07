import { Input } from '@/components/ui/input'
import React from 'react'

export default function CommonInput({placeholder,required,label,value, combo, className}) {
  return (
    <div className={` w-full space-y-3 ${className ? className : " w-full"}`}>
    {label && <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
    {label} {required && <span className=" text-red-500">*</span>}
    </label>}
     <Input  className={`placeholder:text-gray-400 ${combo ? " rounded-r-[5px] rounded-l-none " : " "}`} placeholder={placeholder} required={required} />
  </div>
  )
}
