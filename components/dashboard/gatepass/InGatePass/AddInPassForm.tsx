"use client";

import React, { useRef, useState } from "react";
import SelectInput from "../../reusables/SelectInput";
import CommonInput from "../../reusables/CommonInput";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CommonCheckBox from "../../reusables/CommonCheckBox";
import VisitorForm from "./VisitorForm";
import ContractorForm from "./ContractorForm";
import VehicleForm from "./VehicleForm";
import MaterialForm from "./MaterialForm";

export default function AddInPassForm() {
  const [formData, setFormData] = useState({
    passType: "",
    vehicleNo: "",
    dateTime: "",
    gateNo: "",
    mobileNoCountryCode: "",
    mobileNo: "",
    visitorName: "",
    addOn: "",
    companyName: "",
    streetAddress: "",
    country: "",
    state: "",
    city: "",
    pinZip: "",
    purpose: "",
    identityType: "",
    identityNumber: "",
    gender: "",
    whomToMeet: "",
    informVia: "",
    areaOfVisit: "",
  });
  const [formType, setFormType] = useState("visitor");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const passTypes = [
    {
      value: "visitor",
      label: "Visitors",
    },
    {
      value: "vehicle",
      label: "Vehicle",
    },
    {
      value: "contractor",
      label: "Contractor",
    },
    {
      value: "material",
      label: "Material",
    },
  ];
  const date = new Date();

  const passTypeForm = (value) => {
    setFormType(value);
  };

  return (
    <div className="w-full ">
      <form onSubmit={handleSubmit} className=" w-full space-y-8">
        <div className=" grid grid-cols-6 gap-8 ">
        <div className="flex flex-col space-y-3 bg-grey-lighter  col-span-1">
          <label className=" flex flex-col items-center p-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
            <img src="/photo.png" alt="" className=" max-w-[80px] " />
            <span className="mt-2 text-base leading-normal">Upload Images</span>
            <input type="file" className="hidden" />
          </label>
          <Button variant={`default`}>Capture</Button>
        </div>
        <div className=" grid grid-cols-2 gap-4 col-span-5">
          <SelectInput onChange={passTypeForm} placeholder={`Pass Type`} required={true} options={passTypes} label={`Pass Type`} />
          <CommonInput value={``} placeholder={`Vehicle No`} label={`Vehicle No`} required={false} />
          <CommonInput value={date} placeholder={`Date & Time`} label={`Date & Time`} required={true} />
          <SelectInput placeholder={`Gate`} required={true} options={passTypes} label={`Gate`} />

        </div>
        </div>
          <div className=" w-full border-t pt-8">
            {formType === "visitor" ? <VisitorForm /> : formType === "contractor" ? <ContractorForm /> : formType === "vehicle" ? <VehicleForm /> : <MaterialForm />}
            <div className="mt-8 col-span-2 flex items-center justify-start gap-2">
              <Button variant={`default`}>Save</Button>
              <Button variant={`destructive`}>Cancel</Button>
            </div>
        </div>
      </form>
    </div>
  );
}
