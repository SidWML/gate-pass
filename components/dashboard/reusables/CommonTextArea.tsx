import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function CommonTextArea({placeholder,label,required}) {
  return (
    <div className=" space-y-3">
        {label && <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className=" text-red-500 ml-1">*</span>}
      </label>}
        <Textarea placeholder={placeholder} />
    </div>
  )
}
