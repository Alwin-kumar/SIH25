"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Star, CheckCircle, Clock, BookOpen, Target, TrendingUp, Award, Users, Briefcase } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/contexts/AuthContext";

// Enhanced mock data with more comprehensive information
const domains = [
  { id: 1, name: 'IT & Software', icon: '💻', color: 'bg-blue-500' },
  { id: 2, name: 'Education (EdTech)', icon: '🎓', color: 'bg-green-500' },
  { id: 3, name: 'Healthcare', icon: '🏥', color: 'bg-red-500' },
  { id: 4, name: 'Finance & Banking', icon: '💰', color: 'bg-yellow-500' },
  { id: 5, name: 'Manufacturing', icon: '🏭', color: 'bg-purple-500' },
  { id: 6, name: 'Agriculture', icon: '🌾', color: 'bg-orange-500' },
  { id: 7, name: 'Media', icon: '📺', color: 'bg-pink-500' },
  { id: 8, name: 'Energy', icon: '⚡', color: 'bg-indigo-500' },
  { id: 9, name: 'Transport', icon: '🚗', color: 'bg-teal-500' },
  { id: 10, name: 'Government', icon: '🏛️', color: 'bg-gray-500' },
];

const jobRoles = {
  1: [
    {
      id: 1,
      name: 'Software Developer',
      requirements: 'Bachelor in CS, programming skills',
      topSkill: 'Python',
      salary: '₹4-8 LPA',
      growth: 'High',
      courses: [
        { title: 'Python for Beginners', provider: 'Udemy', link: 'https://udemy.com/python', duration: '10 hours', isPaid: true, difficulty: 'Beginner', rating: 4.5 },
        { title: 'JavaScript Fundamentals', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/js', duration: '8 hours', isPaid: false, difficulty: 'Beginner', rating: 4.3 },
        { title: 'Advanced React Development', provider: 'Coursera', link: 'https://coursera.org/react', duration: '20 hours', isPaid: true, difficulty: 'Advanced', rating: 4.7 },
      ]
    },
    {
      id: 2,
      name: 'Data Scientist',
      requirements: 'Statistics, ML knowledge',
      topSkill: 'Python',
      salary: '₹6-12 LPA',
      growth: 'Very High',
      courses: [
        { title: 'Data Science with Python', provider: 'Udemy', link: 'https://udemy.com/datascience', duration: '20 hours', isPaid: true, difficulty: 'Intermediate', rating: 4.6 },
        { title: 'Machine Learning A-Z', provider: 'Udemy', link: 'https://udemy.com/ml', duration: '40 hours', isPaid: true, difficulty: 'Advanced', rating: 4.8 },
      ]
    },
    {
      id: 3,
      name: 'Cloud Architect',
      requirements: 'Cloud computing knowledge',
      topSkill: 'AWS',
      salary: '₹8-15 LPA',
      growth: 'Very High',
      courses: [
        { title: 'AWS Cloud Architecture', provider: 'Udemy', link: 'https://udemy.com/aws', duration: '15 hours', isPaid: true, difficulty: 'Advanced', rating: 4.7 },
        { title: 'Azure Fundamentals', provider: 'Microsoft Learn', link: 'https://learn.microsoft.com/azure', duration: '12 hours', isPaid: false, difficulty: 'Intermediate', rating: 4.4 },
      ]
    },
    {
      id: 4,
      name: 'Cybersecurity Specialist',
      requirements: 'Security certifications',
      topSkill: 'Ethical Hacking',
      salary: '₹5-10 LPA',
      growth: 'High',
      courses: [
        { title: 'Cybersecurity Fundamentals', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/cybersecurity', duration: '8 hours', isPaid: false, difficulty: 'Beginner', rating: 4.2 },
        { title: 'CEH Certification Prep', provider: 'Udemy', link: 'https://udemy.com/ceh', duration: '25 hours', isPaid: true, difficulty: 'Advanced', rating: 4.6 },
      ]
    },
    {
      id: 5,
      name: 'UI/UX Designer',
      requirements: 'Design skills',
      topSkill: 'Figma',
      salary: '₹4-8 LPA',
      growth: 'High',
      courses: [
        { title: 'UI/UX Design Principles', provider: 'Udemy', link: 'https://udemy.com/uiux', duration: '12 hours', isPaid: true, difficulty: 'Beginner', rating: 4.5 },
        { title: 'Advanced Figma', provider: 'Figma Learn', link: 'https://figma.com/learn', duration: '6 hours', isPaid: false, difficulty: 'Intermediate', rating: 4.3 },
      ]
    },
  ],
  // Add more job roles for other domains...
};

export default function CareerRoadmap() {
  const { user } = useAuth();
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedJobRole, setSelectedJobRole] = useState(null);
  const [completedCourses, setCompletedCourses] = useState(new Set());
  const [careerProgress, setCareerProgress] = useState(0);

  const handleDomainChange = (domainId) => {
    setSelectedDomain(parseInt(domainId));
    setSelectedJobRole(null);
  };

  const handleJobRoleChange = (jobRoleId) => {
    setSelectedJobRole(parseInt(jobRoleId));
  };

  const toggleCourseCompletion = (courseId) => {
    const newCompleted = new Set(completedCourses);
    if (newCompleted.has(courseId)) {
      newCompleted.delete(courseId);
    } else {
      newCompleted.add(courseId);
    }
    setCompletedCourses(newCompleted);

    // Update career progress
    const selectedRole = selectedJobRoleData;
    if (selectedRole) {
      const progress = (newCompleted.size / selectedRole.courses.length) * 100;
      setCareerProgress(progress);
    }
  };

  const selectedJobRoleData = selectedJobRole ? jobRoles[selectedDomain]?.find(role => role.id === selectedJobRole) : null;

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`career-progress-${user?.email}`);
    if (savedProgress) {
      setCompletedCourses(new Set(JSON.parse(savedProgress)));
    }
  }, [user]);

  // Save progress to localStorage
  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(`career-progress-${user.email}`, JSON.stringify([...completedCourses]));
    }
  }, [completedCourses, user]);

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Career Roadmap</h1>
          {selectedJobRoleData && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Career Progress</p>
                <div className="flex items-center gap-2">
                  <Progress value={careerProgress} className="w-24" />
                  <span className="text-sm font-medium">{Math.round(careerProgress)}%</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Domain Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Select Domain
              </CardTitle>
              <CardDescription>Choose your area of interest</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleDomainChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a domain" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map((domain) => (
                    <SelectItem key={domain.id} value={domain.id.toString()}>
                      <div className="flex items-center gap-2">
                        <span>{domain.icon}</span>
                        {domain.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Job Role Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Select Job Role
              </CardTitle>
              <CardDescription>Choose your desired career path</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleJobRoleChange} disabled={!selectedDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a job role" />
                </SelectTrigger>
                <SelectContent>
                  {selectedDomain && jobRoles[selectedDomain]?.map((role) => (
                    <SelectItem key={role.id} value={role.id.toString()}>
                      <div className="flex items-center justify-between w-full">
                        <span>{role.name}</span>
                        <Badge variant="outline" className="ml-2">
                          {role.growth}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Job Role Details */}
        {selectedJobRoleData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Career Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  {selectedJobRoleData.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-4">
                  <span>{selectedJobRoleData.requirements}</span>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Top Skill: {selectedJobRoleData.topSkill}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-medium text-blue-800">Salary Range</p>
                    <p className="text-lg font-bold text-blue-900">{selectedJobRoleData.salary}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Target className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium text-green-800">Growth Potential</p>
                    <p className="text-lg font-bold text-green-900">{selectedJobRoleData.growth}</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Users className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm font-medium text-purple-800">Job Market</p>
                    <p className="text-lg font-bold text-purple-900">Active</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Recommended Courses
                </CardTitle>
                <CardDescription>
                  Complete these courses to build your skills for {selectedJobRoleData.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedJobRoleData.courses.map((course, index) => {
                    const courseId = `${selectedJobRoleData.id}-${index}`;
                    const isCompleted = completedCourses.has(courseId);

                    return (
                      <Card key={index} className={`border-muted transition-all ${isCompleted ? 'bg-green-50 border-green-200' : ''}`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-base flex items-center gap-2">
                                {course.title}
                                {isCompleted && <CheckCircle className="h-4 w-4 text-green-600" />}
                              </CardTitle>
                              <CardDescription className="text-sm mt-1">
                                {course.provider} • {course.duration}
                              </CardDescription>
                            </div>
                            <div className="flex flex-col gap-1">
                              <Badge variant={course.isPaid ? "default" : "secondary"}>
                                {course.isPaid ? "Paid" : "Free"}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {course.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span className="text-sm text-gray-600">{course.rating}</span>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant={isCompleted ? "outline" : "default"}
                                size="sm"
                                onClick={() => toggleCourseCompletion(courseId)}
                              >
                                {isCompleted ? (
                                  <>
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Completed
                                  </>
                                ) : (
                                  <>
                                    <Clock className="w-3 h-3 mr-1" />
                                    Mark Complete
                                  </>
                                )}
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(course.link, '_blank', 'noopener,noreferrer')}
                              >
                                <ExternalLink className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </Sidebar>
  );
}
