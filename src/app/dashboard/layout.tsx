"use client"

import { ReactNode } from "react";
import { DashboardNavigation } from "../components/dashboard/DashboardNavigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, MenuIcon, Moon, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const { setTheme } = useTheme()
    return (
        <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" ">
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
       </div>
            <header className="sticky dark:bg-black top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
            <nav className="hidden  dark:text-white font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNavigation  />
        </nav>
        <Sheet>
            <SheetTrigger asChild >
                <Button className=" shrink-0 md:hidden" >
                    <MenuIcon className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                    <DashboardNavigation />
                </nav>
            </SheetContent>
        </Sheet>
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full" >
                    <CircleUser className=" w-5 h-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator className=" border" />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
        </DropdownMenu>

       
            </header>
            <main className="my-5">{children}</main>
        </div>
    );
}
