"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Upload, Sparkles } from "lucide-react";
import jsPDF from "jspdf";
import Sidebar from "@/components/Sidebar";

export default function Resume() {
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    education: {
      degree: "",
      institution: "",
      year: "",
      gpa: "",
    },
    experience: {
      jobTitle: "",
      company: "",
      duration: "",
      description: "",
    },
    skills: "",
    projects: "",
  });

  const [atsScore, setAtsScore] = useState(null);

  const handleInputChange = (section, field, value) => {
    setResumeData({
      ...resumeData,
      [section]: {
        ...resumeData[section],
        [field]: value,
      },
    });
  };

  const handleAIImprove = () => {
    // Mock AI improvement - in real implementation, call Gemini API
    alert("AI improvement feature would enhance your resume content using Gemini API");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;

    // Personal Info
    doc.setFontSize(16);
    doc.text(resumeData.personal.name || "Your Name", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(resumeData.personal.email || "email@example.com", 20, yPosition);
    yPosition += 10;
    doc.text(resumeData.personal.phone || "Phone Number", 20, yPosition);
    yPosition += 10;
    doc.text(resumeData.personal.location || "Location", 20, yPosition);
    yPosition += 20;

    // Education
    doc.setFontSize(14);
    doc.text("Education", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(`${resumeData.education.degree} - ${resumeData.education.institution}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Year: ${resumeData.education.year}, GPA: ${resumeData.education.gpa}`, 20, yPosition);
    yPosition += 20;

    // Experience
    doc.setFontSize(14);
    doc.text("Experience", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(`${resumeData.experience.jobTitle} at ${resumeData.experience.company}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Duration: ${resumeData.experience.duration}`, 20, yPosition);
    yPosition += 10;
    doc.text(resumeData.experience.description, 20, yPosition);
    yPosition += 20;

    // Skills
    doc.setFontSize(14);
    doc.text("Skills", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(resumeData.skills, 20, yPosition);
    yPosition += 20;

    // Projects
    doc.setFontSize(14);
    doc.text("Projects", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(resumeData.projects, 20, yPosition);

    doc.save("resume.pdf");
  };

  const handleATSUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Mock ATS analysis - in real implementation, analyze the PDF
      setAtsScore({
        score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        suggestions: [
          "Add more quantifiable achievements",
          "Include relevant keywords from job description",
          "Optimize file name and format",
        ],
      });
    }
  };

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>

        <Tabs defaultValue="builder" className="mb-6">
          <TabsList>
            <TabsTrigger value="builder">Resume Builder</TabsTrigger>
            <TabsTrigger value="ats">ATS Analyzer</TabsTrigger>
          </TabsList>

          <TabsContent value="builder">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Form */}
              <div className="space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Full Name"
                      value={resumeData.personal.name}
                      onChange={(e) => handleInputChange("personal", "name", e.target.value)}
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      value={resumeData.personal.email}
                      onChange={(e) => handleInputChange("personal", "email", e.target.value)}
                    />
                    <Input
                      placeholder="Phone"
                      value={resumeData.personal.phone}
                      onChange={(e) => handleInputChange("personal", "phone", e.target.value)}
                    />
                    <Input
                      placeholder="Location"
                      value={resumeData.personal.location}
                      onChange={(e) => handleInputChange("personal", "location", e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Education */}
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Degree"
                      value={resumeData.education.degree}
                      onChange={(e) => handleInputChange("education", "degree", e.target.value)}
                    />
                    <Input
                      placeholder="Institution"
                      value={resumeData.education.institution}
                      onChange={(e) => handleInputChange("education", "institution", e.target.value)}
                    />
                    <Input
                      placeholder="Year of Graduation"
                      value={resumeData.education.year}
                      onChange={(e) => handleInputChange("education", "year", e.target.value)}
                    />
                    <Input
                      placeholder="GPA"
                      value={resumeData.education.gpa}
                      onChange={(e) => handleInputChange("education", "gpa", e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Experience */}
                <Card>
                  <CardHeader>
                    <CardTitle>Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Job Title"
                      value={resumeData.experience.jobTitle}
                      onChange={(e) => handleInputChange("experience", "jobTitle", e.target.value)}
                    />
                    <Input
                      placeholder="Company"
                      value={resumeData.experience.company}
                      onChange={(e) => handleInputChange("experience", "company", e.target.value)}
                    />
                    <Input
                      placeholder="Duration"
                      value={resumeData.experience.duration}
                      onChange={(e) => handleInputChange("experience", "duration", e.target.value)}
                    />
                    <Textarea
                      placeholder="Job Description"
                      value={resumeData.experience.description}
                      onChange={(e) => handleInputChange("experience", "description", e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="List your skills (comma separated)"
                      value={resumeData.skills}
                      onChange={(e) => handleInputChange("skills", "skills", e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Projects */}
                <Card>
                  <CardHeader>
                    <CardTitle>Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Describe your projects"
                      value={resumeData.projects}
                      onChange={(e) => handleInputChange("projects", "projects", e.target.value)}
                    />
                  </CardContent>
                </Card>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button onClick={handleAIImprove}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Improve
                  </Button>
                  <Button onClick={exportToPDF}>
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </div>

              {/* Live Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Resume Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white text-black p-6 rounded-lg min-h-[600px]">
                    <h1 className="text-2xl font-bold mb-4">
                      {resumeData.personal.name || "Your Name"}
                    </h1>
                    <div className="mb-4 text-sm">
                      <p>{resumeData.personal.email || "email@example.com"}</p>
                      <p>{resumeData.personal.phone || "Phone Number"}</p>
                      <p>{resumeData.personal.location || "Location"}</p>
                    </div>

                    <h2 className="text-lg font-semibold mb-2">Education</h2>
                    <p className="mb-4">
                      {resumeData.education.degree} - {resumeData.education.institution}
                      <br />
                      Year: {resumeData.education.year}, GPA: {resumeData.education.gpa}
                    </p>

                    <h2 className="text-lg font-semibold mb-2">Experience</h2>
                    <p className="mb-4">
                      {resumeData.experience.jobTitle} at {resumeData.experience.company}
                      <br />
                      Duration: {resumeData.experience.duration}
                      <br />
                      {resumeData.experience.description}
                    </p>

                    <h2 className="text-lg font-semibold mb-2">Skills</h2>
                    <p className="mb-4">{resumeData.skills}</p>

                    <h2 className="text-lg font-semibold mb-2">Projects</h2>
                    <p>{resumeData.projects}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ats">
            <Card>
              <CardHeader>
                <CardTitle>ATS Resume Analyzer</CardTitle>
                <CardDescription>
                  Upload your resume PDF to get an ATS compatibility score and improvement suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="mb-4">Drag and drop your resume PDF here, or click to browse</p>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleATSUpload}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload">
                      <Button variant="outline" asChild>
                        <span>Choose File</span>
                      </Button>
                    </label>
                  </div>

                  {atsScore && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">{atsScore.score}/100</div>
                        <Badge variant={atsScore.score >= 80 ? "default" : "secondary"}>
                          {atsScore.score >= 80 ? "Good" : "Needs Improvement"}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Improvement Suggestions:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {atsScore.suggestions.map((suggestion, index) => (
                            <li key={index} className="text-sm">{suggestion}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </Sidebar>
  );
}
