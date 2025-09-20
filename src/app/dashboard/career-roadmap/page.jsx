"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Star } from "lucide-react";
import Sidebar from "@/components/Sidebar";

// Mock data - will be replaced with database data
const domains = [
  { id: 1, name: 'IT & Software' },
  { id: 2, name: 'Education (EdTech)' },
  { id: 3, name: 'Healthcare' },
  { id: 4, name: 'Finance & Banking' },
  { id: 5, name: 'Manufacturing' },
  { id: 6, name: 'Agriculture' },
  { id: 7, name: 'Media' },
  { id: 8, name: 'Energy' },
  { id: 9, name: 'Transport' },
  { id: 10, name: 'Government' },
];

const jobRoles = {
  1: [
    { id: 1, name: 'Software Developer', requirements: 'Bachelor in CS, programming skills', topSkill: 'Python', courses: [
      { title: 'Python for Beginners', provider: 'Udemy', link: 'https://udemy.com/python', duration: '10 hours', isPaid: true },
      { title: 'JavaScript Fundamentals', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/js', duration: '8 hours', isPaid: false },
    ]},
    { id: 2, name: 'Data Scientist', requirements: 'Statistics, ML knowledge', topSkill: 'Python', courses: [
      { title: 'Data Science with Python', provider: 'Udemy', link: 'https://udemy.com/datascience', duration: '20 hours', isPaid: true },
    ]},
    { id: 3, name: 'Cloud Architect', requirements: 'Cloud computing knowledge', topSkill: 'AWS', courses: [
      { title: 'AWS Cloud Architecture', provider: 'Udemy', link: 'https://udemy.com/aws', duration: '15 hours', isPaid: true },
    ]},
    { id: 4, name: 'Cybersecurity Specialist', requirements: 'Security certifications', topSkill: 'Ethical Hacking', courses: [
      { title: 'Cybersecurity Fundamentals', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/cybersecurity', duration: '8 hours', isPaid: false },
    ]},
    { id: 5, name: 'UI/UX Designer', requirements: 'Design skills', topSkill: 'Figma', courses: [
      { title: 'UI/UX Design Principles', provider: 'Udemy', link: 'https://udemy.com/uiux', duration: '12 hours', isPaid: true },
    ]},
  ],
  2: [
    { id: 6, name: 'Teacher', requirements: 'Teaching degree', topSkill: 'Communication', courses: [
      { title: 'Effective Teaching Methods', provider: 'Udemy', link: 'https://udemy.com/teaching', duration: '14 hours', isPaid: true },
    ]},
    { id: 7, name: 'Instructional Designer', requirements: 'Education background', topSkill: 'eLearning', courses: [
      { title: 'Instructional Design Basics', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/id', duration: '10 hours', isPaid: false },
    ]},
    { id: 8, name: 'Education Technology Specialist', requirements: 'EdTech tools knowledge', topSkill: 'Learning Management Systems', courses: [
      { title: 'EdTech Tools and Platforms', provider: 'Udemy', link: 'https://udemy.com/edtech', duration: '16 hours', isPaid: true },
    ]},
    { id: 9, name: 'Academic Counselor', requirements: 'Psychology background', topSkill: 'Student Counseling', courses: [
      { title: 'Student Counseling Techniques', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/counseling', duration: '12 hours', isPaid: false },
    ]},
  ],
  3: [
    { id: 10, name: 'Doctor', requirements: 'MBBS degree, medical license', topSkill: 'Clinical Diagnosis', courses: [
      { title: 'Medical Diagnosis and Treatment', provider: 'Udemy', link: 'https://udemy.com/medical-diagnosis', duration: '25 hours', isPaid: true },
    ]},
    { id: 11, name: 'Nurse', requirements: 'Nursing degree', topSkill: 'Patient Care', courses: [
      { title: 'Advanced Nursing Practices', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/nursing', duration: '15 hours', isPaid: false },
    ]},
    { id: 12, name: 'Biomedical Engineer', requirements: 'Engineering background', topSkill: 'Medical Devices', courses: [
      { title: 'Biomedical Engineering Fundamentals', provider: 'Udemy', link: 'https://udemy.com/biomedical', duration: '18 hours', isPaid: true },
    ]},
    { id: 13, name: 'Medical Researcher', requirements: 'Research methodology', topSkill: 'Clinical Research', courses: [
      { title: 'Clinical Research Methods', provider: 'Udemy', link: 'https://udemy.com/clinical-research', duration: '20 hours', isPaid: true },
    ]},
    { id: 14, name: 'Public Health Specialist', requirements: 'Public health degree', topSkill: 'Epidemiology', courses: [
      { title: 'Public Health Management', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/public-health', duration: '14 hours', isPaid: false },
    ]},
  ],
  4: [
    { id: 15, name: 'Investment Banker', requirements: 'Finance degree, CFA preferred', topSkill: 'Financial Modeling', courses: [
      { title: 'Investment Banking Fundamentals', provider: 'Udemy', link: 'https://udemy.com/investment-banking', duration: '18 hours', isPaid: true },
    ]},
    { id: 16, name: 'Financial Analyst', requirements: 'Accounting knowledge', topSkill: 'Excel', courses: [
      { title: 'Financial Analysis and Modeling', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/financial-analysis', duration: '10 hours', isPaid: false },
    ]},
    { id: 17, name: 'Chartered Accountant', requirements: 'CA qualification', topSkill: 'Taxation', courses: [
      { title: 'Advanced Accounting Principles', provider: 'Udemy', link: 'https://udemy.com/accounting', duration: '22 hours', isPaid: true },
    ]},
    { id: 18, name: 'Risk Management Officer', requirements: 'Risk assessment skills', topSkill: 'Risk Analysis', courses: [
      { title: 'Financial Risk Management', provider: 'Udemy', link: 'https://udemy.com/risk-management', duration: '16 hours', isPaid: true },
    ]},
    { id: 19, name: 'FinTech Product Manager', requirements: 'Product management experience', topSkill: 'Digital Banking', courses: [
      { title: 'FinTech Product Development', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/fintech', duration: '12 hours', isPaid: false },
    ]},
  ],
  5: [
    { id: 20, name: 'Mechanical Engineer', requirements: 'Mechanical engineering degree', topSkill: 'CAD Design', courses: [
      { title: 'Mechanical Engineering Design', provider: 'Udemy', link: 'https://udemy.com/mechanical-design', duration: '20 hours', isPaid: true },
    ]},
    { id: 21, name: 'Quality Control Analyst', requirements: 'Quality management certification', topSkill: 'Six Sigma', courses: [
      { title: 'Quality Control and Assurance', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/quality-control', duration: '14 hours', isPaid: false },
    ]},
    { id: 22, name: 'Production Manager', requirements: 'Manufacturing experience', topSkill: 'Process Optimization', courses: [
      { title: 'Production Management', provider: 'Udemy', link: 'https://udemy.com/production-management', duration: '18 hours', isPaid: true },
    ]},
    { id: 23, name: 'Industrial Designer', requirements: 'Design background', topSkill: 'Product Design', courses: [
      { title: 'Industrial Design Principles', provider: 'Udemy', link: 'https://udemy.com/industrial-design', duration: '16 hours', isPaid: true },
    ]},
    { id: 24, name: 'Supply Chain Manager', requirements: 'Supply chain knowledge', topSkill: 'Logistics', courses: [
      { title: 'Supply Chain Management', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/supply-chain', duration: '15 hours', isPaid: false },
    ]},
  ],
  6: [
    { id: 25, name: 'Agricultural Scientist', requirements: 'Agriculture degree', topSkill: 'Crop Science', courses: [
      { title: 'Modern Agriculture Techniques', provider: 'Udemy', link: 'https://udemy.com/agriculture', duration: '16 hours', isPaid: true },
    ]},
    { id: 26, name: 'Food Technologist', requirements: 'Food science background', topSkill: 'Food Processing', courses: [
      { title: 'Food Technology and Processing', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/food-tech', duration: '12 hours', isPaid: false },
    ]},
    { id: 27, name: 'Agribusiness Manager', requirements: 'Business management skills', topSkill: 'Farm Management', courses: [
      { title: 'Agribusiness Management', provider: 'Udemy', link: 'https://udemy.com/agribusiness', duration: '18 hours', isPaid: true },
    ]},
    { id: 28, name: 'Soil Conservationist', requirements: 'Environmental science', topSkill: 'Soil Management', courses: [
      { title: 'Soil Conservation Techniques', provider: 'Udemy', link: 'https://udemy.com/soil-conservation', duration: '14 hours', isPaid: true },
    ]},
    { id: 29, name: 'Agricultural Equipment Engineer', requirements: 'Engineering background', topSkill: 'Farm Machinery', courses: [
      { title: 'Agricultural Engineering', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/agri-engineering', duration: '16 hours', isPaid: false },
    ]},
  ],
  7: [
    { id: 30, name: 'Journalist', requirements: 'Mass communication degree', topSkill: 'News Writing', courses: [
      { title: 'Journalism and News Writing', provider: 'Udemy', link: 'https://udemy.com/journalism', duration: '15 hours', isPaid: true },
    ]},
    { id: 31, name: 'Graphic Designer', requirements: 'Design software skills', topSkill: 'Adobe Creative Suite', courses: [
      { title: 'Graphic Design Fundamentals', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/graphic-design', duration: '12 hours', isPaid: false },
    ]},
    { id: 32, name: 'Video Editor', requirements: 'Video editing software', topSkill: 'Video Production', courses: [
      { title: 'Professional Video Editing', provider: 'Udemy', link: 'https://udemy.com/video-editing', duration: '18 hours', isPaid: true },
    ]},
    { id: 33, name: 'Social Media Manager', requirements: 'Digital marketing knowledge', topSkill: 'Content Strategy', courses: [
      { title: 'Social Media Marketing', provider: 'Udemy', link: 'https://udemy.com/social-media', duration: '14 hours', isPaid: true },
    ]},
    { id: 34, name: 'Game Developer', requirements: 'Programming and design skills', topSkill: 'Unity/Unreal Engine', courses: [
      { title: 'Game Development Fundamentals', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/game-dev', duration: '20 hours', isPaid: false },
    ]},
  ],
  8: [
    { id: 35, name: 'Renewable Energy Engineer', requirements: 'Engineering degree', topSkill: 'Solar/Wind Technology', courses: [
      { title: 'Renewable Energy Systems', provider: 'Udemy', link: 'https://udemy.com/renewable-energy', duration: '20 hours', isPaid: true },
    ]},
    { id: 36, name: 'Energy Consultant', requirements: 'Energy management knowledge', topSkill: 'Energy Auditing', courses: [
      { title: 'Energy Management and Consulting', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/energy-consulting', duration: '14 hours', isPaid: false },
    ]},
    { id: 37, name: 'Geologist', requirements: 'Geology degree', topSkill: 'Geological Survey', courses: [
      { title: 'Applied Geology', provider: 'Udemy', link: 'https://udemy.com/geology', duration: '16 hours', isPaid: true },
    ]},
    { id: 38, name: 'Environmental Officer', requirements: 'Environmental science', topSkill: 'Environmental Compliance', courses: [
      { title: 'Environmental Management', provider: 'Udemy', link: 'https://udemy.com/environmental-management', duration: '15 hours', isPaid: true },
    ]},
    { id: 39, name: 'Sustainability Manager', requirements: 'Sustainability certification', topSkill: 'Green Technologies', courses: [
      { title: 'Sustainability and Green Energy', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/sustainability', duration: '18 hours', isPaid: false },
    ]},
  ],
  9: [
    { id: 40, name: 'Civil Engineer', requirements: 'Civil engineering degree', topSkill: 'Infrastructure Design', courses: [
      { title: 'Civil Engineering Fundamentals', provider: 'Udemy', link: 'https://udemy.com/civil-engineering', duration: '22 hours', isPaid: true },
    ]},
    { id: 41, name: 'Logistics Coordinator', requirements: 'Supply chain knowledge', topSkill: 'Transportation Management', courses: [
      { title: 'Logistics and Supply Chain', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/logistics', duration: '16 hours', isPaid: false },
    ]},
    { id: 42, name: 'Commercial Pilot', requirements: 'Pilot license', topSkill: 'Aircraft Operation', courses: [
      { title: 'Aviation Management', provider: 'Udemy', link: 'https://udemy.com/aviation', duration: '25 hours', isPaid: true },
    ]},
    { id: 43, name: 'Shipping Manager', requirements: 'Maritime knowledge', topSkill: 'Maritime Operations', courses: [
      { title: 'Shipping and Maritime Management', provider: 'Udemy', link: 'https://udemy.com/shipping', duration: '18 hours', isPaid: true },
    ]},
    { id: 44, name: 'Warehouse Manager', requirements: 'Operations management', topSkill: 'Inventory Management', courses: [
      { title: 'Warehouse Operations', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/warehouse', duration: '14 hours', isPaid: false },
    ]},
  ],
  10: [
    { id: 45, name: 'IAS/IPS/IFS Officer', requirements: 'UPSC examination', topSkill: 'Public Administration', courses: [
      { title: 'UPSC Civil Services Preparation', provider: 'Udemy', link: 'https://udemy.com/upsc', duration: '30 hours', isPaid: true },
    ]},
    { id: 46, name: 'Government Teacher', requirements: 'Teaching certification', topSkill: 'Subject Expertise', courses: [
      { title: 'Government Teaching Methods', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/gov-teaching', duration: '15 hours', isPaid: false },
    ]},
    { id: 47, name: 'Defense Officer', requirements: 'NDA/CDS examination', topSkill: 'Military Strategy', courses: [
      { title: 'Defense Services Preparation', provider: 'Udemy', link: 'https://udemy.com/defense', duration: '20 hours', isPaid: true },
    ]},
    { id: 48, name: 'PSU Banker', requirements: 'Banking exams', topSkill: 'Banking Operations', courses: [
      { title: 'Public Sector Banking', provider: 'Udemy', link: 'https://udemy.com/psu-banking', duration: '16 hours', isPaid: true },
    ]},
    { id: 49, name: 'Policy Analyst', requirements: 'Public policy degree', topSkill: 'Policy Research', courses: [
      { title: 'Public Policy Analysis', provider: 'Infosys Springboard', link: 'https://springboard.infosys.com/policy-analysis', duration: '18 hours', isPaid: false },
    ]},
  ],
};

export default function CareerRoadmap() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedJobRole, setSelectedJobRole] = useState(null);

  const handleDomainChange = (domainId) => {
    setSelectedDomain(parseInt(domainId));
    setSelectedJobRole(null);
  };

  const handleJobRoleChange = (jobRoleId) => {
    setSelectedJobRole(parseInt(jobRoleId));
  };

  const selectedJobRoleData = selectedJobRole ? jobRoles[selectedDomain]?.find(role => role.id === selectedJobRole) : null;

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Career Roadmap</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Domain Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Domain</CardTitle>
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
                      {domain.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Job Role Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Job Role</CardTitle>
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
                      {role.name}
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
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {selectedJobRoleData.name}
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Top Skill: {selectedJobRoleData.topSkill}
                  </Badge>
                </CardTitle>
                <CardDescription>{selectedJobRoleData.requirements}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">Recommended Courses</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedJobRoleData.courses.map((course, index) => (
                    <Card key={index} className="border-muted">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base flex items-center justify-between">
                          {course.title}
                          <Badge variant={course.isPaid ? "default" : "secondary"}>
                            {course.isPaid ? "Paid" : "Free"}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {course.provider} • {course.duration}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button variant="outline" size="sm" asChild>
                          <a href={course.link} target="_blank" rel="noopener noreferrer">
                            View Course
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </Sidebar>
  );
}
