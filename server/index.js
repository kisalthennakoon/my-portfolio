import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { projects, profile, skills, timeline, interests, contactInfo } from './data.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

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

// Get contact information
app.get('/api/contact-info', (req, res) => {
  res.json(contactInfo);
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
app.post('/api/contact', async (req, res) => {
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

  try {
    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Display sender's name
      to: process.env.GMAIL_USER, // Send to your own email
      replyTo: email, // Set reply-to as the sender's email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #666; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>This email was sent from your portfolio website contact form.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Contact form submission:', { name, email, subject });

    res.status(200).json({
      message: 'Message received successfully',
      data: { name, email, subject }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send message. Please try again later.',
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
