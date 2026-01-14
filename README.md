# Portfolio Project

A modern, full-stack portfolio website built with React (Vite) and Node.js/Express.

## Features

- **Home**: Landing page with hero section and skills overview
- **Projects**: Showcase of your work with project cards
- **About**: Information about you, your experience, and interests
- **Contact**: Contact form for visitors to reach out

## Tech Stack

### Frontend

- React 19 with TypeScript
- Vite for fast development
- React Router for navigation
- Modern CSS with gradient designs

### Backend

- Node.js with Express
- CORS enabled for cross-origin requests
- RESTful API endpoints

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install frontend dependencies:

```bash
cd client
npm install
```

2. Install backend dependencies:

```bash
cd server
npm install
```

### Running the Application

1. Start the backend server (from the `server` directory):

```bash
npm run dev
```

The server will run on http://localhost:5000

2. Start the frontend (from the `client` directory):

```bash
npm run dev
```

The client will run on http://localhost:5173

## Project Structure

```
my-portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components (Navbar)
│   │   ├── pages/         # Page components (Home, Projects, About, Contact)
│   │   ├── App.tsx        # Main app component with routing
│   │   └── main.tsx       # Entry point
│   └── package.json
│
└── server/                # Backend Express server
    ├── index.js           # Server entry point with API routes
    ├── data.js            # Sample project data
    └── package.json
```

## API Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project by ID
- `POST /api/contact` - Submit contact form

## Customization

### Update Personal Information

1. **Home Page**: Edit `client/src/pages/Home.tsx` to update your name, title, and skills
2. **About Page**: Edit `client/src/pages/About.tsx` to add your experience and interests
3. **Contact Info**: Edit `client/src/pages/Contact.tsx` to update your contact details
4. **Projects**: Edit `server/data.js` to add your actual projects

### Styling

Each page has its own CSS file for easy customization:

- `Home.css`
- `Projects.css`
- `About.css`
- `Contact.css`
- `Navbar.css`

## Next Steps

1. Replace placeholder text with your actual information
2. Add your project images and links
3. Set up email service for the contact form (e.g., SendGrid, Nodemailer)
4. Add a database to store contact form submissions
5. Deploy to a hosting service (Vercel, Netlify, Heroku, etc.)

## License

MIT
