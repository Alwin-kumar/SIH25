"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/Sidebar";
import {
  MapPin,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Target,
  FileText,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Clock
} from "lucide-react";
import Link from "next/link";

const dashboardFeatures = [
  {
    title: "Career Roadmap",
    description: "Explore domains, subdomains, and job roles with detailed requirements",
    icon: MapPin,
    href: "/dashboard/career-roadmap",
    color: "from-blue-500 to-cyan-500",
    status: "Available"
  },
  {
    title: "Industry Insights",
    description: "Get market outlook, growth rates, and salary ranges",
    icon: TrendingUp,
    href: "/dashboard/industry-insights",
    color: "from-green-500 to-emerald-500",
    status: "Available"
  },
  {
    title: "Courses",
    description: "Access free Infosys Springboard and paid Udemy courses",
    icon: BookOpen,
    href: "/dashboard/courses",
    color: "from-purple-500 to-pink-500",
    status: "Available"
  },
  {
    title: "Colleges",
    description: "Find nearby colleges with rankings and facilities",
    icon: GraduationCap,
    href: "/dashboard/colleges",
    color: "from-orange-500 to-red-500",
    status: "Available"
  },
  {
    title: "Interview Prep",
    description: "Practice programming and aptitude tests",
    icon: Target,
    href: "/dashboard/interview-prep",
    color: "from-indigo-500 to-blue-500",
    status: "Available"
  },
  {
    title: "Resume Builder",
    description: "Create ATS-friendly resumes with AI improvement",
    icon: FileText,
    href: "/dashboard/resume",
    color: "from-teal-500 to-green-500",
    status: "Available"
  },
  {
    title: "AI Chatbot",
    description: "Get career advice and education guidance",
    icon: MessageCircle,
    href: "/dashboard/ai-chatbot",
    color: "from-pink-500 to-rose-500",
    status: "Available"
  },
];

const stats = [
  { label: "Career Paths ", value: "25K+", icon: MapPin },
  { label: "Job Placement Rate", value: "89%", icon: Award },
  { label: "Skills Enhanced", value: "150K+", icon: Target },
];

export default function Dashboard() {
  return (
    <Sidebar>
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dashboard
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered career companion. Explore tools, insights, and resources to accelerate your professional journey.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Available Tools</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {dashboardFeatures.length} Tools
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={feature.href}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-border/50 hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white w-fit`}>
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {feature.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm mb-4">
                        {feature.description}
                      </CardDescription>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Explore
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Start Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="font-medium text-foreground">🎯 Getting Started:</p>
              <ul className="space-y-1 ml-4">
                <li>• Choose your career domain</li>
                <li>• Explore industry insights</li>
                <li>• Build your resume</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-foreground">💡 Pro Tips:</p>
              <ul className="space-y-1 ml-4">
                <li>• Use AI chatbot for guidance</li>
                <li>• Practice interview questions</li>
                <li>• Explore available courses</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Sidebar>
  );
}
