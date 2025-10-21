# TalentPro - Talent Acquisition Website

A modern, full-stack talent acquisition and recruitment website built with React.js and Node.js.

## Features

- **Modern UI/UX**: Clean, professional design with responsive layouts
- **Multiple Pages**: Home, About, Services, Jobs, and Contact pages
- **Job Listings**: Dynamic job board with filtering capabilities
- **Contact Form**: Integrated contact form for inquiries
- **REST API**: Backend API for managing jobs and contact submissions
- **Responsive Design**: Mobile-friendly across all devices

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- Custom CSS for styling

### Backend
- Node.js
- Express.js
- RESTful API architecture

## Project Structure

```
talent-acquisition-website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   └── server.js
│   └── package.json
└── package.json           # Root package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd talent-acquisition-website
```

2. Install all dependencies (root, client, and server)
```bash
npm run install-all
```

Or install manually:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Running the Application

#### Development Mode (Recommended)

Run both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- React development server on http://localhost:3000
- Node.js backend server on http://localhost:5000

#### Run Separately

**Frontend only:**
```bash
npm run client
```

**Backend only:**
```bash
npm run server
```

Or from their respective directories:

**Client:**
```bash
cd client
npm start
```

**Server:**
```bash
cd server
npm run dev
```

## API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs` - Create new job (admin)

### Contact
- `POST /api/contact` - Submit contact form

### Health Check
- `GET /api/health` - Server health check

## Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
NODE_ENV=development
```

See `server/.env.example` for all available configuration options.

## Pages

1. **Home** - Hero section, features, statistics, and call-to-action
2. **About** - Company story, mission, values, and team information
3. **Services** - Detailed service offerings including:
   - Executive Search
   - Permanent Recruitment
   - Contract Staffing
   - RPO (Recruitment Process Outsourcing)
   - Talent Consulting
   - Global Recruitment
4. **Jobs** - Job listings with filtering by type (Full-time, Contract, Remote)
5. **Contact** - Contact information and inquiry form

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication and authorization
- [ ] Admin dashboard for job management
- [ ] Email notifications
- [ ] Job application system
- [ ] Resume upload functionality
- [ ] Advanced search and filtering
- [ ] Blog section
- [ ] Testimonials page

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact us at info@talentpro.com
