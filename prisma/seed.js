const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create domains
  const domains = [
    { name: 'IT & Software' },
    { name: 'Education (EdTech)' },
    { name: 'Healthcare' },
    { name: 'Finance & Banking' },
    { name: 'Manufacturing' },
    { name: 'Agriculture' },
    { name: 'Media' },
    { name: 'Energy' },
    { name: 'Transport' },
    { name: 'Government' },
  ];

  const createdDomains = [];
  for (const domain of domains) {
    const created = await prisma.domain.create({ data: domain });
    createdDomains.push(created);
  }

  // Create subdomains (job roles)
  const subdomainsData = [
    { domainName: 'IT & Software', roles: ['software developer', 'data scientist', 'cloud architect', 'cybersecurity', 'ui/ux'] },
    { domainName: 'Education (EdTech)', roles: ['teacher', 'instructional designer', 'counselor', 'product manager', 'tutor'] },
    { domainName: 'Healthcare', roles: ['doctor', 'nurse', 'biomedical engineer', 'researcher', 'public health'] },
    { domainName: 'Finance & Banking', roles: ['investment banker', 'analyst', 'CA', 'risk officer', 'fintech PM'] },
    { domainName: 'Manufacturing', roles: ['mechanical engineer', 'quality analyst', 'production manager', 'industrial designer', 'supply chain'] },
    { domainName: 'Agriculture', roles: ['agri scientist', 'food technologist', 'agribusiness', 'soil conservationist', 'equipment engineer'] },
    { domainName: 'Media', roles: ['journalist', 'graphic designer', 'video editor', 'social media manager', 'game dev'] },
    { domainName: 'Energy', roles: ['renewable energy engineer', 'consultant', 'geologist', 'waste officer', 'sustainability'] },
    { domainName: 'Transport', roles: ['civil engineer', 'logistics coordinator', 'pilot', 'shipping manager', 'warehouse manager'] },
    { domainName: 'Government', roles: ['IAS/IPS/IFS', 'teacher', 'defense officer', 'PSU banker', 'policy analyst'] },
  ];

  const createdSubdomains = [];
  for (const sub of subdomainsData) {
    const domain = createdDomains.find(d => d.name === sub.domainName);
    for (const role of sub.roles) {
      const created = await prisma.subdomain.create({
        data: {
          name: role,
          domainId: domain.id,
        },
      });
      createdSubdomains.push(created);
    }
  }

  // Sample colleges with more data
  const colleges = [
    {
      name: 'IIT Madras',
      rank: 1,
      ownership: 'Government',
      location: 'Chennai',
      programs: ['Engineering', 'Science'],
      facilities: ['Hostel', 'Library', 'Lab'],
    },
    {
      name: 'Anna University',
      rank: 10,
      ownership: 'Government',
      location: 'Chennai',
      programs: ['Engineering', 'Technology'],
      facilities: ['Hostel', 'Internet', 'Lab', 'Library'],
    },
    {
      name: 'SRM University',
      rank: 25,
      ownership: 'Private',
      location: 'Chennai',
      programs: ['Engineering', 'Medicine', 'Business'],
      facilities: ['Hostel', 'Internet', 'Lab', 'Library', 'Sports'],
    },
    {
      name: 'VIT University',
      rank: 15,
      ownership: 'Private',
      location: 'Vellore',
      programs: ['Engineering', 'Science', 'Arts'],
      facilities: ['Hostel', 'Internet', 'Lab', 'Library'],
    },
    {
      name: 'Amrita Vishwa Vidyapeetham',
      rank: 20,
      ownership: 'Private',
      location: 'Coimbatore',
      programs: ['Engineering', 'Medicine', 'Management'],
      facilities: ['Hostel', 'Internet', 'Lab', 'Library', 'Sports', 'Gym'],
    },
    {
      name: 'Madras Medical College',
      rank: 5,
      ownership: 'Government',
      location: 'Chennai',
      programs: ['Medicine', 'Nursing'],
      facilities: ['Hospital', 'Library', 'Lab'],
    },
    {
      name: 'All India Institute of Medical Sciences (AIIMS)',
      rank: 1,
      ownership: 'Government',
      location: 'New Delhi',
      programs: ['Medicine', 'Nursing', 'Dentistry'],
      facilities: ['Hospital', 'Library', 'Research Labs', 'Hostel'],
    },
    {
      name: 'Christian Medical College',
      rank: 2,
      ownership: 'Private',
      location: 'Vellore',
      programs: ['Medicine', 'Nursing', 'Allied Health Sciences'],
      facilities: ['Hospital', 'Library', 'Hostel', 'Sports Complex'],
    },
    {
      name: 'Armed Forces Medical College',
      rank: 3,
      ownership: 'Government',
      location: 'Pune',
      programs: ['Medicine', 'Nursing', 'Paramedical'],
      facilities: ['Hospital', 'Library', 'Hostel', 'Lab'],
    },
    {
      name: 'JIPMER (Jawaharlal Institute of Postgraduate Medical Education & Research)',
      rank: 4,
      ownership: 'Government',
      location: 'Puducherry',
      programs: ['Medicine', 'Nursing', 'Pharmacy'],
      facilities: ['Hospital', 'Library', 'Research Labs', 'Hostel'],
    },
    {
      name: 'King George’s Medical University',
      rank: 6,
      ownership: 'Government',
      location: 'Lucknow',
      programs: ['Medicine', 'Dentistry', 'Nursing'],
      facilities: ['Hospital', 'Library', 'Hostel', 'Sports Facilities'],
    },
    {
      name: 'St. John’s Medical College',
      rank: 7,
      ownership: 'Private',
      location: 'Bengaluru',
      programs: ['Medicine', 'Nursing', 'Allied Health Sciences'],
      facilities: ['Hospital', 'Library', 'Lab', 'Hostel'],
    },
    {
      name: 'Banaras Hindu University - Institute of Medical Sciences',
      rank: 8,
      ownership: 'Government',
      location: 'Varanasi',
      programs: ['Medicine', 'Ayurveda', 'Nursing'],
      facilities: ['Hospital', 'Library', 'Research Labs', 'Hostel'],
    },
    {
      name: 'Kasturba Medical College',
      rank: 9,
      ownership: 'Private',
      location: 'Manipal',
      programs: ['Medicine', 'Nursing', 'Allied Health Sciences'],
      facilities: ['Hospital', 'Library', 'Hostel', 'Sports Facilities'],
    },
    {
      name: 'Grant Medical College',
      rank: 10,
      ownership: 'Government',
      location: 'Mumbai',
      programs: ['Medicine', 'Nursing', 'Pharmacy'],
      facilities: ['Hospital', 'Library', 'Lab', 'Hostel'],
    },
    
  ];

  for (const college of colleges) {
    await prisma.college.create({ data: college });
  }

  // Sample courses with more data
  const courses = [
    {
      title: 'Python for Beginners',
      provider: 'Udemy',
      link: 'https://udemy.com/python',
      duration: '10 hours',
      isPaid: true,
      jobRoleId: 1,
    },
    {
      title: 'Data Science with Python',
      provider: 'Udemy',
      link: 'https://udemy.com/datascience',
      duration: '20 hours',
      isPaid: true,
      jobRoleId: 2,
    },
    {
      title: 'AWS Cloud Architecture',
      provider: 'Udemy',
      link: 'https://udemy.com/aws',
      duration: '15 hours',
      isPaid: true,
      jobRoleId: 3,
    },
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'Infosys Springboard',
      link: 'https://springboard.infosys.com/cybersecurity',
      duration: '8 hours',
      isPaid: false,
      jobRoleId: 4,
    },
    {
      title: 'UI/UX Design Principles',
      provider: 'Udemy',
      link: 'https://udemy.com/uiux',
      duration: '12 hours',
      isPaid: true,
      jobRoleId: 5,
    },
    {
      title: 'Investment Banking Basics',
      provider: 'Udemy',
      link: 'https://udemy.com/investmentbanking',
      duration: '18 hours',
      isPaid: true,
      jobRoleId: 16,
    },
    {
      title: 'Financial Analysis',
      provider: 'Infosys Springboard',
      link: 'https://springboard.infosys.com/financialanalysis',
      duration: '10 hours',
      isPaid: false,
      jobRoleId: 17,
    },
  ];

  for (const course of courses) {
    await prisma.course.create({ data: course });
  }

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
