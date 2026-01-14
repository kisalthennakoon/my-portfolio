import express from 'express';
import cors from 'cors';
import { projects, profile, skills, timeline, interests } from './data.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

// Get profile information
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

// Get skills
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// Get timeline (experience & education)
app.get('/api/timeline', (req, res) => {
  res.json(timeline);
});

// Get interests
app.get('/api/interests', (req, res) => {
  res.json(interests);
});

// Get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Get single project by id
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // In a real application, you would:
  // 1. Store this in a database
  // 2. Send an email notification
  // 3. Use a service like SendGrid, Nodemailer, etc.

  console.log('Contact form submission:', { name, email, subject, message });

  res.status(200).json({
    message: 'Message received successfully',
    data: { name, email, subject }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
