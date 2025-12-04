# CLAUDE.md - AI Assistant Guide for TalentPro

This document provides comprehensive guidance for AI assistants working on the TalentPro talent acquisition website codebase.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture Summary](#architecture-summary)
3. [Directory Structure](#directory-structure)
4. [Tech Stack](#tech-stack)
5. [Development Workflows](#development-workflows)
6. [Coding Conventions](#coding-conventions)
7. [Component Patterns](#component-patterns)
8. [API Patterns](#api-patterns)
9. [Styling Conventions](#styling-conventions)
10. [Git Workflow](#git-workflow)
11. [Common Tasks](#common-tasks)
12. [Important Gotchas](#important-gotchas)

---

## Project Overview

**TalentPro** is a full-stack talent acquisition and recruitment website built with React and Node.js. It features a modern, responsive UI with job listings, service information, and contact functionality.

**Key Features:**
- Multi-page React SPA with client-side routing
- RESTful API backend for jobs and contact forms
- Responsive design with mobile-first approach
- Dynamic job filtering system
- Professional recruitment service showcase

**Current State:**
- Mock data implementation (no database yet)
- Ready for database integration
- Contact form logs submissions (no email/CRM yet)
- No authentication/authorization

---

## Architecture Summary

### Monorepo Structure
```
Root (workspace coordinator)
├── client/  (React SPA)
└── server/  (Express API)
```

### Frontend Architecture
- **Framework:** React 18 with functional components and hooks
- **Routing:** React Router v6 (BrowserRouter)
- **HTTP Client:** Axios
- **Styling:** Custom CSS with design system
- **State Management:** Local component state (useState/useEffect)

### Backend Architecture
- **Framework:** Express.js
- **Architecture:** MVC-like (models, routes, controllers)
- **Data Storage:** In-memory arrays (temporary)
- **Middleware:** CORS, body-parser
- **API Design:** RESTful endpoints

### Data Flow
```
User → React Component → Axios → Express Route → Controller → Model → Response
```

---

## Directory Structure

```
/home/user/website/
├── client/                              # React frontend
│   ├── public/
│   │   └── index.html                   # HTML entry point
│   ├── src/
│   │   ├── components/                  # Reusable components
│   │   │   ├── Navbar.js               # Main navigation with hamburger menu
│   │   │   └── Footer.js               # Site footer
│   │   ├── pages/                       # Page-level components
│   │   │   ├── Home.js                 # Landing page (hero, features, stats, CTA)
│   │   │   ├── About.js                # Company info (story, mission, values, team)
│   │   │   ├── Services.js             # 6 service offerings
│   │   │   ├── Jobs.js                 # Job board with filtering
│   │   │   └── Contact.js              # Contact form with validation
│   │   ├── styles/                      # CSS modules (one per component/page)
│   │   │   ├── index.css               # Global styles + CSS variables
│   │   │   ├── App.css                 # Main layout
│   │   │   ├── Navbar.css              # Navigation styles
│   │   │   ├── Footer.css              # Footer styles
│   │   │   ├── Home.css                # Home page sections
│   │   │   ├── About.css               # About page layout
│   │   │   ├── Services.css            # Service cards
│   │   │   ├── Jobs.css                # Job listings + filters
│   │   │   └── Contact.css             # Contact form styles
│   │   ├── App.js                       # Router configuration
│   │   └── index.js                     # React DOM entry
│   └── package.json                     # Frontend dependencies
│
├── server/                              # Node.js backend
│   ├── src/
│   │   ├── controllers/                 # Request handlers
│   │   │   ├── jobsController.js       # Jobs CRUD logic
│   │   │   └── contactController.js    # Contact form handler
│   │   ├── models/                      # Data models
│   │   │   └── jobs.js                 # Mock job data (6 jobs)
│   │   ├── routes/                      # API route definitions
│   │   │   ├── jobs.js                 # /api/jobs routes
│   │   │   └── contact.js              # /api/contact routes
│   │   └── server.js                    # Express app initialization
│   ├── .env.example                     # Environment variable template
│   └── package.json                     # Backend dependencies
│
├── package.json                         # Root workspace scripts
├── README.md                            # User-facing documentation
├── CLAUDE.md                            # This file - AI assistant guide
└── .gitignore                           # Git ignore rules
```

---

## Tech Stack

### Frontend Dependencies
```json
{
  "react": "^18.2.0",              // UI library
  "react-dom": "^18.2.0",          // DOM renderer
  "react-router-dom": "^6.20.0",   // Client-side routing
  "axios": "^1.6.2",               // HTTP client
  "react-scripts": "5.0.1"         // Create React App toolchain
}
```

### Backend Dependencies
```json
{
  "express": "^4.18.2",            // Web framework
  "cors": "^2.8.5",                // Cross-origin support
  "dotenv": "^16.3.1",             // Environment variables
  "body-parser": "^1.20.2"         // Request parsing
}
```

### Development Tools
```json
{
  "concurrently": "^8.2.2",        // Run multiple scripts (root)
  "nodemon": "^3.0.2"              // Auto-restart server (server)
}
```

---

## Development Workflows

### Initial Setup
```bash
# Install all dependencies (root, client, server)
npm run install-all

# This runs:
# npm install && cd client && npm install && cd ../server && npm install
```

### Running the Application

#### Development (Recommended)
```bash
# From root directory - runs both servers concurrently
npm run dev

# This starts:
# - React dev server: http://localhost:3000
# - Express API server: http://localhost:5000
```

#### Individual Services
```bash
# React frontend only
npm run client
# OR
cd client && npm start

# Express backend only
npm run server
# OR
cd server && npm run dev
```

### Building for Production
```bash
# Frontend build
cd client
npm run build
# Creates optimized build in client/build/

# Backend production
cd server
npm start  # Runs without nodemon
```

### Environment Variables
Create `server/.env` from template:
```bash
cp server/.env.example server/.env
```

Required variables:
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

### Proxy Configuration
The React dev server proxies API requests to backend:
- `client/package.json` has `"proxy": "http://localhost:5000"`
- All `/api/*` requests are forwarded to Express server
- No CORS issues during development

---

## Coding Conventions

### File Naming
- **Components:** PascalCase (`Navbar.js`, `Home.js`)
- **Styles:** PascalCase matching component (`Navbar.css`, `Home.css`)
- **Controllers:** camelCase + Controller suffix (`jobsController.js`)
- **Routes:** lowercase or camelCase (`jobs.js`, `contact.js`)
- **Models:** lowercase (`jobs.js`)

### Variable Naming
- **React state:** camelCase (`jobs`, `setJobs`, `loading`, `formData`)
- **Props:** camelCase (`userId`, `onSubmit`, `isActive`)
- **Functions:** camelCase (`fetchJobs`, `handleSubmit`, `getAllJobs`)
- **Constants:** UPPER_SNAKE_CASE for config, camelCase for local constants
- **Environment variables:** UPPER_SNAKE_CASE (`PORT`, `NODE_ENV`)

### CSS Class Naming
- **Kebab-case:** `.navbar`, `.job-card`, `.contact-form`
- **BEM-like structure:** `.nav-link`, `.nav-link.active`
- **Semantic names:** `.hero`, `.features`, `.cta`, `.services`
- **Avoid generic names:** Use `.job-filter-btn` not `.btn-1`

### Code Organization

#### React Components Structure
```javascript
// 1. Imports
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './ComponentName.css';

// 2. Component definition
function ComponentName() {
  // 3. State declarations
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 4. Hooks (useEffect, useNavigate, etc.)
  useEffect(() => {
    fetchData();
  }, []);

  // 5. Event handlers
  const handleClick = () => { };

  // 6. Helper functions
  const fetchData = async () => { };

  // 7. Return JSX
  return (
    <div className="component-name">
      {/* Content */}
    </div>
  );
}

// 8. Export
export default ComponentName;
```

#### Controller Structure
```javascript
// 1. Imports
const Model = require('../models/modelName');

// 2. Controller functions
const getAllItems = (req, res) => {
  try {
    // Logic
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Exports
module.exports = {
  getAllItems,
  getItemById,
  createItem
};
```

### Import Order
1. React/external libraries
2. React Router hooks
3. Axios/HTTP clients
4. Local components
5. Styles (always last)

### Comments
- **Do:** Explain complex logic, mark future enhancements, document API responses
- **Don't:** State the obvious, leave commented-out code, write TODO without context

```javascript
// Good:
// Filter jobs by type. If no filter is selected, show all jobs
const filteredJobs = filter === 'all'
  ? jobs
  : jobs.filter(job => job.type.toLowerCase() === filter);

// Future: Replace with database query when backend is connected
const mockJobs = [...];

// Bad:
// set jobs to filtered jobs
const filteredJobs = ...;

// TODO: fix this
```

---

## Component Patterns

### Page Components

All page components follow this structure:

```javascript
import React from 'react';
import './PageName.css';

function PageName() {
  return (
    <div className="page-name">
      <section className="hero">
        <h1>Page Title</h1>
        <p className="lead">Description</p>
      </section>

      <section className="content">
        {/* Main content */}
      </section>
    </div>
  );
}

export default PageName;
```

### State Management Pattern

#### Fetching Data
```javascript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/endpoint');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      // Set fallback data or error state
      setLoading(false);
    }
  };

  fetchData();
}, []); // Empty dependency array - fetch once on mount
```

#### Form Handling
```javascript
const [formData, setFormData] = useState({
  field1: '',
  field2: '',
  field3: ''
});
const [status, setStatus] = useState('idle'); // idle, sending, success, error

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');

  try {
    await axios.post('/api/endpoint', formData);
    setStatus('success');
    setFormData({ field1: '', field2: '', field3: '' }); // Reset
  } catch (error) {
    setStatus('error');
  }
};
```

### Conditional Rendering Patterns

```javascript
// Loading state
{loading && <div className="loading">Loading...</div>}

// Conditional content
{!loading && data.length === 0 && (
  <p>No results found.</p>
)}

// Dynamic classes
<button
  className={`btn ${active ? 'active' : ''}`}
  disabled={loading}
>
  Submit
</button>

// Status-based rendering
{status === 'success' && (
  <div className="message success">
    <p>Success message</p>
  </div>
)}

{status === 'error' && (
  <div className="message error">
    <p>Error message</p>
  </div>
)}
```

### Navbar Pattern (Active Link Detection)

```javascript
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/"
        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
      >
        Home
      </Link>
    </nav>
  );
}
```

### Responsive Menu Pattern

```javascript
const [menuOpen, setMenuOpen] = useState(false);

return (
  <nav className="navbar">
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
      {/* Menu items */}
    </ul>
  </nav>
);
```

---

## API Patterns

### Backend Routes Structure

**File: `server/src/routes/resourceName.js`**
```javascript
const express = require('express');
const router = express.Router();
const controller = require('../controllers/resourceController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
```

**Register in `server.js`:**
```javascript
const resourceRouter = require('./routes/resourceName');
app.use('/api/resource', resourceRouter);
```

### Controller Patterns

#### GET All Items
```javascript
const getAllItems = (req, res) => {
  try {
    const items = Model.getAll(); // Or from database
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

#### GET Single Item
```javascript
const getItemById = (req, res) => {
  try {
    const item = Model.findById(parseInt(req.params.id));

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

#### POST Create Item
```javascript
const createItem = (req, res) => {
  try {
    const { field1, field2, field3 } = req.body;

    // Validation
    if (!field1 || !field2) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['field1', 'field2']
      });
    }

    const newItem = {
      id: Model.length + 1,
      field1,
      field2,
      field3,
      createdAt: new Date().toISOString()
    };

    Model.push(newItem);

    res.status(201).json({
      success: true,
      message: 'Item created successfully',
      data: newItem
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### Response Formats

#### Success Responses
```javascript
// Simple data return
res.json(data);

// Structured success
res.status(200).json({
  success: true,
  message: 'Operation completed',
  data: result
});

// Created resource
res.status(201).json({
  success: true,
  message: 'Resource created',
  data: newResource
});
```

#### Error Responses
```javascript
// 400 - Bad Request (validation error)
res.status(400).json({
  error: 'Missing required fields',
  required: ['field1', 'field2']
});

// 404 - Not Found
res.status(404).json({
  error: 'Resource not found'
});

// 500 - Server Error
res.status(500).json({
  error: error.message
});
```

### Frontend API Calls

#### GET Request
```javascript
const fetchData = async () => {
  try {
    const response = await axios.get('/api/resource');
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error (show message, use fallback data, etc.)
  }
};
```

#### POST Request
```javascript
const submitData = async (formData) => {
  try {
    const response = await axios.post('/api/resource', formData);
    console.log('Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};
```

### Current API Endpoints

```
GET    /api/jobs           - Get all jobs
GET    /api/jobs/:id       - Get job by ID
POST   /api/jobs           - Create new job
POST   /api/contact        - Submit contact form
GET    /api/health         - Health check endpoint
```

---

## Styling Conventions

### CSS Variables (Design System)

All global styles defined in `client/src/styles/index.css`:

```css
:root {
  /* Primary Colors */
  --primary-color: #2563eb;        /* Main brand blue - buttons, links */
  --secondary-color: #1e40af;      /* Darker blue - hover states */
  --accent-color: #3b82f6;         /* Lighter blue - accents */

  /* Neutral Colors */
  --dark-color: #1f2937;           /* Dark backgrounds, headings */
  --light-color: #f9fafb;          /* Light backgrounds, cards */
  --text-color: #374151;           /* Body text */
  --border-color: #e5e7eb;         /* Borders, dividers */

  /* Semantic Colors */
  --success-color: #10b981;        /* Success messages, checkmarks */
  --error-color: #ef4444;          /* Error messages, validation */
}
```

### Global Utility Classes

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.lead {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
}
```

### Layout Patterns

#### Hero Section (Used on multiple pages)
```css
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
}
```

#### Grid Layouts
```css
/* Auto-responsive grid - no media queries needed */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.job-listings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}
```

#### Card Pattern
```css
.card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}
```

### Responsive Breakpoints

Primary breakpoint: **768px** (tablets and below)

```css
/* Desktop first approach */
.element {
  /* Desktop styles */
}

@media (max-width: 768px) {
  .element {
    /* Mobile/tablet styles */
  }
}
```

### Hover Effects Standard

```css
/* All interactive elements should have hover effects */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

/* Transition should be consistent */
transition: all 0.3s ease;
```

### Form Styling Pattern

```css
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: var(--dark-color);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}
```

---

## Git Workflow

### Branch Naming Convention

```
feature/feature-name       # New features
bugfix/issue-description   # Bug fixes
hotfix/critical-issue      # Production hotfixes
refactor/component-name    # Code refactoring
docs/update-description    # Documentation updates
```

### Commit Message Format

Use conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples:**
```bash
feat(jobs): add job filtering by salary range
fix(contact): resolve form validation error on empty phone field
docs(readme): update installation instructions
refactor(navbar): simplify menu toggle logic
style(home): adjust hero section padding for mobile
```

### Development Workflow

```bash
# 1. Create feature branch
git checkout -b feature/job-search

# 2. Make changes and commit frequently
git add .
git commit -m "feat(jobs): add search input component"
git commit -m "feat(jobs): implement search filtering logic"

# 3. Push to remote
git push -u origin feature/job-search

# 4. Create pull request on GitHub
# 5. After review and approval, merge to main
```

### Pre-Push Checklist

Before pushing code, ensure:
- [ ] Code runs without errors (`npm run dev`)
- [ ] No console errors in browser
- [ ] Changes are tested in both desktop and mobile views
- [ ] No hardcoded values (use environment variables)
- [ ] No sensitive data (API keys, passwords)
- [ ] Code follows project conventions
- [ ] Related CSS is updated
- [ ] Console.logs removed (except intentional logging)

---

## Common Tasks

### Adding a New Page

1. **Create page component:**
```bash
# File: client/src/pages/NewPage.js
```
```javascript
import React from 'react';
import './NewPage.css';

function NewPage() {
  return (
    <div className="new-page">
      <section className="hero">
        <h1>Page Title</h1>
        <p className="lead">Description</p>
      </section>
    </div>
  );
}

export default NewPage;
```

2. **Create stylesheet:**
```bash
# File: client/src/styles/NewPage.css
```
```css
.new-page {
  /* Page styles */
}
```

3. **Add route in App.js:**
```javascript
import NewPage from './pages/NewPage';
import './styles/NewPage.css';

// Inside Routes component:
<Route path="/newpage" element={<NewPage />} />
```

4. **Add navigation link:**
Update `Navbar.js`:
```javascript
<Link
  to="/newpage"
  className={`nav-link ${location.pathname === '/newpage' ? 'active' : ''}`}
>
  New Page
</Link>
```

Update `Footer.js` if needed.

### Adding a New API Endpoint

1. **Create controller function:**
```javascript
// File: server/src/controllers/resourceController.js
const newFunction = (req, res) => {
  try {
    // Logic here
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { newFunction };
```

2. **Add route:**
```javascript
// File: server/src/routes/resource.js
router.get('/endpoint', controller.newFunction);
```

3. **Register router in server.js (if new resource):**
```javascript
const resourceRouter = require('./routes/resource');
app.use('/api/resource', resourceRouter);
```

4. **Test endpoint:**
```bash
# In terminal or Postman:
curl http://localhost:5000/api/resource/endpoint
```

5. **Call from frontend:**
```javascript
const fetchData = async () => {
  const response = await axios.get('/api/resource/endpoint');
  setData(response.data);
};
```

### Adding a New Job Field

1. **Update model:**
```javascript
// File: server/src/models/jobs.js
{
  id: 1,
  title: 'Job Title',
  // ... existing fields
  newField: 'value'  // Add here
}
```

2. **Update controller validation:**
```javascript
// File: server/src/controllers/jobsController.js
const { newField } = req.body;
```

3. **Update frontend display:**
```javascript
// File: client/src/pages/Jobs.js
<div className="job-card">
  {/* ... existing fields */}
  <p className="job-new-field">{job.newField}</p>
</div>
```

4. **Update styles:**
```css
/* File: client/src/styles/Jobs.css */
.job-new-field {
  /* Styles for new field */
}
```

### Adding Form Validation

1. **Add validation logic:**
```javascript
const validateForm = () => {
  const errors = {};

  if (!formData.email.includes('@')) {
    errors.email = 'Invalid email address';
  }

  if (formData.phone.length < 10) {
    errors.phone = 'Phone number must be at least 10 digits';
  }

  return errors;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return;
  }

  // Submit form
};
```

2. **Display errors:**
```javascript
{errors.email && (
  <span className="error-message">{errors.email}</span>
)}
```

3. **Style error states:**
```css
.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 5px;
}

input.error {
  border-color: var(--error-color);
}
```

### Integrating Database

When ready to add database:

1. **Install database driver:**
```bash
cd server
npm install pg  # PostgreSQL
# OR
npm install mongoose  # MongoDB
```

2. **Update `.env`:**
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=talentpro
DB_USER=dbuser
DB_PASS=dbpassword
```

3. **Create database connection:**
```javascript
// File: server/src/config/database.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

module.exports = pool;
```

4. **Update models to use database:**
```javascript
// File: server/src/models/jobs.js
const pool = require('../config/database');

const getAllJobs = async () => {
  const result = await pool.query('SELECT * FROM jobs');
  return result.rows;
};

module.exports = { getAllJobs };
```

5. **Update controllers to use async models:**
```javascript
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Model.getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

---

## Important Gotchas

### 1. API Proxy in Development

The React dev server proxies requests to the backend:
- **Works:** `axios.get('/api/jobs')` in development
- **Production:** Must use full URL or configure proxy at deployment level
- **Proxy config:** `client/package.json` → `"proxy": "http://localhost:5000"`

### 2. Port Conflicts

If ports 3000 or 5000 are in use:
- **React:** Set `PORT=3001` in client terminal before `npm start`
- **Express:** Change `PORT` in `server/.env`

### 3. Mock Data vs. Database

Currently using in-memory arrays:
- Data is lost on server restart
- `createJob` increments ID but doesn't persist
- Contact form submissions are only logged

When integrating database:
- Update all models to use database queries
- Add database connection pooling
- Implement proper error handling for DB operations

### 4. CORS Configuration

Current CORS setup allows all origins:
```javascript
app.use(cors());
```

**Production:** Restrict to specific origins:
```javascript
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));
```

### 5. Environment Variables

- **Never commit `.env` files**
- Always update `.env.example` with new variables
- Load environment variables in server:
  ```javascript
  require('dotenv').config();
  ```

### 6. CSS Specificity

CSS files are imported globally:
- Use specific class names to avoid conflicts
- Prefix with component name: `.jobs-header`, `.contact-form`
- Avoid generic names: `.container` is ok (utility), `.header` is not (too generic)

### 7. React Router v6 Changes

This project uses React Router v6:
- Use `<Routes>` not `<Switch>`
- Use `element` prop not `component`:
  ```javascript
  <Route path="/" element={<Home />} />  // ✓ Correct
  <Route path="/" component={Home} />    // ✗ Wrong (v5 syntax)
  ```
- Use `useNavigate()` not `useHistory()`

### 8. State Management

No global state management (Redux, Context):
- Keep state local to components
- Pass props down for shared state
- Lift state up to common ancestor if needed
- Consider Context API for deeply nested props

### 9. Job Filtering Logic

Current filter implementation:
```javascript
filter === 'all'
  ? jobs
  : jobs.filter(job => job.type.toLowerCase() === filter)
```

**Important:**
- Filter value must match job type exactly (case-insensitive)
- Job types: "Full-time", "Contract", "Remote"
- Filter values: "fulltime", "contract", "remote" (lowercase)

### 10. Contact Form Status

The contact form has 4 states:
1. `idle` - Initial state
2. `sending` - During submission
3. `success` - After successful submission
4. `error` - If submission fails

Always handle all states in UI:
```javascript
{status === 'sending' && <p>Sending...</p>}
{status === 'success' && <p>Success!</p>}
{status === 'error' && <p>Error occurred</p>}
```

### 11. Responsive Design Testing

Test at these breakpoints:
- **Mobile:** 375px, 414px (iPhone)
- **Tablet:** 768px, 1024px (iPad)
- **Desktop:** 1280px, 1920px

Key responsive elements:
- Hamburger menu appears < 768px
- Grid columns stack on mobile
- Font sizes reduce on mobile
- Padding/spacing adjusts

### 12. Future Enhancements Marked in Code

Look for these comments when implementing features:
```javascript
// TODO: Add database integration
// TODO: Send email notification
// TODO: Integrate with CRM
// Future: Add authentication
```

These indicate planned features with integration points.

---

## Quick Reference

### File Locations

**Need to update navigation?**
- `client/src/components/Navbar.js`
- `client/src/components/Footer.js`

**Need to add/modify pages?**
- `client/src/pages/*`
- `client/src/App.js` (routes)

**Need to add/modify API endpoints?**
- `server/src/routes/*` (route definitions)
- `server/src/controllers/*` (logic)
- `server/src/models/*` (data)

**Need to update styles?**
- `client/src/styles/index.css` (global/variables)
- `client/src/styles/ComponentName.css` (component-specific)

**Need to modify job data?**
- `server/src/models/jobs.js`

### Commands Quick Reference

```bash
# Development
npm run dev              # Run both servers
npm run client           # React only
npm run server           # Express only

# Installation
npm run install-all      # Install all dependencies

# Production
cd client && npm run build    # Build frontend
cd server && npm start        # Run backend in production

# Individual services
cd client && npm start        # React dev server
cd server && npm run dev      # Express with nodemon
```

### Color Variables Quick Reference

```css
var(--primary-color)     /* #2563eb - Main blue */
var(--secondary-color)   /* #1e40af - Dark blue */
var(--dark-color)        /* #1f2937 - Dark text */
var(--light-color)       /* #f9fafb - Light bg */
var(--success-color)     /* #10b981 - Success */
var(--error-color)       /* #ef4444 - Error */
```

### Axios Quick Reference

```javascript
// GET
const response = await axios.get('/api/endpoint');
const data = response.data;

// POST
const response = await axios.post('/api/endpoint', { data });

// With error handling
try {
  const response = await axios.get('/api/endpoint');
  setData(response.data);
} catch (error) {
  console.error('Error:', error);
}
```

---

## Additional Notes for AI Assistants

### When Making Changes

1. **Always read files before editing** - Understand current implementation
2. **Follow existing patterns** - Match the style and structure already in place
3. **Test changes** - Run `npm run dev` and verify in browser
4. **Update related files** - Changing API? Update frontend calls too
5. **Maintain consistency** - Use same naming, structure, and patterns

### When User Asks For...

**"Add authentication"**
- This requires database integration first
- Implement: JWT tokens, bcrypt for passwords, protected routes
- Update: Server middleware, frontend auth context, login/register pages

**"Add database"**
- Follow "Integrating Database" section above
- Update all models and controllers
- Add connection pooling and error handling

**"Make it responsive"**
- Already responsive! Check existing patterns
- Test at 768px breakpoint
- Use existing grid patterns for new components

**"Add a feature"**
- Check if similar feature exists (reuse patterns)
- Follow component/page structure above
- Add route, component, styles, API endpoint if needed

**"Fix a bug"**
- Read the affected file(s) completely
- Check related files (if bug is in frontend, check backend too)
- Test the fix in browser
- Ensure fix doesn't break other functionality

### Code Quality Standards

- **DRY:** Don't Repeat Yourself - extract repeated code to functions/components
- **KISS:** Keep It Simple - avoid over-engineering
- **Readable:** Code should be self-documenting with clear names
- **Consistent:** Follow existing patterns and conventions
- **Tested:** Verify changes work in browser before committing

---

**Last Updated:** 2025-12-04
**Project Version:** 1.0.0
**Maintained By:** Development Team

For questions or clarifications about this guide, refer to the codebase or update this document with new patterns as they emerge.
