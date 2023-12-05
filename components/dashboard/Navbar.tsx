import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Button } from '../ui/button'
import Dropdown from '@/components/dashboard/reusables/Dropdown'
import { Users, UserPlus, Mail, MessageSquare, PlusCircle, Plus, Github, LifeBuoy, Cloud, LogOut, Keyboard, CreditCard, Settings, Bell,User, Search } from "lucide-react";
import { Input } from "../ui/input";


const NotificationItem = ({ type, title, description, time }) => (
  <div className="py-2">
    <div className={`font-bold text-${type}`}>{title}</div>
    <div className="text-sm text-gray-500">{description}</div>
    <div className="text-xs text-gray-400">{time}</div>
  </div>
);
const menuItems = [
  {
    icon: <User />,
    label: "Profile",
    shortcut: "⇧⌘P",
  },

  {
    icon: <Settings />,
    label: "Settings",
    shortcut: "⌘S",
  },
  {
    icon: <LifeBuoy />,
    label: "Support",
  },
  {
    icon: <LogOut />,
    label: "Log out",
    shortcut: "⇧⌘Q",
  },
];

const notifications = [
  {
    id: 1,
    type: "blue-500",
    title: "New Gatepass Request",
    description: "You have a new gatepass request awaiting approval.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "green-500",
    title: "Gatepass Approved",
    description: "Your gatepass request has been approved. Have a safe journey!",
    time: "Yesterday",
  },
  {
    id: 3,
    type: "red-500",
    title: "Gatepass Denied",
    description: "Unfortunately, your gatepass request has been denied.",
    time: "3 days ago",
  },
  {
    id: 4,
    type: "yellow-500",
    title: "Reminder",
    description: "Don't forget to collect your gatepass from the reception.",
    time: "1 week ago",
  },
  {
    id: 5,
    type: "purple-500",
    title: "Gatepass Expired",
    description: "Your gatepass has expired. Please renew it to avoid inconvenience.",
    time: "2 weeks ago",
  },
  {
    id: 6,
    type: "orange-500",
    title: "Security Alert",
    description: "Unusual activity detected in your gatepass account. Secure your account now.",
    time: "1 month ago",
  },
];
export default function Navbar() {
  return (
    <div className="w-full py-2 px-4 border-b flex items-center gap-3" >
      <div className=" relative w-[60%] ml-auto">
        <Input className="px-10 outline-none  " />
        <Search className=" absolute top-[50%] left-[10px] -translate-y-1/2 text-sidebar-icon-color cursor-none opacity-30  " />
      </div>
       <div className="  flex items-center gap-3">
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className=" outline-none " variant="outline" size={"icon"}>
            <Bell className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-[400px] max-h-[600px] overflow-y-scroll">
      <DropdownMenuLabel>Notification Center</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup className="">
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id}>
            <NotificationItem {...notification} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuGroup>
    </DropdownMenuContent>
      </DropdownMenu>
      <Dropdown menuItems={menuItems} menuLabel={"My Account"} buttonName={(<div className=" flex items-center gap-2"><div className="w-[25px] h-[25px] flex items-center justify-center bg-teal-500 text-white rounded-[5px]">SK </div> Sajid Khan</div> )} />
       </div>
    </div>
  )
}
