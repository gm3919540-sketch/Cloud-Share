loudShare Frontend

A modern full-stack cloud file-sharing platform frontend built using React.
CloudShare allows users to securely upload, manage, and share files with authentication, credit management, and payment integration support.
 Features
Secure user authentication
File upload and sharing system
Modern responsive UI
Credit/subscription management
Payment integration support
REST API communication
Global state management using Context API
Protected routes
Dynamic frontend rendering
🛠 Tech Stack
Frontend
React
React Router DOM
Axios
Context API
Tailwind CSS 
Clerk Authentication
Backend
Spring Boot
Spring Security
MongoDB
JWT Authentication
Razorpay Integration

src/
│
├── components/      # Reusable UI components
├── pages/           # Application pages
├── context/         # Global state management
├── assets/          # Images and static files
├── api/             # API handling logic
├── App.jsx
└── main.jsx

 Authentication Flow
User logs in using Clerk authentication
JWT/auth token is attached with API requests
Protected routes are secured
Backend validates user authentication
Payment Integration

CloudShare integrates with Razorpay for:

subscription handling
credit management
secure payment verification
 API Communication

The frontend communicates with the backend using REST APIs through Axios.

Main Functionalities
File Upload

Users can upload and manage files securely.

File Sharing

Files can be shared using generated links.

Credit Management

Users can manage credits/subscriptions after successful payments.

Secure Access

Protected routes ensure only authenticated users can access private features.
What I Learned

Through this project, I gained hands-on experience in:

full-stack application development
REST API integration
frontend-backend communication
authentication & authorization
payment gateway integration
React state management
debugging real-world applications

Backend link ->https://github.com/gm3919540-sketch/CloudShareBackend


