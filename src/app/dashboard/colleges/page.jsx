"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Building, GraduationCap, Wifi, Home, BookOpen, Microscope } from "lucide-react";
import Sidebar from "@/components/Sidebar";

// Mock data for colleges
const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology Madras",
    rank: 1,
    ownership: "Government",
    programs: ["Engineering", "Science", "Management"],
    facilities: ["Hostel", "Internet", "Lab", "Library"],
    location: "Chennai",
  },
  {
    id: 2,
    name: "Anna University",
    rank: 15,
    ownership: "Government",
    programs: ["Engineering", "Technology", "Architecture"],
    facilities: ["Hostel", "Internet", "Lab", "Library"],
    location: "Chennai",
  },
  {
    id: 3,
    name: "SRM Institute of Science and Technology",
    rank: 25,
    ownership: "Private",
    programs: ["Engineering", "Medicine", "Management"],
    facilities: ["Hostel", "Internet", "Lab", "Library"],
    location: "Chennai",
  },
  {
    id: 4,
    name: "VIT University",
    rank: 18,
    ownership: "Private",
    programs: ["Engineering", "Science", "Management"],
    facilities: ["Hostel", "Internet", "Lab", "Library"],
    location: "Vellore",
  },
];

const getFacilityIcon = (facility) => {
  switch (facility.toLowerCase()) {
    case 'hostel': return <Home className="w-4 h-4" />;
    case 'internet': return <Wifi className="w-4 h-4" />;
    case 'lab': return <Microscope className="w-4 h-4" />;
    case 'library': return <BookOpen className="w-4 h-4" />;
    default: return <Building className="w-4 h-4" />;
  }
};

export default function Colleges() {
  const [location, setLocation] = useState("");
  const [filteredColleges, setFilteredColleges] = useState(colleges);

  const handleSearch = () => {
    if (location.trim() === "") {
      setFilteredColleges(colleges);
    } else {
      const filtered = colleges.filter(college =>
        college.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredColleges(filtered);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Colleges</h1>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Colleges Near You</CardTitle>
            <CardDescription>Enter your city or district to find nearby colleges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter city/district (e.g., Chennai, Mumbai)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full"
                />
              </div>
              <Button onClick={handleSearch}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Colleges List */}
        <div className="space-y-6">
          {filteredColleges.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">No colleges found for the specified location.</p>
              </CardContent>
            </Card>
          ) : (
            filteredColleges.map((college) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5" />
                          {college.name}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-2">
                          <MapPin className="w-4 h-4" />
                          {college.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          Rank #{college.rank}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium">
                            {college.ownership}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Programs */}
                      <div>
                        <h4 className="font-semibold mb-2">Programs Offered</h4>
                        <div className="flex flex-wrap gap-1">
                          {college.programs.map((program, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Facilities */}
                      <div>
                        <h4 className="font-semibold mb-2">Facilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {college.facilities.map((facility, index) => (
                            <div key={index} className="flex items-center gap-1 text-sm text-muted-foreground">
                              {getFacilityIcon(facility)}
                              <span>{facility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </Sidebar>
  );
}
