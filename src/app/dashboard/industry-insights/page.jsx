"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Star, DollarSign } from "lucide-react";
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

const industryData = {
  1: {
    'software developer': {
      marketOutlook: 'Growing rapidly',
      growthPercent: 25,
      demandLevel: 'High',
      topSkills: ['Python', 'JavaScript', 'React', 'Node.js'],
      salaryData: [
        { year: '2020', salary: 60000 },
        { year: '2021', salary: 65000 },
        { year: '2022', salary: 75000 },
        { year: '2023', salary: 85000 },
        { year: '2024', salary: 95000 },
      ]
    },
    'data scientist': {
      marketOutlook: 'Very High Demand',
      growthPercent: 35,
      demandLevel: 'Very High',
      topSkills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      salaryData: [
        { year: '2020', salary: 80000 },
        { year: '2021', salary: 90000 },
        { year: '2022', salary: 100000 },
        { year: '2023', salary: 115000 },
        { year: '2024', salary: 130000 },
      ]
    },
    'cloud architect': {
      marketOutlook: 'Strong Growth',
      growthPercent: 30,
      demandLevel: 'High',
      topSkills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      salaryData: [
        { year: '2020', salary: 90000 },
        { year: '2021', salary: 100000 },
        { year: '2022', salary: 115000 },
        { year: '2023', salary: 130000 },
        { year: '2024', salary: 150000 },
      ]
    },
    'cybersecurity': {
      marketOutlook: 'Critical Demand',
      growthPercent: 40,
      demandLevel: 'Very High',
      topSkills: ['Network Security', 'Ethical Hacking', 'CISSP', 'Penetration Testing'],
      salaryData: [
        { year: '2020', salary: 85000 },
        { year: '2021', salary: 95000 },
        { year: '2022', salary: 110000 },
        { year: '2023', salary: 125000 },
        { year: '2024', salary: 140000 },
      ]
    },
    'ui/ux': {
      marketOutlook: 'Growing',
      growthPercent: 20,
      demandLevel: 'Medium-High',
      topSkills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      salaryData: [
        { year: '2020', salary: 55000 },
        { year: '2021', salary: 60000 },
        { year: '2022', salary: 70000 },
        { year: '2023', salary: 80000 },
        { year: '2024', salary: 90000 },
      ]
    },
  },
  // Add data for other domains as needed
};

const getDemandColor = (level) => {
  switch (level) {
    case 'Very High': return 'bg-red-500';
    case 'High': return 'bg-orange-500';
    case 'Medium-High': return 'bg-yellow-500';
    case 'Medium': return 'bg-blue-500';
    default: return 'bg-gray-500';
  }
};

export default function IndustryInsights() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedSubdomain, setSelectedSubdomain] = useState(null);

  const handleDomainChange = (domainId) => {
    setSelectedDomain(parseInt(domainId));
    setSelectedSubdomain(null);
  };

  const handleSubdomainChange = (subdomain) => {
    setSelectedSubdomain(subdomain);
  };

  const selectedData = selectedDomain && selectedSubdomain ? industryData[selectedDomain]?.[selectedSubdomain] : null;

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Industry Insights</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

          {/* Subdomain Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Job Role</CardTitle>
              <CardDescription>Choose a specific role</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleSubdomainChange} disabled={!selectedDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a job role" />
                </SelectTrigger>
                <SelectContent>
                  {selectedDomain && industryData[selectedDomain] && Object.keys(industryData[selectedDomain]).map((role) => (
                    <SelectItem key={role} value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1).replace('_', ' ')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Industry Data Display */}
        {selectedData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Market Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{selectedData.marketOutlook}</div>
                  <p className="text-xs text-muted-foreground">
                    Growth: {selectedData.growthPercent}%
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold flex items-center gap-2">
                    {selectedData.demandLevel}
                    <div className={`w-3 h-3 rounded-full ${getDemandColor(selectedData.demandLevel)}`} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {selectedData.topSkills.slice(0, 2).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {selectedData.topSkills.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{selectedData.topSkills.length - 2} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Salary Range Graph */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Salary Trends (USD)
                </CardTitle>
                <CardDescription>Average salary progression over the years</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={selectedData.salaryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px'
                      }}
                    />
                    <Bar dataKey="salary" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* All Top Skills */}
            <Card>
              <CardHeader>
                <CardTitle>All Top Skills</CardTitle>
                <CardDescription>Essential skills for this role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedData.topSkills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
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
