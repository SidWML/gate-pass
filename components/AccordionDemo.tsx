
'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Fingerprint, LayoutDashboard, Ticket, Building2, Contact, StretchHorizontal, BarChartBig, Truck, FileClock, Cog, BookUser, HeartHandshake, Layout } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
  
  export function AccordionDemo() {
    const [activeModule, setActiveModule] = useState(0)
    const sidebar = [
      {
        id: 1,
        link: "Gate Pass",
        icon: <Ticket className="w-5 h-5" />,
        bgColor: "bg-blue-500",
        childrens: [
          { id: 1, link: "IN Gatepass", href: "in-gatepass" },
          { id: 2, link: "Out Gatepass", href: "out-gatepass" },
          { id: 3, link: "Pre Approved Gate In", href: "in-gatepass" },
          { id: 4, link: "Gate Settings", href: "in-gatepass" },
        ],
      },
      {
        id: 2,
        link: "Company Setting",
        icon: <Building2 className="w-5 h-5" />,
        bgColor: "bg-green-500",
        childrens: [
          { id: 1, link: "Company", href: "company" },
          { id: 2, link: "Users", href: "users" },
          { id: 3, link: "List Employees", href: "/employees" },
          { id: 4, link: "Create Employee", href: "/employees/create" },
          { id: 5, link: "Edit Employee", href: "/employees/:id/edit" },
        ],
      },
      {
        id: 3,
        link: "Contacts",
        icon: <Contact className="w-5 h-5" />,
        bgColor: "bg-yellow-500",
        childrens: [
          { id: 1, link: "New Contact", href: "new-contact" },
          { id: 2, link: "All Contact", href: "all-contact" },
        ],
      },
      {
        id: 4,
        link: "Material Management",
        icon: <StretchHorizontal className="w-5 h-5" />,
        bgColor: "bg-indigo-500",
        childrens: [
          { id: 1, link: "Item / Service /Material", href: "new-contact" },
          { id: 2, link: "Material Offloading", href: "material-offloading" },
          { id: 3, link: "Material Storage", href: "material-storage" },
          { id: 1, link: "List Materials", href: "/materials" },
          { id: 2, link: "Add Material", href: "/materials/create" },
          { id: 3, link: "Edit Material", href: "/materials/:id/edit" },
        ],
      },
      {
        id: 7,
        link: "Report",
        icon: <BarChartBig className="w-5 h-5" />,
        bgColor: "bg-purple-500",
        childrens: [
          { id: 1, link: "Gatepass Report", href: "gatepass-report" },
          { id: 2, link: "Scanner Report", href: "scanner-report" },
          { id: 1, link: "Gate Pass History", href: "/reports/gate-pass-history" },
          { id: 2, link: "Material Movement", href: "/reports/material-movement" },
          { id: 3, link: "Employee Entry/Exit", href: "/reports/employee-entry-exit" },
          { id: 4, link: "Visitor Log", href: "/reports/visitor-log" },
        ],
      },
      {
        id: 11,
        link: "Vehicles",
        icon: <Truck className="w-5 h-5" />,
        bgColor: "bg-red-500",
        childrens: [
          { id: 1, link: "List Vehicles", href: "/vehicles" },
          { id: 2, link: "Add Vehicle", href: "/vehicles/create" },
          { id: 3, link: "Edit Vehicle", href: "/vehicles/:id/edit" },
        ],
      },
      {
        id: 12,
        link: "Visitors",
        icon: <FileClock className="w-5 h-5" />,
        bgColor: "bg-pink-500",
        childrens: [
          { id: 1, link: "Recent Visitors", href: "/visitors" },
          { id: 2, link: "Pre-register Visitor", href: "/visitors/preregister" },
          { id: 3, link: "Generate Visitor Pass", href: "/visitors/generate-pass" },
        ],
      },
      {
        id: 13,
        link: "Labours",
        icon: <BookUser className="w-5 h-5" />,
        bgColor: "bg-orange-500",
        childrens: [
          { id: 1, link: "Active Labours", href: "/labours" },
          { id: 2, link: "Register Labour Gang", href: "/labours/register-gang" },
          { id: 3, link: "Issue Labour Pass", href: "/labours/issue-pass" },
        ],
      },
      {
        id: 6,
        link: "Settings",
        icon: <Cog className="w-5 h-5" />,
        bgColor: "bg-teal-500",
        childrens: [
          { id: 1, link: "Role", href: "role" },
          { id: 2, link: "Gatepass Form Setting", href: "gatepass-form-setting" },
          { id: 3, link: "Outpass Form Setting", href: "gatepass-form-setting" },
          { id: 4, link: "Gatepass Form Setting", href: "gatepass-form-setting" },
          { id: 1, link: "User Management", href: "/settings/users" },
          { id: 2, link: "Gate Configuration", href: "/settings/gate" },
          { id: 3, link: "Notification Settings", href: "/settings/notifications" },
        ],
      },
      {
        id: 16,
        link: "Help",
        icon: <HeartHandshake className="w-5 h-5" />,
        bgColor: "bg-gray-500",
        childrens: [
          { id: 1, link: "User Guide", href: "/help/guide" },
          { id: 2, link: "FAQs", href: "/help/faqs" },
          { id: 3, link: "Contact Support", href: "/help/support" },
        ],
      },
    ];
    return (
      <>
      {sidebar &&
        sidebar.map((links, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger onClick={() => setActiveModule(index)} className="flex items-center space-x-3 group p-2 hover:bg-white w-full rounded-[5px]">
                <span className={` p-1 text-gray-200 group-hover:text-white ${links.bgColor} w-[25px] h-[25px] rounded-[5px] flex items-center justify-center  `}>{links.icon}</span>
                <span className=" text-gray-600 group-hover:text-black text-[15px] font-medium">{links.link}</span>
              </AccordionTrigger>
              <AccordionContent className={ ` flex-col ${activeModule === index ? " flex animate-accordion-up[open] " : "  animate-accordion-up              "} `}>
                {links.childrens &&
                  links.childrens.map((link, indexChild) => (
                    <Link key={indexChild} className=" py-2 pl-12 hover:bg-white text-gray-600 text-[14px] leading-[20px] hover:text-black font-medium rounded-[5px]" href={link.href}>
                      {link.link}
                    </Link>
                  ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
        ))}
</>
    )
  }
  