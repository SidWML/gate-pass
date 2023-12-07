"use client";
import React, { useState } from "react";
import SelectInput from "../../reusables/SelectInput";
import CommonInput from "../../reusables/CommonInput";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CommonCheckBox from "../../reusables/CommonCheckBox";
import CommonTextArea from "../../reusables/CommonTextArea";

export default function MaterialOutForm() {
  const [materialItems, setMaterialItems] = useState([{ sno: 1, itemName: "", description: "", quantity: "", unit: "", invoiceNo: "" }]);
  const [ListItem, setListItem] = useState("false");
  const handleAddItem = () => {
    const newSno = materialItems.length + 1;
    setMaterialItems([...materialItems, { sno: newSno, itemName: "", description: "", quantity: "", unit: "", invoiceNo: "" }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...materialItems];
    updatedItems[index][field] = value;
    setMaterialItems(updatedItems);
  };


  return (
    <div className="grid grid-cols-2 gap-4">
      <CommonInput value={``} placeholder={`Store Incharge Name `} label={`Store Incharge Name`} required={true} combo={undefined} className={undefined} />
      <CommonInput value={``} placeholder={`Consignee's Company Name`} label={`Consignee's Company Name`} required={true} combo={undefined} className={undefined} />
      <CommonInput value={``} placeholder={`Consignee's Name`} label={`Consignee's Name`} required={true} combo={undefined} className={undefined} />
      <CommonInput value={``} placeholder={`Full Address`} label={`Full Address`} required={true} combo={undefined} className={undefined} />
      <div className="flex items-center gap-4">
        <SelectInput placeholder={`Select Country`} required={true} label={`Country`} options={undefined} onChange={undefined} className={undefined} combo={undefined} />
        <SelectInput placeholder={`Select State`} required={true} label={`State`} options={undefined} onChange={undefined} className={undefined} combo={undefined} />
      </div>
      <div className="flex items-center gap-4">
        <CommonInput value={``} placeholder={`City`} label={`City`} required={true} combo={undefined} className={undefined} />
        <CommonInput value={``} placeholder={`Postal Code`} label={`Postal Code`} required={true} combo={undefined} className={undefined} />
      </div>
      <div className="space-y-3 col-span-1 flex flex-col justify-between">
        <label htmlFor="informVia" className="block text-sm font-semibold text-gray-700">
          Inform Via
        </label>
        <div className="flex items-center gap-4">
          <CommonCheckBox label={`SMS`} />
          <CommonCheckBox label={`WhatsApp`} />
          <CommonCheckBox label={`Email`} />
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-3 gap-4 mt-2">
        <SelectInput className="w-full" placeholder={`Under the Supervision`} label={`Under the Supervision`} required={undefined} options={undefined} onChange={undefined} combo={undefined} />
        <SelectInput className="w-full" placeholder={`Material Type`} label={`Material Type`} required={undefined} options={undefined} onChange={undefined} combo={undefined} />
        <div className="space-y-3 col-span-1 flex flex-col justify-between">
          <label htmlFor="gender" className="block text-sm font-semibold text-gray-700">
            List Items <span className="text-red-500 ml-1">*</span>
          </label>
          <RadioGroup onValueChange={(e) => setListItem(e)} className="flex items-center gap-4 my-auto" defaultValue={ListItem}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="r1" />
              <label htmlFor="r1">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="r2" />
              <label htmlFor="r2">No</label>
            </div>
          </RadioGroup>
        </div>
        {ListItem === "true" ? (
          <div className="col-span-3 w-full space-y-5">
            <h2 className="text-lg font-semibold ">Itemized Material</h2>
            <table className="w-full border-collapse ">
              <thead>
                <tr className=" bg-gray-800 text-white">
                  <th className=" border-r p-2">S. No.</th>
                  <th className=" border-r p-2">Item Name *</th>
                  <th className=" border-r p-2">Description</th>
                  <th className=" border-r p-2">Quantity *</th>
                  <th className=" border-r p-2">Unit *</th>
                  <th className=" border-r p-2">Invoice No</th>
                  <th className=" border-r p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {materialItems.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2">{item.sno}</td>
                    <td className="border p-2">
                      <CommonInput value={item.itemName} placeholder={`Item Name`} onChange={(e) => handleItemChange(index, "itemName", e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <CommonInput value={item.description} placeholder={`Description`} onChange={(e) => handleItemChange(index, "description", e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <CommonInput value={item.quantity} placeholder={`Quantity`} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <CommonInput value={item.unit} placeholder={`Unit`} onChange={(e) => handleItemChange(index, "unit", e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <CommonInput value={item.invoiceNo} placeholder={`Invoice No`} onChange={(e) => handleItemChange(index, "invoiceNo", e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <button onClick={() => {}}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button onClick={handleAddItem} className="mt-2">
              Add Item
            </Button>
          </div>
        ) : (
          <CommonTextArea placeholder={`Material Description`} label={`Material Description`} required={undefined} />
        )}
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-4 mt-2">
        <CommonInput value={``} placeholder={`Gross Weight`} label={`Gross Weight`} required={undefined} combo={undefined} className={undefined} />
        <CommonInput value={``} placeholder={`Tare Weight`} label={`Tare Weight`} required={undefined} combo={undefined} className={undefined} />
        <CommonInput value={``} placeholder={`Net Weight`} label={`Net Weight`} required={undefined} combo={undefined} className={undefined} />
        <SelectInput className="w-full" placeholder={`Weight Units`} label={`Weight Units`} required={undefined} options={undefined} onChange={undefined} combo={undefined} />
      </div>
      <div className="col-span-2 grid grid-cols-3 gap-4 mt-2">
      <CommonInput value={``} placeholder={`Driver's Full Name`} label={`Driver's Full Name`} required={true} combo={undefined} className={undefined} />
      <div className="space-y-3">
        <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-700">
          Mobile Number <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="flex items-center col-span-1">
          <SelectInput className="w-[20%]" combo={true} placeholder={`+91`} required={true} label={undefined} options={undefined} onChange={undefined} />
          <CommonInput value={``} combo={true} placeholder={`Mobile Number`} required={false} label={undefined} className={undefined} />
        </div>
      </div>
      <div className="space-y-3 col-span-2">
        <label htmlFor="idProof" className="block text-sm font-semibold text-gray-700">
          ID Proof <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="flex items-center col-span-1 gap-4">
          <SelectInput className="w-[60%]" placeholder={`Select ID Proof`} required={true} label={undefined} options={undefined} onChange={undefined} combo={undefined} />
          <CommonInput value={``} placeholder={`ID Number`} required={false} label={undefined} combo={undefined} className={undefined} />
        </div>
      </div>
      <div className="space-y-3 col-span-1 flex flex-col justify-between">
        <label htmlFor="gender" className="block text-sm font-semibold text-gray-700">
          Gender <span className="text-red-500 ml-1">*</span>
        </label>
        <RadioGroup className="flex items-center gap-4 my-auto" defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="r1" />
            <label htmlFor="r1">Male</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="r2" />
            <label htmlFor="r2">Female</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="r3" />
            <label htmlFor="r3">Other</label>
          </div>
        </RadioGroup>
      </div>
      <CommonInput value={``} placeholder={`Vehicle Number`} label={`Vehicle Number`} required={true} combo={undefined} className={undefined} />
        <div className="col-span-1">
          <CommonInput value={``} placeholder={`Vehicle Registration Number`} label={`Vehicle Registration Number`} required={true} combo={undefined} className={undefined} />
        </div>
        <div className="col-span-1">
          <CommonInput value={``} placeholder={`Transport Name`} label={`Transport Name`} required={true} combo={undefined} className={undefined} />
        </div>
        <div className="col-span-1">
          <CommonInput value={``} placeholder={`LR No`} label={`LR No`} required={true} combo={undefined} className={undefined} />
        </div>
        <div className="space-y-3 col-span-1 flex flex-col justify-between">
          <label htmlFor="drivingLicense" className="block text-sm font-semibold text-gray-700">
            Driving License
          </label>
          <div className="border">
            <input type="file" name="drivingLicense" id="drivingLicense" />
          </div>
        </div>
      </div>
    </div>
  );
}
