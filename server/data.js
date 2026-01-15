export const profile = {
  name: 'Kisal Thennakoon',
  title: 'Electronic & Telecommunication Engineering Undergraduate',
  bio: 'Final-year undergraduate with a strong foundation in Full Stack Development, Machine Learning, and Computer Vision. Experienced in building scalable enterprise applications and AI-powered solutions.',
  aboutTitle: 'Hello! I\'m Kisal Thennakoon',
  aboutParagraphs: [
    'I am a final year B.Sc. (Hons) Electronic & Telecommunication Engineering undergraduate at the University of Moratuwa, expecting to graduate shortly. My academic journey has been defined by a deep dive into deep learning, pattern recognition, and modular software development.',
    'With professional experience as a Software Engineering Intern at NCINGA (Pvt) Ltd, I have contributed to complex enterprise projects including multi-tenant internet access systems and secure banking platforms. I specialize in bridging the gap between robust backend logic and intuitive frontend experiences.',
    'I am passionate about leveraging my skills in AI/ML and Software Engineering to build innovative solutions. From developing dual RAG architectures for knowledge management to optimizing visual anomaly detection models, I am constantly exploring the cutting edge of technology.'
  ],
  image: '/uploads/me.jpeg'
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
    skills: 'Spring Boot, React, Express.js, RESTful APIs, Microservices' 
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
    title: 'B.Sc. (Hons) Electronic & Telecom. Engineering',
    company: 'University of Moratuwa',
    date: '2022 - Present',
    description: 'Modules :  Deep Learning for Vision, Neural Networks and Fuzzy Logic, Image Processing and Machine Vision, Pattern Recognition, Software Design Competition, Data Structures and Algorithms, Modular Software Development, Engineering Optimization, Applied Statistics, Linear Algebra',
  },
  {
    title: 'Software Engineering Intern',
    company: 'NCINGA (PVT) LTD',
    date: 'Dec 2024 - June 2025',
    description: 'Assisted in developing and maintaining internal enterprise applications. Contributed to backend and frontend development, API integration, debugging and testing. Collaborated with senior engineers and cross-functional teams, following agile practices.',
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
    icon: '🧠', 
    title: 'AI/ML and Data', 
    description: 'Fascinated by the potential to transform raw information into intelligent insights, bridging the gap between structured and unstructured data for smarter decision-making.' 
  },
  { 
    icon: '👁️', 
    title: 'Computer Vision', 
    description: 'Captivated by the ability to give machines visual understanding, enabling real-time automation and precise interpretation of the physical world.' 
  },
  { 
    icon: '💻', 
    title: 'Software Engineering', 
    description: 'Driven by the challenge of building innovative, scalable solutions that solve complex real-world problems through robust architecture.' 
  },


];

export const contactInfo = {
  email: 'kisaltennakoon@gmail.com',
  // phone: '+94 76 665 8382',
  location: 'Colombo, Sri Lanka',
  social: [
    {
      platform: 'GitHub',
      url: 'https://github.com/kisalthennakoon'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kisalthennakoon'
    },
    // {
    //   platform: 'Twitter',
    //   url: 'https://twitter.com/kisalthennakoon'
    // }
  ]
};

export const projects = [
{
    id: 1,
    title: 'IntelliScript-V3',
    description: 'A secure, AI-powered knowledge management platform tailored for enterprises. Combines fine-tuned LLMs with a Dual-RAG architecture and robust Role-Based Access Control (RBAC) to provide context-aware access to both structured and unstructured enterprise data.',
    contribution: 'So far, I led the system architecture design initially and specifically expanded the RBAC system from two to seven distinct roles to handle complex user privileges. I designed the SQL relational schemas for efficient data retrieval and developed the conversational chat interface, implementing long-term memory and a clarification module for ambiguous queries. Additionally, I implemented the CRM module for Structured data which main target is to interact with customer questions and learn through unknown knowledge with human in the loop feedback mechanisms and conducted comparative analysis of open-source LLMs to optimize performance under limited resources.',
    category: 'Academic Project (Final Year Project)',
    about: 'This project is still ongoing as our final year project at the university and IntelliScript V3 was developed to address the challenge of fragmented information in academic institutes, where data is often scattered across disconnected systems. The platform serves as an intelligent bridge, capable of retrieving information from multimodal sources including scanned documents, circulars, and structured databases. It features a Dual-RAG architecture to unify these data types and enforces strict privacy through a dynamic RBAC mechanism, ensuring that sensitive administrative and student records are only accessible to authorized users.',
    technologies: ['Python', 'FastAPI', 'React', 'LangChain', 'OpenAI', 'PostgreSQL', 'FAISS', 'SQL', 'RAG'],
    github: '',
    demo: '',
    image: '/uploads/intelliScript.jpg'
  },

  {
    id: 2,
    title: 'Devix - Thermal Inspection System',
    description: 'A comprehensive Thermal Anomaly Detection System for distribution transformers. The web-based platform digitizes the maintenance lifecycle, featuring AI-powered automated detection, asset management, and digital reporting to replace manual, error-prone inspections.',
    contribution: 'I designed and developed the entire backend and database architecture using Spring Boot and postgreSQL. My role involved architecting system flows, developing complex code logic, and implementing scalable RESTful APIs. I also worked in integrating frontend and backend APIs, integrating team developed computer vision algorithem which run as a fastAPI. I also provided initial support for the Computer Vision algorithm design and frontend development using React.js with structuring the UI design.',
    category: 'Academic Project',
    about: 'Developed for the Software Design Competition module in semester 7 at the university, this system addresses the inefficiencies of traditional manual inspections. The solution facilitates the entire workflow in four phases: Asset Management for categorizing baselines based on environmental conditions; Automated Detection using an AI engine to compare maintenance images against baselines; a Human-in-the-Loop interface for engineers to validate findings; and Digital Reporting for generating structured, traceable maintenance logs.',
    technologies: ['React', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'OpenCV', 'REST APIs', 'Python', 'Java', 'TypeScript'],
    github: 'https://github.com/kisalthennakoon/Devix',
    demo: '',
    image: '/uploads/Devix.webp'
  },

  {
    id: 3,
    title: 'CEFT Enterprise Banking System',
    description: 'A production-level enterprise system developed for Commercial Bank to facilitate secure and efficient fund transfers. Built on a microservices architecture with six distinct Dockerized services orchestrated via Kubernetes for robust auto-scaling and portability.',
    contribution: 'I contributed to full-stack development, refining backend controllers and services to implement core business logic while ensuring system stability. On the frontend, I developed responsive, component-based UIs and utilized Redux for scalable state management. I actively participated in Agile sprints, code reviews, and CTO-level meetings to troubleshoot integration issues and ensure UI/UX consistency.',
    category: 'Industry Project - NCINGA (PVT) LTD',
    about: 'The CEFT project is a critical initiative for Commercial Bank, designed to handle secure fund transfers in a production environment. The system architecture comprises six distinct backend microservices, each fully Dockerized to ensure environment consistency. Orchestrated via Kubernetes, the platform supports seamless auto-scaling and robust deployment across staging and production clusters, adhering to strict banking security and performance standards.',
    technologies: ['Java', 'Spring Boot', 'React', 'Docker', 'Kubernetes', 'MongoDB', 'Redux', 'REST APIs'],
    github: '', // Private/Corporate Repository
    demo: '',
    image: '/uploads/ceft.jpeg'
  },

  {
    id: 4,
    title: 'Captive Portal Platform',
    description: 'A comprehensive multi-tenant web system deployed across five countries (Fiji & PNG) to manage internet access, authentication, and bandwidth control. Features three distinct portals for admins, tenants, and subscribers.',
    contribution: 'I served as a full-stack developer across all three portals, designing RESTful APIs and integrating them with React frontends. Key contributions included integrating secure payment gateways (PayPal, CellMoni), developing a real-time UI preview feature for tenants, and building an advertisement management module. I also resolved complex cross-origin authentication issues by refactoring JWT storage strategies and optimized state management for preview logic to ensure stability.',
    category: 'Industry Project - NCINGA (PVT) LTD',
    about: 'The Captive Portal Project is a production-grade solution designed to manage internet access in environments requiring robust user authentication and bandwidth control. Built on a multi-tenant architecture, it comprises three main interfaces: an Admin Portal for global system oversight, a Tenant Portal for service providers to manage data packages and customize user experiences, and a Subscriber Portal for end-users to register and purchase data. The system is currently active across five countries.',
    technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'REST APIs', 'JWT', 'PayPal Integration', 'Redux'],
    github: '', // Private/Corporate Repository
    demo: '',
    image: '/uploads/cp.jpg'
  },

{
    id: 5,
    title: 'Facial Expression Change Detection',
    description: 'A project that extends research on facial expression analysis. The system uses the Horn-Schunck optical flow algorithm to detect dynamic transitions from neutral to happy, sad, or shocked expressions in real-time video inputs.',
    contribution: 'I led the implementation of the Horn-Schunck algorithm and the entire data preprocessing pipeline, including dataset curation and matrix transformations. I visualized the algorithmic outputs and extended the core research to handle video inputs, enabling the system to overlay detected expressions onto the video in real-time.',
    category: 'Academic Project',
    about: 'Developed for the "Image Processing and Machine Vision" module in semester 5 at the university, this system achieves high accuracy in identifying transitions between facial expressions. By extending concepts from existing research, we applied the Horn-Schunck optical flow algorithm to track motion vectors across video frames. Unlike static image analysis, this methodology processes temporal motion fields to distinguish between neutral, happy, sad, and shocked expressions dynamically.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/kisalthennakoon/Face-Expression-Change-Detection',
    demo: '',
    image: '/uploads/expression.jpg'
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


];