"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { staggerContainer, staggerItem, hoverVariants, iconVariants } from "@/lib/animations";

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
    title: "Mock Test",
    icon: Target,
    url: "/dashboard/mock-test",
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
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ShadcnSidebar className="border-r border-border bg-gradient-to-b from-background to-muted/20">
            <SidebarHeader className="p-4">
              <motion.div
                className="flex items-center justify-between"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h2
                  className="text-lg font-semibold text-primary cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  FUTURE FORGE⚡
                </motion.h2>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <SidebarTrigger />
                </motion.div>
              </motion.div>
            </SidebarHeader>

            <SidebarContent>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <SidebarGroup>
                  <SidebarGroupLabel className="text-primary font-semibold">Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {menuItems.map((item, index) => (
                        <motion.div key={item.title} variants={staggerItem}>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              asChild
                              disabled={item.disabled && !isLoggedIn}
                              className={`group relative overflow-hidden ${
                                item.disabled && !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              <Link href={item.url} className="flex items-center gap-2 w-full">
                                <motion.div
                                  whileHover={{ scale: 1.2, rotate: 5 }}
                                  transition={{ duration: 0.2 }}
                                  className="relative"
                                >
                                  <item.icon className="h-4 w-4" />
                                </motion.div>
                                <motion.span
                                  whileHover={{ x: 2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {item.title}
                                </motion.span>
                                {item.disabled && !isLoggedIn && (
                                  <motion.span
                                    className="text-xs text-muted-foreground ml-auto"
                                    initial={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1 }}
                                  >
                                    Login required
                                  </motion.span>
                                )}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  layoutId="sidebarHover"
                                />
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </motion.div>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </motion.div>
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
        </motion.div>

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
