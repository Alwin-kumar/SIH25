"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User, MessageCircle, FileText, Briefcase, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, isAuthenticated, signOut } = useAuth();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => router.push("/")}
        >
          FUTURE FORGE⚡
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border">
              <DropdownMenuItem
                className="hover:bg-accent cursor-pointer"
                onClick={() => router.push("/dashboard/ai-chatbot")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                AI Chatbot
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-accent cursor-pointer"
                onClick={() => router.push("/dashboard/resume")}
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume Builder
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-accent cursor-pointer"
                onClick={() => router.push("/dashboard/career-roadmap")}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Career Roadmap
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sign In / Avatar */}
          {isAuthenticated ? (
            <DropdownMenu open={showUserMenu} onOpenChange={setShowUserMenu}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%233B82F6'/%3E%3Ccircle cx='20' cy='15' r='6' fill='white'/%3E%3Cpath d='M8 32c0-8 4-12 12-12s12 4 12 12' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E"
                      alt={user?.name || "User"}
                    />
                    <AvatarFallback>
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border" align="end">
                <DropdownMenuItem
                  className="hover:bg-accent cursor-pointer"
                  onClick={() => router.push("/dashboard/profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-accent cursor-pointer"
                  onClick={() => router.push("/dashboard/career-roadmap")}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Career Roadmap
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-accent cursor-pointer"
                  onClick={() => signOut()}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => router.push("/auth/signin")}
            >
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden">
          <User className="h-6 w-6" />
        </Button>
      </div>
    </motion.header>
  );
}
