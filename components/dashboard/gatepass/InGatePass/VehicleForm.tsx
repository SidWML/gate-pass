import React, { useRef, useState } from "react";
import SelectInput from "../../reusables/SelectInput";
import CommonInput from "../../reusables/CommonInput";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CommonCheckBox from "../../reusables/CommonCheckBox";

export default function VehicleForm() {
  return (
    <div className="  grid grid-cols-2 gap-4">
      <CommonInput value={``} placeholder={`Drivers Name`} label={`Drivers Name`} required={true} />
      <div className=" space-y-3">
        <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
          Mobile No <span className=" text-red-500 ml-1">*</span>
        </label>
        <div className="flex items-center col-span-1">
          <SelectInput className=" w-[20%]" combo={true} placeholder={`+91`} required={true} />
          <CommonInput value={``} combo={true} placeholder={`Mobile No`} required={false} />
        </div>
      </div>
      <CommonInput value={``} placeholder={`Visitors/Contractor/Material`} label={`Company Name`} required={true} />
      <CommonInput value={``} placeholder={`Address`} label={`Address`} required={true} />
      <div className=" flex items-center gap-4">
        <SelectInput placeholder={`Country`} required={true} label={`Country`} />
        <SelectInput placeholder={`State`} required={true} label={`State`} />
      </div>
      <div className=" flex items-center gap-4">
        <CommonInput value={``} placeholder={`City`} label={`City`} required={true} />
        <CommonInput value={``} placeholder={`Pin Code`} label={`Pin Code`} required={true} />
      </div>
      <CommonInput value={``} placeholder={`Visit Purpose`} label={`Visit Purpose`} required={true} />
      <SelectInput value={``} placeholder={`Whom to Meet`} label={`Whom to Meet`} required={true} />
      <div className=" space-y-3">
        <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
          Identity Proof <span className=" text-red-500 ml-1">*</span>
        </label>
        <div className="flex items-center col-span-1 gap-4">
          <SelectInput className=" w-[60%]" placeholder={`Identity Proof`} required={true} />
          <CommonInput value={``} placeholder={`Identity No`} required={false} />
        </div>
      </div>
      <div className=" space-y-3 col-span-1 flex flex-col justify-between">
        <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
          Gender <span className=" text-red-500 ml-1">*</span>
        </label>
        <RadioGroup className="flex items-center gap-4 my-auto" defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <label htmlFor="r1">Male</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <label htmlFor="r2">Female</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <label htmlFor="r3">Other</label>
          </div>
        </RadioGroup>
      </div>
      <div className=" space-y-3 col-span-1 flex flex-col justify-between">
        <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
          Inform Via
        </label>
        <div className=" flex items-center gap-4">
          <CommonCheckBox label={`SMS`} />
          <CommonCheckBox label={`WhatsAPP`} />
          <CommonCheckBox label={`Email`} />
        </div>
      </div>
      <div className=" col-span-2 grid grid-cols-4 gap-4 mt-2">
      <CommonInput value={``} placeholder={`Gross Weight`} label={`Gross Weight`}  />
      <CommonInput value={``} placeholder={`Tare Weight`} label={`Tare Weight`}  />
      <CommonInput value={``} placeholder={`Net Weight`} label={`Net Weight`}  />
      <SelectInput className=" w-full" placeholder={`Weight Units`}  />
      </div>
      <div className=" col-span-2 grid grid-cols-3 gap-4 mt-2">

        <div className=" col-span-1 ">
          <CommonInput value={``} placeholder={`Vehicle Registration Number`} label={`Vehicle Registration Number`} required={true} />
        </div>
        <div className=" col-span-1">
          <CommonInput value={``} placeholder={`Transport Name`} label={`Transport Name`} required={true} />
        </div>
        <div className=" col-span-1">
          <CommonInput value={``} placeholder={`LR No`} label={`LR No`} required={true} />
        </div>
        <div className=" space-y-3 col-span-1 flex flex-col justify-between">
          <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
            Driving License
          </label>
          <div className=" border">
            <input type="file" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
}
