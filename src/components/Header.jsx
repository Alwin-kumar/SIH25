"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { hoverVariants, staggerContainer, staggerItem, iconVariants } from "@/lib/animations";

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
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold text-primary cursor-pointer relative group"
          onClick={() => router.push("/")}
        >
          <motion.span
            className="inline-block"
            whileHover={{ textShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          >
            FUTURE FORGE⚡
          </motion.span>
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" className="text-foreground hover:text-primary group">
                  <motion.span
                    whileHover={{ x: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Tools
                  </motion.span>
                  <motion.div
                    animate={{ rotate: showUserMenu ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border p-2">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <DropdownMenuItem
                  className="hover:bg-accent cursor-pointer rounded-md p-3 group"
                  onClick={() => router.push("/dashboard/ai-chatbot")}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </motion.div>
                    <span>AI Chatbot</span>
                  </motion.div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-accent cursor-pointer rounded-md p-3 group"
                  onClick={() => router.push("/dashboard/resume")}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FileText className="h-4 w-4" />
                    </motion.div>
                    <span>Resume Builder</span>
                  </motion.div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-accent cursor-pointer rounded-md p-3 group"
                  onClick={() => router.push("/dashboard/career-roadmap")}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Briefcase className="h-4 w-4" />
                    </motion.div>
                    <span>Career Roadmap</span>
                  </motion.div>
                </DropdownMenuItem>
              </motion.div>
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
        </motion.nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden">
          <User className="h-6 w-6" />
        </Button>
      </div>
    </motion.header>
  );
}
