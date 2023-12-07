"use client";
import React, { useState } from "react";
import SelectInput from "../../reusables/SelectInput";
import CommonInput from "../../reusables/CommonInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CommonCheckBox from "../../reusables/CommonCheckBox";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function AddPreApprovedGatePass() {
  const [isPhotoUpload, setIsPhotoUpload] = useState(false);

  const handlePhotoUploadChange = (value) => {
    setIsPhotoUpload(value === "Yes");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
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

  return (
    <form onSubmit={handleSubmit} className=" ">
      <div className=" grid grid-cols-3 gap-4">
        <SelectInput required placeholder="Pass Type" label="Pass Type" />
        <CommonInput placeholder="Vehicle No" label="Vehicle No" />
        <SelectInput required placeholder="Entry Gate No" label="Entry Gate No" />
        <div className=" flex flex-col justify-between">
          <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
            Do you have Photo of Visitor/Vehicle to upload?  <span className=" text-red-500 ml-1">*</span>
          </label>
          <RadioGroup className=" flex items-center gap-4" onValueChange={(e) => handlePhotoUploadChange(e)} defaultValue="No">
            <RadioGroupItem value="No" id="photoNo" />
            <label htmlFor="photoNo">No</label>

            <RadioGroupItem value="Yes" id="photoYes" />
            <label htmlFor="photoYes">Yes</label>
          </RadioGroup>
        </div>

        {isPhotoUpload && (
          <div className=" space-y-3">
            <label htmlFor="">Upload Photo</label>
            <Input type="file" label="Attached File" description="Maximum 6 attachments allowed, with one file size maximum 1.5 MB and total uploaded files size maximum 9 MB" maxFiles={6} maxFileSize={1.5} totalMaxFileSize={9} />
          </div>
        )}

        <CommonInput required placeholder="Visitor Name" label="Visitor Name" />
        <CommonInput required placeholder="Mobile No" label="Mobile No" />
        <CommonInput required placeholder="Company Name" label="Company Name" />
        <CommonInput required placeholder="Street Address" label="Street Address" />

        <div className="flex gap-4 col-span-3">
          <SelectInput required placeholder="Country" label="Country" />
          <SelectInput required placeholder="State" label="State" />
          <CommonInput required placeholder="City" label="City" />
          <CommonInput required placeholder="Pin/Zip" label="Pin/Zip" />
        </div>

        <SelectInput placeholder="Identity Type" label="Identity Type" />
        <CommonInput placeholder="Identity Number" label="Identity Number" />

        <div className=" flex flex-col justify-between space-y-3">
        <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
            Gender  <span className=" text-red-500 ml-1">*</span>
          </label>
          <RadioGroup className=" flex items-center gap-4" defaultValue="Male">
            <RadioGroupItem value="Male" id="genderMale" />
            <label htmlFor="genderMale">Male</label>

            <RadioGroupItem value="Female" id="genderFemale" />
            <label htmlFor="genderFemale">Female</label>

            <RadioGroupItem value="Other" id="genderOther" />
            <label htmlFor="genderOther">Other</label>
          </RadioGroup>
        </div>

        <div className=" flex flex-col justify-between space-y-3">
        <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
            Entry Type  <span className=" text-red-500 ml-1">*</span>
          </label>
          <RadioGroup className=" flex items-center gap-4" defaultValue="Single">
            <RadioGroupItem value="Single" id="entrySingle" />
            <label htmlFor="entrySingle">Single</label>

            <RadioGroupItem value="Multiple" id="entryMultiple" />
            <label htmlFor="entryMultiple">Multiple</label>
          </RadioGroup>
        </div>
          <div className=" space-y-3 w-full">
            <label htmlFor="">From To Visit Date & Time</label>
            <div className={cn(" w-full ")}>
              <Popover >
                <PopoverTrigger className=" w-full " asChild>
                  <Button id="date" variant={"outline"} className={cn("w-full border-gray-300 justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        <CommonInput placeholder="Time" label="Time" />
        <CommonInput placeholder="Purpose" label="Purpose" />

        <div className=" flex flex-col justify-between space-y-3">
          <label>Inform to Visitor Via</label>
          <div className=" flex items-center gap-4">
            <CommonCheckBox label="Email" />
            <CommonCheckBox label="SMS" />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2">
        <Button className=" mt-8" type="submit">
          Submit
        </Button>
        <Button variant={`destructive`} className=" mt-8" type="submit">
          Cancel
        </Button>
      </div>
    </form>
  );
}
