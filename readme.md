# Full-Stack Task Management API (Intern Assignment)

[cite_start]This project is a scalable REST API with authentication and role-based access, built as part of the Backend Developer (Intern) assignment[cite: 1, 2]. [cite_start]It features a secure Node.js backend and a simple React.js frontend UI designed to demonstrate and interact with the APIs[cite: 5].

---

## ✨ Core Features

### [cite_start]Backend (Primary Focus) [cite: 10]
* [cite_start]**Authentication**: Secure user registration and login APIs with password hashing (`bcryptjs`) and JWT authentication[cite: 11].
* [cite_start]**Role-Based Access Control**: Differentiates between `user` and `admin` roles, allowing for protected actions[cite: 12].
* [cite_start]**CRUD Operations**: Full Create, Read, Update, and Delete APIs for a secondary "Task" entity[cite: 13].
* [cite_start]**API Best Practices**: Implemented API versioning (`/api/v1/`), robust error handling, and input validation with `express-validator`[cite: 14].

### [cite_start]Frontend (Supportive) [cite: 17]
* [cite_start]**Tech Stack**: Simple and functional UI built with React.js[cite: 18].
* [cite_start]**User Interface**: Allows users to register, log in, and access a protected dashboard[cite: 20, 22].
* [cite_start]**Task Management**: Users can perform CRUD actions on their tasks directly from the UI[cite: 23].
* [cite_start]**API Feedback**: Displays clear error and success messages from API responses to the user[cite: 24].

---

## 🛠️ Tech Stack

* **Frontend**: React.js, React Router, Axios
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Authentication**: JSON Web Tokens (JWT), bcryptjs
* **Deployment**: Backend on Render, Frontend on Netlify

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js installed on your machine.
* A free MongoDB Atlas account to get a database connection string.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Setup the Backend:**
    ```sh
    # Navigate to the backend folder
    cd backend

    # Install NPM packages
    npm install

    # Create a .env file in the backend folder
    touch .env
    ```
    Add the following environment variables to your `.env` file:
    ```env
    PORT=5000
    MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
    JWT_SECRET=YOUR_SUPER_SECRET_AND_RANDOM_KEY
    ```
    Now, you can start the backend server:
    ```sh
    npm start
    ```
    The API will be running on `http://localhost:5000`.

3.  **Setup the Frontend:**
    ```sh
    # Navigate to the frontend folder from the root directory
    cd frontend

    # Install NPM packages
    npm install

    # Start the React development server
    npm start
    ```
    The frontend will open and run on `http://localhost:3000`.

---

## 🔌 API Endpoints

The API is versioned under `/api/v1/`.

### Auth Routes (`/auth`)

| Method | Endpoint          | Description         | Protected |
| :----- | :---------------- | :------------------ | :-------- |
| `POST` | `/register`       | Register a new user | No        |
| `POST` | `/login`          | Log in a user       | No        |

### Task Routes (`/tasks`)

| Method   | Endpoint | Description                          | Protected |
| :------- | :------- | :----------------------------------- | :-------- |
| `GET`    | `/`      | Get all tasks for the logged-in user | Yes       |
| `POST`   | `/`      | Create a new task                    | Yes       |
| `PUT`    | `/:id`   | Update a user's own task             | Yes       |
| `DELETE` | `/:id`   | Delete a task (user or admin)        | Yes       |

---

## 🌐 Live Demo

* **Frontend UI**: `[Link to your deployed Netlify site]`
* **Backend API**: `[Link to your deployed Render service]`