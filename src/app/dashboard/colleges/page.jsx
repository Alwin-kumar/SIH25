"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Building, GraduationCap, Wifi, Home, BookOpen, Microscope, Users, Award, Globe } from "lucide-react";
import Sidebar from "@/components/Sidebar";

// Enhanced mock data for colleges across India
const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology Madras",
    rank: 1,
    ownership: "Government",
    type: "IIT",
    programs: ["Engineering", "Science", "Management", "Design"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Medical Center"],
    location: "Chennai, Tamil Nadu",
    established: 1959,
    accreditation: "NAAC A++",
    website: "www.iitm.ac.in",
    rating: 4.8,
    students: "10,000+",
    description: "Premier engineering institute known for research and innovation."
  },
  {
    id: 2,
    name: "Indian Institute of Technology Delhi",
    rank: 2,
    ownership: "Government",
    type: "IIT",
    programs: ["Engineering", "Science", "Management", "Humanities"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Medical Center", "Auditorium"],
    location: "New Delhi",
    established: 1961,
    accreditation: "NAAC A++",
    website: "www.iitd.ac.in",
    rating: 4.7,
    students: "12,000+",
    description: "Leading technical institution with excellent placement records."
  },
  {
    id: 3,
    name: "Indian Institute of Technology Bombay",
    rank: 3,
    ownership: "Government",
    type: "IIT",
    programs: ["Engineering", "Science", "Management", "Design", "Arts"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Medical Center", "Innovation Hub"],
    location: "Mumbai, Maharashtra",
    established: 1958,
    accreditation: "NAAC A++",
    website: "www.iitb.ac.in",
    rating: 4.9,
    students: "11,000+",
    description: "Asia's top engineering college with world-class facilities."
  },
  {
    id: 4,
    name: "Anna University",
    rank: 15,
    ownership: "Government",
    type: "State University",
    programs: ["Engineering", "Technology", "Architecture", "Planning"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex"],
    location: "Chennai, Tamil Nadu",
    established: 1978,
    accreditation: "NAAC A++",
    website: "www.annauniv.edu",
    rating: 4.3,
    students: "18,000+",
    description: "Largest technical university in Tamil Nadu."
  },
  {
    id: 5,
    name: "SRM Institute of Science and Technology",
    rank: 25,
    ownership: "Private",
    type: "Deemed University",
    programs: ["Engineering", "Medicine", "Management", "Law", "Arts"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Hospital", "Research Center"],
    location: "Chennai, Tamil Nadu",
    established: 1985,
    accreditation: "NAAC A++",
    website: "www.srmist.edu.in",
    rating: 4.2,
    students: "45,000+",
    description: "Multi-disciplinary university with modern infrastructure."
  },
  {
    id: 6,
    name: "VIT University",
    rank: 18,
    ownership: "Private",
    type: "Deemed University",
    programs: ["Engineering", "Science", "Management", "Law", "Design"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Innovation Center"],
    location: "Vellore, Tamil Nadu",
    established: 1984,
    accreditation: "NAAC A++",
    website: "www.vit.ac.in",
    rating: 4.4,
    students: "35,000+",
    description: "Leading private university with excellent placement records."
  },
  {
    id: 7,
    name: "Jawaharlal Nehru University",
    rank: 8,
    ownership: "Government",
    type: "Central University",
    programs: ["Arts", "Science", "Social Sciences", "International Studies", "Language Studies"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Cultural Center"],
    location: "New Delhi",
    established: 1969,
    accreditation: "NAAC A++",
    website: "www.jnu.ac.in",
    rating: 4.5,
    students: "8,000+",
    description: "Premier university for social sciences and humanities."
  },
  {
    id: 8,
    name: "Banaras Hindu University",
    rank: 12,
    ownership: "Government",
    type: "Central University",
    programs: ["Arts", "Science", "Commerce", "Medicine", "Engineering", "Law"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Hospital", "Temple", "Sports Complex"],
    location: "Varanasi, Uttar Pradesh",
    established: 1916,
    accreditation: "NAAC A++",
    website: "www.bhu.ac.in",
    rating: 4.3,
    students: "25,000+",
    description: "Historic university with comprehensive academic programs."
  },
  {
    id: 9,
    name: "University of Delhi",
    rank: 10,
    ownership: "Government",
    type: "Central University",
    programs: ["Arts", "Science", "Commerce", "Law", "Education", "Social Sciences"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Cultural Center"],
    location: "New Delhi",
    established: 1922,
    accreditation: "NAAC A++",
    website: "www.du.ac.in",
    rating: 4.4,
    students: "1,50,000+",
    description: "Largest university in India with diverse academic offerings."
  },
  {
    id: 10,
    name: "Indian Institute of Management Ahmedabad",
    rank: 1,
    ownership: "Government",
    type: "IIM",
    programs: ["Management", "Business Administration", "Executive Education"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Conference Center"],
    location: "Ahmedabad, Gujarat",
    established: 1961,
    accreditation: "AACSB",
    website: "www.iima.ac.in",
    rating: 4.9,
    students: "1,000+",
    description: "Top-ranked business school in Asia."
  },
  {
    id: 11,
    name: "All India Institute of Medical Sciences",
    rank: 1,
    ownership: "Government",
    type: "Medical Institute",
    programs: ["Medicine", "Surgery", "Nursing", "Research"],
    facilities: ["Hostel", "Hospital", "Lab", "Library", "Research Center", "Emergency Care"],
    location: "New Delhi",
    established: 1956,
    accreditation: "NAAC A++",
    website: "www.aiims.edu",
    rating: 4.8,
    students: "3,000+",
    description: "Premier medical institute and hospital."
  },
  {
    id: 12,
    name: "National Institute of Technology Trichy",
    rank: 9,
    ownership: "Government",
    type: "NIT",
    programs: ["Engineering", "Science", "Management", "Architecture"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Innovation Center"],
    location: "Tiruchirappalli, Tamil Nadu",
    established: 1964,
    accreditation: "NAAC A++",
    website: "www.nitt.edu",
    rating: 4.5,
    students: "8,000+",
    description: "Leading NIT with excellent engineering programs."
  },
  {
    id: 13,
    name: "Indian Institute of Science",
    rank: 1,
    ownership: "Government",
    type: "Research Institute",
    programs: ["Science", "Engineering", "Research", "Doctoral Studies"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Research Center", "Supercomputer"],
    location: "Bangalore, Karnataka",
    established: 1909,
    accreditation: "NAAC A++",
    website: "www.iisc.ac.in",
    rating: 4.9,
    students: "4,000+",
    description: "Premier research institute for advanced scientific studies."
  },
  {
    id: 14,
    name: "Manipal Academy of Higher Education",
    rank: 20,
    ownership: "Private",
    type: "Deemed University",
    programs: ["Medicine", "Engineering", "Management", "Arts", "Design"],
    facilities: ["Hostel", "Hospital", "Lab", "Library", "Sports Complex", "Research Center"],
    location: "Manipal, Karnataka",
    established: 1953,
    accreditation: "NAAC A++",
    website: "www.manipal.edu",
    rating: 4.3,
    students: "28,000+",
    description: "Comprehensive university with health sciences focus."
  },
  {
    id: 15,
    name: "Amity University",
    rank: 35,
    ownership: "Private",
    type: "Private University",
    programs: ["Engineering", "Management", "Law", "Arts", "Communication", "Fashion"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Shopping Mall"],
    location: "Noida, Uttar Pradesh",
    established: 2005,
    accreditation: "NAAC A+",
    website: "www.amity.edu",
    rating: 4.1,
    students: "50,000+",
    description: "Largest private university with modern campus."
  },
  {
    id: 16,
    name: "Christ University",
    rank: 22,
    ownership: "Private",
    type: "Deemed University",
    programs: ["Arts", "Science", "Commerce", "Management", "Law", "Engineering"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Chapel"],
    location: "Bangalore, Karnataka",
    established: 1969,
    accreditation: "NAAC A+",
    website: "www.christuniversity.in",
    rating: 4.4,
    students: "18,000+",
    description: "Premier private university with excellent academics."
  },
  {
    id: 17,
    name: "Indian Institute of Technology Kanpur",
    rank: 4,
    ownership: "Government",
    type: "IIT",
    programs: ["Engineering", "Science", "Management", "Design"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Medical Center"],
    location: "Kanpur, Uttar Pradesh",
    established: 1959,
    accreditation: "NAAC A++",
    website: "www.iitk.ac.in",
    rating: 4.6,
    students: "9,000+",
    description: "Leading IIT with strong research focus."
  },
  {
    id: 18,
    name: "Indian Institute of Technology Kharagpur",
    rank: 5,
    ownership: "Government",
    type: "IIT",
    programs: ["Engineering", "Science", "Management", "Law", "Architecture"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Medical Center"],
    location: "Kharagpur, West Bengal",
    established: 1951,
    accreditation: "NAAC A++",
    website: "www.iitkgp.ac.in",
    rating: 4.7,
    students: "13,000+",
    description: "Oldest IIT with rich heritage and modern facilities."
  },
  {
    id: 19,
    name: "Jadavpur University",
    rank: 14,
    ownership: "Government",
    type: "State University",
    programs: ["Engineering", "Science", "Arts", "Commerce", "Architecture"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Cultural Center"],
    location: "Kolkata, West Bengal",
    established: 1955,
    accreditation: "NAAC A++",
    website: "www.jaduniv.edu.in",
    rating: 4.4,
    students: "15,000+",
    description: "Premier state university with excellent academic standards."
  },
  {
    id: 20,
    name: "BITS Pilani",
    rank: 16,
    ownership: "Private",
    type: "Deemed University",
    programs: ["Engineering", "Science", "Management", "Pharmacy", "Humanities"],
    facilities: ["Hostel", "Internet", "Lab", "Library", "Sports Complex", "Innovation Center"],
    location: "Pilani, Rajasthan",
    established: 1964,
    accreditation: "NAAC A++",
    website: "www.bits-pilani.ac.in",
    rating: 4.5,
    students: "12,000+",
    description: "Leading private institute for higher education."
  }
];

const getFacilityIcon = (facility) => {
  switch (facility.toLowerCase()) {
    case 'hostel': return <Home className="w-4 h-4" />;
    case 'internet': return <Wifi className="w-4 h-4" />;
    case 'lab': return <Microscope className="w-4 h-4" />;
    case 'library': return <BookOpen className="w-4 h-4" />;
    case 'sports complex': return <Award className="w-4 h-4" />;
    case 'medical center': return <Users className="w-4 h-4" />;
    case 'hospital': return <Building className="w-4 h-4" />;
    case 'research center': return <Globe className="w-4 h-4" />;
    case 'innovation center': return <Star className="w-4 h-4" />;
    case 'auditorium': return <Building className="w-4 h-4" />;
    case 'conference center': return <Building className="w-4 h-4" />;
    case 'supercomputer': return <Globe className="w-4 h-4" />;
    case 'shopping mall': return <Building className="w-4 h-4" />;
    case 'chapel': return <Building className="w-4 h-4" />;
    case 'temple': return <Building className="w-4 h-4" />;
    case 'cultural center': return <Building className="w-4 h-4" />;
    case 'emergency care': return <Users className="w-4 h-4" />;
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
                  placeholder="Enter city/district (e.g., Chennai, Mumbai, Delhi, Bangalore, Kolkata)"
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
