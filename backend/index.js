const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Mount routers with API Versioning
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT} 🚀`));