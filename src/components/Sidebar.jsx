"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  User,
  MapPin,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Target,
  FileText,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "Profile",
    icon: User,
    url: "/dashboard/profile",
    disabled: true, // Disabled for guest users
  },
  {
    title: "Career Roadmap",
    icon: MapPin,
    url: "/dashboard/career-roadmap",
  },
  {
    title: "Industry Insights",
    icon: TrendingUp,
    url: "/dashboard/industry-insights",
  },
  {
    title: "Courses",
    icon: BookOpen,
    url: "/dashboard/courses",
  },
  {
    title: "Colleges",
    icon: GraduationCap,
    url: "/dashboard/colleges",
  },
  {
    title: "Interview Prep",
    icon: Target,
    url: "/dashboard/interview-prep",
  },
  {
    title: "Resume",
    icon: FileText,
    url: "/dashboard/resume",
  },
  {
    title: "AI Chatbot",
    icon: MessageCircle,
    url: "/dashboard/ai-chatbot",
  },
];

export default function Sidebar({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo, set to false

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <ShadcnSidebar className="border-r border-border">
          <SidebarHeader className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-primary">FUTURE FORGE⚡⚡</h2>
              <SidebarTrigger />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        disabled={item.disabled && !isLoggedIn}
                        className={item.disabled && !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""}
                      >
                        <Link href={item.url} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          {item.disabled && !isLoggedIn && (
                            <span className="text-xs text-muted-foreground ml-auto">Login required</span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">User Name</p>
                  <p className="text-xs text-muted-foreground">user@example.com</p>
                </div>
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsLoggedIn(true)}
              >
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            )}
          </SidebarFooter>
        </ShadcnSidebar>

        <main className="flex-1 overflow-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </SidebarProvider>
  );
}
