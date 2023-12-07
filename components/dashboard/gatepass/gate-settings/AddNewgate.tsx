"use client";
import React, { useState } from "react";
import CommonInput from "../../reusables/CommonInput";
import SelectInput from "../../reusables/SelectInput";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";


export default function AddNewgate() {
  const [gates, setGates] = useState([
    {
      gateNo: "",
      gateName: "",
      securityGuard: "",
      supervisor: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    setGates((prevGates) => {
      const updatedGates = [...prevGates];
      updatedGates[index] = {
        ...updatedGates[index],
        [field]: value,
      };
      return updatedGates;
    });
  };

  const handleAddGate = () => {
    setGates((prevGates) => [
      ...prevGates,
      {
        gateNo: "",
        gateName: "",
        securityGuard: "",
        supervisor: "",
      },
    ]);
  };

  const handleDeleteGate = (index) => {
    setGates((prevGates) => {
      const updatedGates = [...prevGates];
      updatedGates.splice(index, 1);
      return updatedGates;
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", gates);
  };

  return (
    <form action="" className="">
      <div className="flex items-center justify-end mb-4">
        <Button onClick={handleAddGate} className="border border-black" variant={`secondary`}>
          Add More Gates
        </Button>
      </div>
     <div className=" space-y-5">
     {gates.map((gate, index) => (
        <div key={index} className="grid grid-cols-9 gap-4">
          <CommonInput className={` col-span-2`} value={gate.gateNo} placeholder="Gate No" label="Gate No" onChange={(e) => handleInputChange(index, "gateNo", e.target.value)} required />
          <CommonInput className={` col-span-2`} value={gate.gateName} placeholder="Gate Name/Description" label="Gate Name/Description " onChange={(e) => handleInputChange(index, "gateName", e.target.value)} required />
          <SelectInput
            value={gate.securityGuard}
            options={[
              { value: "guard1", label: "Guard 1" },
              { value: "guard2", label: "Guard 2" },
            ]}
            className={` col-span-2`}
            onChange={(value) => handleInputChange(index, "securityGuard", value)}
            placeholder="Select Guard"
            label={`Select Guard`}
          />
          <SelectInput
          className={` col-span-2`}
            value={gate.supervisor}
            options={[
              { value: "supervisor1", label: "Supervisor 1" },
              { value: "supervisor2", label: "Supervisor 2" },
            ]}
            onChange={(value) => handleInputChange(index, "supervisor", value)}
            placeholder="Select Supervisor"
            label={`Select Supervisor`}
          />
          <div className="flex items-end justify-start col-span-1">
            <Button onClick={() => handleDeleteGate(index)} variant={`destructive`} size={`icon`} ><X /></Button>
          </div>
        </div>
      ))}
     </div>
      <div className="mt-8 flex items-center gap-2">
        <Button onClick={handleSubmit}>Submit</Button>
        <Button variant={`destructive`} onClick={handleSubmit}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
