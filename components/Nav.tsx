"use client"

import user from "@/public/images/Avatar Style 6.png"
import { usePathname } from "next/navigation"
import { Bell } from "lucide-react"
import Image from "next/image"

const TITLES: Record<string, string> = {
  "/": "Dashboard Overview",
  "/inbox": "Inbox",
  "/calendar": "Calendar",
  "/search": "Search",
  "/settings": "Settings",
  "/call-logs": "Call Logs & History",
}

function toTitle(segment: string) {
  return segment
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ")
}

function useNavTitle(pathname: string): string {
  const segs = pathname.split("/").filter(Boolean)
  const base = segs.length ? `/${segs[0]}` : "/"
  return TITLES[base] ?? (segs.length ? toTitle(segs[0]) : "Dashboard")
}

const Nav = () => {
  const pathname = usePathname()
  const title = useNavTitle(pathname)
  return (
    <div className="w-full h-24 bg-[#111B3C] flex items-center px-8 max-md:px-4 py-2 justify-between">
      <h1 className="text-white text-xl font-semibold max-md:text-lg">{title}</h1>
      <div className="flex items-center gap-9 max-md:gap-3.5">
        <Bell className="text-white w-10 h-10 max-md:w-8 max-md:h-8"/>
        <Image 
          src={user}
          alt="User"
          width={80}
          height={80}
          className="max-md:w-13 max-md:h-13 rounded-full object-cover"
        />
      </div>
    </div>
  )
}

export default Nav
