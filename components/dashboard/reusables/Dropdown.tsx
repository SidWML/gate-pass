import React from 'react'
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    Link,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
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

  const MenuItem = ({ icon, label, shortcut, subMenuItems,href }) => (
    <DropdownMenuItem>
      {icon && React.cloneElement(icon, { className: "mr-2 h-4 w-4" })}
      <span>{label}</span>
      {subMenuItems && (
        <Link className='block' href={href || ""}>
          <div>
            {subMenuItems.map((item) => (
              <div key={item.label}>
                {item.icon && React.cloneElement(item.icon, { className: "mr-2 h-4 w-4" })}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Link>
      )}
    </DropdownMenuItem>
  );

export default function Dropdown({ menuLabel, menuItems,buttonName }) {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className='p-2' variant="outline">{buttonName}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        { menuItems && menuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
