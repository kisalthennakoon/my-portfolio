export const profile = {
  name: 'Kisal Thennakoon',
  title: 'Electronic & Telecommunication Engineering Undergraduate',
  bio: 'Final-year undergraduate with a strong foundation in Full Stack Development, Machine Learning, and Computer Vision. Experienced in building scalable enterprise applications and AI-powered solutions.',
  aboutTitle: 'Hello! I\'m Kisal Thennakoon',
  aboutParagraphs: [
    'I am a final year B.Sc. (Hons) Electronic & Telecommunication Engineering undergraduate at the University of Moratuwa, expecting to graduate shortly. My academic journey has been defined by a deep dive into deep learning, pattern recognition, and modular software development.',
    'With professional experience as a Software Engineering Intern at NCINGA (Pvt) Ltd, I have contributed to complex enterprise projects including multi-tenant internet access systems and secure banking platforms. I specialize in bridging the gap between robust backend logic and intuitive frontend experiences.',
    'I am passionate about leveraging my skills in AI/ML and Software Engineering to build innovative solutions. From developing dual RAG architectures for knowledge management to optimizing visual anomaly detection models, I am constantly exploring the cutting edge of technology.'
  ]
};

export const skills = [
  
  { 
    title: 'Languages', 
    skills: 'Java, Python, C++, JavaScript, TypeScript, SQL' 
  },
  { 
    title: 'AI & Data Science', 
    skills: 'TensorFlow, Keras, OpenCV, NumPy, Pandas, RAG Architectures, LLMs, Matplotlib' 
  },
  { 
    title: 'Web Development', 
    skills: 'Spring Boot, React.js, RESTful APIs, Microservices' 
  },
  { 
    title: 'Databases', 
    skills: 'MongoDB, MySQL, PostgreSQL, Vector Databases' 
  },
  // { 
  //   title: 'Design', 
  //   skills: 'Altium Designer, SolidWorks, Autodesk 3Ds Max & Maya, Adobe Creative Suite' 
  // }
];


export const timeline = [
  {
    title: 'Software Engineering Intern',
    company: 'NCINGA (PVT) LTD',
    date: 'Dec 2024 - June 2025',
    description: 'Contributed to backend and frontend development for enterprise applications. Worked on a Captive Portal Platform for Digicell and a CEFT Enterprise Banking System using Spring Boot, React, and Kubernetes.',
  },
  {
    title: 'B.Sc. (Hons) Electronic & Telecom. Engineering',
    company: 'University of Moratuwa',
    date: '2022 - Present',
    description: 'Current CGPA: 3.63/4.0. Modules include Deep Learning for Vision, Neural Networks, Software Design, and Data Structures & Algorithms.',
  },
  // {
  //   title: 'G.C.E Advanced Level',
  //   company: 'Gurukula National College, Kelaniya',
  //   date: '2012 - 2020',
  //   description: 'Physical Science Stream. Achieved Z Score: 2.1297. Active in Rowing, Swimming, and served as President of the Science Society.',
  // }
];

export const interests = [

  { 
    icon: '💻', 
    title: 'Software Engineering', 
    description: 'Developing scalable enterprise applications using Spring Boot, React, and Microservices architecture.' 
  },

  { 
    icon: '🧠', 
    title: 'Artificial Intelligence & ML', 
    description: 'Passionate about RAG architectures, LLMs, and model optimization techniques like those used in UniVAD.' 
  },

  { 
    icon: '👁️', 
    title: 'Computer Vision', 
    description: 'Specializing in visual anomaly detection, optical flow analysis, and image processing using OpenCV and Deep Learning.' 
  },
  
  { 
    icon: '📊', 
    title: 'Data Science', 
    description: 'Working with vector databases, pattern recognition, and unifying structured and unstructured data for knowledge management.' 
  }
];

export const projects = [
  {
    id: 1,
    title: 'IntelliScript V3 (FYP)',
    description: 'A secure, AI-powered enterprise knowledge management system featuring Dual-RAG architecture and intelligent Role-Based Access Control (RBAC).',
    technologies: ['Python', 'FastAPI', 'React', 'LangChain', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/kisalthennakoon', // Placeholder based on CV username
    demo: '',
    image: ''
  },
  {
    id: 2,
    title: 'Devix - Thermal Inspection System',
    description: 'Web-based solution to digitize transformer thermal inspections. Integrated a computer vision engine to detect temperature anomalies against baselines.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Python', 'OpenCV'],
    github: 'https://github.com/kisalthennakoon',
    demo: '',
    image: ''
  },

  {
    id: 3,
    title: 'Facial Expression Detection',
    description: 'Computer vision system using Optical Flow to analyze dynamic facial changes. Extracts dense motion vectors to identify expressions based on temporal motion fields.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'NumPy'],
    github: 'https://github.com/kisalthennakoon/Facial-Expression-Change-Detection',
    demo: '',
    image: ''
  },

  // {
  //   id: 3,
  //   title: 'Captive Portal Platform',
  //   description: 'Multi-tenant internet access management system for Digicell (Fiji/PNG). Engineered full-stack solutions with secure payment gateway integration.',
  //   technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Redux'],
  //   github: '',
  //   demo: '',
  //   image: ''
  // },

{
    id: 4,
    title: 'CEFT Enterprise Banking System',
    description: 'A secure fund transfer platform for Commercial Bank. Built on microservices architecture with Dockerized services orchestrated via Kubernetes for auto-scaling [Internship Project].',
    technologies: ['Java', 'Spring Boot', 'React', 'Docker', 'Kubernetes', 'MongoDB'],
    github: '', // Private/Corporate Repository
    demo: '',
    image: ''
  },

  {
    id: 5,
    title: 'Captive Portal Platform',
    description: 'Multi-tenant internet access management system for Digicell (Fiji/PNG). Engineered full-stack solutions with secure payment gateway integration (PayPal, CellMoni) [Internship Project].',
    technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'SOAP', 'JWT'],
    github: '', // Private/Corporate Repository
    demo: '',
    image: ''
  },
];