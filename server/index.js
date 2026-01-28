import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { projects, profile, skills, timeline, interests, contactInfo } from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend (much more reliable on free hosting than Gmail SMTP)
const resend = new Resend(process.env.RESEND_API_KEY);

// Verify API key is set
if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️  RESEND_API_KEY not set. Email functionality will not work.');
  console.warn('Get your API key from: https://resend.com/api-keys');
} else {
  console.log('✅ Resend email service initialized');
}

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files (images) from the 'public' directory
app.use('/uploads', express.static('public/images'));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

// Get profile information
app.get('/api/profile', (req, res) => {
  if (profile.image) {
      const imagePath = path.join(__dirname, 'public', 'images', path.basename(profile.image));
      
      if (fs.existsSync(imagePath)) {
        const imageBuffer = fs.readFileSync(imagePath);
        const base64Image = imageBuffer.toString('base64');
        const ext = path.extname(imagePath).toLowerCase();
        
        let mimeType = 'image/jpeg';
        if (ext === '.png') mimeType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
        else if (ext === '.webp') mimeType = 'image/webp';
        else if (ext === '.gif') mimeType = 'image/gif';
        
        return res.json({
          ...profile,
          imageData: `data:${mimeType};base64,${base64Image}`
        });
      }
    }
    
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

// Get all projects with images as base64
app.get('/api/projects', (req, res) => {
  try {
    const projectsWithImages = projects.map(project => {
      if (project.image) {
        const imagePath = path.join(__dirname, 'public', 'images', path.basename(project.image));
        
        if (fs.existsSync(imagePath)) {
          const imageBuffer = fs.readFileSync(imagePath);
          const base64Image = imageBuffer.toString('base64');
          const ext = path.extname(imagePath).toLowerCase();
          
          // Determine MIME type
          let mimeType = 'image/jpeg';
          if (ext === '.png') mimeType = 'image/png';
          else if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
          else if (ext === '.webp') mimeType = 'image/webp';
          else if (ext === '.gif') mimeType = 'image/gif';
          
          return {
            ...project,
            imageData: `data:${mimeType};base64,${base64Image}`
          };
        }
      }
      return project;
    });
    
    res.json(projectsWithImages);
  } catch (error) {
    console.error('Error reading project images:', error);
    res.status(500).json({ message: 'Error loading projects', error: error.message });
  }
});

// Get single project by id with image as base64
app.get('/api/projects/:id', (req, res) => {
  try {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    if (project.image) {
      const imagePath = path.join(__dirname, 'public', 'images', path.basename(project.image));
      
      if (fs.existsSync(imagePath)) {
        const imageBuffer = fs.readFileSync(imagePath);
        const base64Image = imageBuffer.toString('base64');
        const ext = path.extname(imagePath).toLowerCase();
        
        let mimeType = 'image/jpeg';
        if (ext === '.png') mimeType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
        else if (ext === '.webp') mimeType = 'image/webp';
        else if (ext === '.gif') mimeType = 'image/gif';
        
        return res.json({
          ...project,
          imageData: `data:${mimeType};base64,${base64Image}`
        });
      }
    }
    
    res.json(project);
  } catch (error) {
    console.error('Error reading project image:', error);
    res.status(500).json({ message: 'Error loading project', error: error.message });
  }
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
    // Log attempt for debugging
    console.log('Attempting to send email from:', email);
    
    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RECIPIENT_EMAIL || process.env.RESEND_FROM_EMAIL,
      // replyTo: email,
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
    });

    console.log('✅ Contact form submission successful:', { name, email, subject, emailId: data.id });

    res.status(200).json({
      message: 'Message received successfully',
      data: { name, email, subject }
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // Provide specific error message
    let errorMessage = 'Failed to send message. Please try again later.';
    let statusCode = 500;
    
    if (error.message?.includes('API key')) {
      errorMessage = 'Email service not configured. Please contact the administrator.';
      console.error('Missing or invalid RESEND_API_KEY');
    }
    
    res.status(statusCode).json({ 
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
