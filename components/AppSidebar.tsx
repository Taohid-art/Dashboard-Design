'use client'
import { Calendar, Home, LogOut, Phone, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from "@/public/images/Container.png"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
  {
    title: "Dashboard Overview",
    url: "/",
    icon: Home,
  },
  {
    title: "Call Logs",
    url: "/call-logs",
    icon: Phone,
  },
  {
    title: "Appointments",
    url: "/appointments",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar className="bg-[#111B3C] h-svh border-none">
     <SidebarHeader className="bg-[#111B3C] flex items-center p-5 w-full">
        <Image
          src={logo}
          alt="Logo"
          width={56}
          height={56}
        />
     </SidebarHeader>
      <SidebarContent className="bg-[#111B3C]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/80 px-2">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url} className="text-white text-lg my-2">
                    <Link href={item.url}>
                      <item.icon height={20} width={20} className="h-20 w-20 text-md"/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter  className=" bg-[#111B3C] p-4">
         <div className=" flex items-center px-2 py-1 gap-4 cursor-pointer"> 
        <LogOut className="text-black"/>
            <span className="text-red-500">Log Out</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
