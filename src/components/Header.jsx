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
import { ChevronDown, User, MessageCircle, FileText, Briefcase } from "lucide-react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo, set to false

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
          className="text-2xl font-bold text-primary"
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
              <DropdownMenuItem className="hover:bg-accent">
                <MessageCircle className="mr-2 h-4 w-4" />
                AI Chatbot
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent">
                <FileText className="mr-2 h-4 w-4" />
                Resume Builder
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent">
                <Briefcase className="mr-2 h-4 w-4" />
                Career Roadmap
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sign In / Avatar */}
          {isLoggedIn ? (
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ) : (
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsLoggedIn(true)}
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
