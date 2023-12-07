import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

export default function CommonCheckBox({label}) {
    return (
      <div className="flex items-center space-x-2">
         <Checkbox id={label} />
        <label
          htmlFor={label}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    )
  }