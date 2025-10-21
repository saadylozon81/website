// Mock job data - In a real application, this would come from a database
const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Technology',
    description: 'We are seeking an experienced software engineer to join our growing team. The ideal candidate will have strong experience in modern web technologies and a passion for building scalable applications.',
    salary: '$120k - $160k',
    requirements: [
      '5+ years of experience in software development',
      'Strong knowledge of JavaScript, React, and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Excellent problem-solving skills'
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams',
      'Mentor junior developers',
      'Participate in code reviews and technical discussions'
    ]
  },
  {
    id: 2,
    title: 'Marketing Manager',
    company: 'Brand Solutions Inc',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Marketing',
    description: 'Lead our marketing initiatives and drive brand awareness. The perfect candidate will have a proven track record in digital marketing and team leadership.',
    salary: '$90k - $120k',
    requirements: [
      '3+ years of marketing experience',
      'Strong understanding of digital marketing channels',
      'Experience with marketing automation tools',
      'Excellent communication skills'
    ],
    responsibilities: [
      'Develop and execute marketing strategies',
      'Manage marketing team and budgets',
      'Analyze campaign performance',
      'Build brand awareness'
    ]
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'Analytics Plus',
    location: 'Remote',
    type: 'Contract',
    category: 'Data Science',
    description: 'Analyze complex datasets and provide actionable insights to drive business decisions. Experience with SQL, Python, and data visualization tools required.',
    salary: '$80k - $100k',
    requirements: [
      '2+ years of data analysis experience',
      'Proficiency in SQL and Python',
      'Experience with data visualization tools (Tableau, Power BI)',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Analyze large datasets to identify trends and patterns',
      'Create data visualizations and reports',
      'Collaborate with stakeholders to understand business needs',
      'Present findings to management'
    ]
  },
  {
    id: 4,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'Austin, TX',
    type: 'Full-time',
    category: 'Design',
    description: 'Create intuitive and beautiful user experiences for our digital products. We are looking for a creative designer with a strong portfolio.',
    salary: '$85k - $110k',
    requirements: [
      '3+ years of UX design experience',
      'Proficiency in design tools (Figma, Sketch, Adobe XD)',
      'Strong portfolio demonstrating UX work',
      'Understanding of user research and testing'
    ],
    responsibilities: [
      'Design user interfaces and experiences',
      'Conduct user research and testing',
      'Create wireframes and prototypes',
      'Collaborate with developers and product managers'
    ]
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    location: 'Seattle, WA',
    type: 'Full-time',
    category: 'Technology',
    description: 'Manage and optimize our cloud infrastructure. Looking for someone with strong experience in AWS, Docker, and Kubernetes.',
    salary: '$110k - $145k',
    requirements: [
      '4+ years of DevOps experience',
      'Strong knowledge of AWS or Azure',
      'Experience with Docker and Kubernetes',
      'Proficiency in scripting (Python, Bash)'
    ],
    responsibilities: [
      'Manage cloud infrastructure',
      'Implement CI/CD pipelines',
      'Monitor system performance and reliability',
      'Automate deployment processes'
    ]
  },
  {
    id: 6,
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'Boston, MA',
    type: 'Full-time',
    category: 'Product',
    description: 'Drive product strategy and roadmap development. The ideal candidate will have experience bringing products from concept to launch.',
    salary: '$105k - $140k',
    requirements: [
      '3+ years of product management experience',
      'Strong understanding of agile methodologies',
      'Experience with product analytics tools',
      'Excellent stakeholder management skills'
    ],
    responsibilities: [
      'Define product vision and strategy',
      'Manage product roadmap and backlog',
      'Work with engineering teams on implementation',
      'Analyze product metrics and user feedback'
    ]
  }
];

module.exports = jobs;
