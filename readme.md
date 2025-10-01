# 📌 Full-Stack Task Management API (Intern Assignment)

A **scalable REST API with authentication and role-based access** built as part of a Backend Developer assignment.  
Includes a **secure Node.js backend** and a **React.js frontend** to demonstrate and interact with the APIs.

---

## ✨ Features

### 🔐 Backend (Primary)
- **Authentication**: Secure user registration & login with **bcryptjs** and **JWT**.  
- **Role-Based Access**: Separate privileges for `user` and `admin`.  
- **Task CRUD**: Create, Read, Update, Delete tasks with access control.  
- **Best Practices**: API versioning (`/api/v1/`), validation with `express-validator`, and centralized error handling.  

### 💻 Frontend (Supportive)
- Built with **React.js + Axios + React Router**.  
- Users can **register, log in, and access a protected dashboard**.  
- Perform **CRUD operations on tasks** with real-time API feedback.  

---

## 🛠️ Tech Stack
- **Frontend**: React.js, React Router, Axios  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Auth**: JWT, bcryptjs  
- **Deployment**: Render (backend), Netlify (frontend)  

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed  
- MongoDB Atlas account (free tier works)  

### Installation

**Clone the repo:**
```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
Backend Setup:

bash
Copy code
cd backend
npm install
touch .env
.env file:

env
Copy code
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
JWT_SECRET=YOUR_SUPER_SECRET_RANDOM_KEY
Run backend:

bash
Copy code
npm start
API → http://localhost:5000

Frontend Setup:

bash
Copy code
cd frontend
npm install
npm start
Frontend → http://localhost:3000

🔌 API Endpoints
Auth Routes
Method	Endpoint	Description	Auth
POST	/register	Register new user	❌
POST	/login	Log in user	❌

Task Routes
Method	Endpoint	Description	Auth
GET	/	Get all tasks of logged-in user	✅
POST	/	Create new task	✅
PUT	/:id	Update own task	✅
DELETE	/:id	Delete task (user/admin)	✅

🌐 Live Demo
Frontend: Netlify Demo

Backend: Render API