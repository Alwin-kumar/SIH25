"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, BookOpen, Youtube, GraduationCap } from "lucide-react";
import Sidebar from "@/components/Sidebar";

// Mock data for courses
const freeCourses = [
  {
    title: "Introduction to Python",
    provider: "Infosys Springboard",
    link: "https://springboard.infosys.com/python",
    duration: "8 hours",
    type: "platform"
  },
  {
    title: "JavaScript Basics",
    provider: "Infosys Springboard",
    link: "https://springboard.infosys.com/js",
    duration: "10 hours",
    type: "platform"
  },
  {
    title: "Python for Beginners",
    provider: "freeCodeCamp",
    link: "https://youtube.com/watch?v=rfscVS0vtbw",
    duration: "4 hours",
    type: "youtube"
  },
  {
    title: "Complete Java Tutorial",
    provider: "Programming with Mosh",
    link: "https://youtube.com/watch?v=eIrMbAQSU34",
    duration: "6 hours",
    type: "youtube"
  },
];

const paidCourses = [
  {
    title: "Complete Python Bootcamp",
    provider: "Udemy",
    link: "https://udemy.com/python-bootcamp",
    duration: "20 hours",
    type: "platform"
  },
  {
    title: "Advanced JavaScript",
    provider: "Udemy",
    link: "https://udemy.com/advanced-js",
    duration: "15 hours",
    type: "platform"
  },
  {
    title: "React - The Complete Guide",
    provider: "Udemy",
    link: "https://udemy.com/react-complete-guide",
    duration: "40 hours",
    type: "platform"
  },
  {
    title: "Full Stack Web Development",
    provider: "Udemy",
    link: "https://udemy.com/fullstack-web-dev",
    duration: "60 hours",
    type: "platform"
  },
  {
    title: "The Web Developer Bootcamp",
    provider: "Udemy",
    link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    duration: "55 hours",
    type: "platform"
  },
  {
    title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
    provider: "Udemy",
    link: "https://www.udemy.com/course/machinelearning/",
    duration: "44.5 hours",
    type: "platform"
  },
  {
    title: "iOS 13 & Swift 5: The Complete iOS App Development Bootcamp",
    provider: "Udemy",
    link: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
    duration: "59 hours",
    type: "platform"
  },
];

const nptelCourses = [
  {
    title: "Programming in Java",

    provider: "NPTEL (IIT Kharagpur)",
    link: "https://nptel.ac.in/courses/106/105/106105225/",
    duration: "12 weeks",
    type: "nptel"
  },
  {
    title: "Data Structures and Algorithms",
    provider: "NPTEL (IIT Delhi)",
    link: "https://nptel.ac.in/courses/106/102/106102064/",
    duration: "12 weeks",
    type: "nptel"
  },
  {
    title: "Python for Data Science",
    provider: "NPTEL (IIT Madras)",
    link: "https://nptel.ac.in/courses/106/106/106106212/",
    duration: "12 weeks",
    type: "nptel"
  },
  {
    title: "Web Development",
    provider: "NPTEL (IIT Bombay)",
    link: "https://nptel.ac.in/courses/106/106/106106156/",
    duration: "8 weeks",
    type: "nptel"
  },
  {
    title: "Cloud Computing",
    provider: "NPTEL (IIT Roorkee)",
    link: "https://nptel.ac.in/courses/106/104/106104182/",
    duration: "12 weeks",
    type: "nptel"
  },
  {
    title: "Deep Learning",
    provider: "NPTEL (IIT Hyderabad)",
    link: "https://nptel.ac.in/courses/106/105/106105215/",
    duration: "12 weeks",
    type: "nptel"
  },
   {
    title: "BlockChain Architecture Design and Use Cases",
    provider: "NPTEL (IIT Madras)",
    link: "https://nptel.ac.in/courses/106/105/106105184/",
    duration: "8 weeks",
    type: "nptel"
  },
];

const youtubeCourses = [
  {
    title: "CS50's Introduction to Computer Science",

    provider: "Harvard University",
    link: "https://youtube.com/playlist?list=PLhQjrBD2T382VRUw5ZpSxDlzlfGP-ebSX",
    duration: "12 weeks",
    type: "youtube"
  },
  {
    title: "The Complete Python Course",
    provider: "Clever Programmer",
    link: "https://youtube.com/watch?v=JJmcL1N2KQs",
    duration: "5 hours",
    type: "youtube"
  },
  {
    title: "JavaScript Full Course",
    provider: "Bro Code",
    link: "https://youtube.com/watch?v=lI1ae4REbFM",
    duration: "12 hours",
    type: "youtube"
  },
  {
    title: "React Tutorial for Beginners",
    provider: "Programming with Mosh",
    link: "https://youtube.com/watch?v=SqcY0GlETPk",
    duration: "6 hours",
    type: "youtube"
  },
  {
    title: "Learn Flutter - Full Course for Beginners",
    provider: "freeCodeCamp.org",
    link: "https://www.youtube.com/watch?v=x0uinJvhNxI",
    duration: "11 hours",
    type: "youtube"
  },
  {
    title: "C++ Tutorial for Beginners - Full Course",
    provider: "freeCodeCamp.org",
    link: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
    duration: "4.5 hours",
    type: "youtube"
  },
  {
   title: "Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer",
   provider: "freeCodeCamp.org",
   link: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
   duration: "9 hours",
   type: "youtube"
  },
];

const getCourseIcon = (type) => {
  switch (type) {

    case 'youtube':
      return <Youtube className="w-4 h-4" />;
    case 'nptel':
      return <GraduationCap className="w-4 h-4" />;
    case 'platform':
      return <BookOpen className="w-4 h-4" />;
    default:
      return <Play className="w-4 h-4" />;
  }
};

const getProviderColor = (type) => {
  switch (type) {
    case 'youtube':
      return 'bg-red-500';
    case 'nptel':
      return 'bg-blue-600';
    case 'platform':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

export default function Courses() {
  const [tabValue, setTabValue] = useState("free");

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Courses &amp; Learning Resources</h1>

        <Tabs value={tabValue} onValueChange={setTabValue} className="mb-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="free">Free Platform</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="nptel">NPTEL</TabsTrigger>
            <TabsTrigger value="paid">Paid Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="free">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Free Platform Courses</h3>
              <p className="text-gray-600 dark:text-gray-400">Courses from Infosys Springboard and freeCodeCamp</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {freeCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {getCourseIcon(course.type)}
                        {course.title}
                      </CardTitle>
                      <Badge className={getProviderColor(course.type)}>
                        {course.type}
                      </Badge>
                    </div>
                    <CardDescription>
                      {course.provider} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="flex items-center">
                          View Course <ExternalLink className="w-4 h-4 ml-1" />
                        </span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="youtube">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">YouTube Learning Resources</h3>
              <p className="text-gray-600 dark:text-gray-400">Free video courses from top educators and universities</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {youtubeCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {getCourseIcon(course.type)}
                        {course.title}
                      </CardTitle>
                      <Badge className={getProviderColor(course.type)}>
                        {course.type}
                      </Badge>
                    </div>
                    <CardDescription>
                      {course.provider} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="flex items-center">
                          Watch Now <ExternalLink className="w-4 h-4 ml-1" />
                        </span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nptel">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">NPTEL Courses</h3>
              <p className="text-gray-600 dark:text-gray-400">Quality courses from IIT professors and industry experts</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {nptelCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {getCourseIcon(course.type)}
                        {course.title}
                      </CardTitle>
                      <Badge className={getProviderColor(course.type)}>
                        {course.type}
                      </Badge>
                    </div>
                    <CardDescription>
                      {course.provider} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="flex items-center">
                          Start Learning <ExternalLink className="w-4 h-4 ml-1" />
                        </span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paid">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Paid Professional Courses</h3>
              <p className="text-gray-600 dark:text-gray-400">Comprehensive courses with certificates and lifetime access</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {paidCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {getCourseIcon(course.type)}
                        {course.title}
                      </CardTitle>
                      <Badge className={getProviderColor(course.type)}>
                        {course.type}
                      </Badge>
                    </div>
                    <CardDescription>
                      {course.provider} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="flex items-center">
                          View Course <ExternalLink className="w-4 h-4 ml-1" />
                        </span>
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
