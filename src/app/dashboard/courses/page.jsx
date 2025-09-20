"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Sidebar from "@/components/Sidebar";

// Mock data for courses
const freeCourses = [
  {
    title: "Introduction to Python",
    provider: "Infosys Springboard",
    link: "https://springboard.infosys.com/python",
    duration: "8 hours",
  },
  {
    title: "JavaScript Basics",
    provider: "Infosys Springboard",
    link: "https://springboard.infosys.com/js",
    duration: "10 hours",
  },
];

const paidCourses = [
  {
    title: "Complete Python Bootcamp",
    provider: "Udemy",
    link: "https://udemy.com/python-bootcamp",
    duration: "20 hours",
  },
  {
    title: "Advanced JavaScript",
    provider: "Udemy",
    link: "https://udemy.com/advanced-js",
    duration: "15 hours",
  },
];

export default function Courses() {
  const [tabValue, setTabValue] = useState("free");

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Courses</h1>

        <Tabs value={tabValue} onValueChange={setTabValue} className="mb-6">
          <TabsList>
            <TabsTrigger value="free">Free (Infosys Springboard)</TabsTrigger>
            <TabsTrigger value="paid">Paid (Udemy)</TabsTrigger>
          </TabsList>

          <TabsContent value="free">
            <div className="grid md:grid-cols-2 gap-6">
              {freeCourses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      {course.provider} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <a href={course.link} target="_blank" rel="noopener noreferrer">
                        View Course <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paid">
            <div className="grid md:grid-cols-2 gap-6">
              {paidCourses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      {course.provider} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <a href={course.link} target="_blank" rel="noopener noreferrer">
                        View Course <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </Sidebar>
  );
}
