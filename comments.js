// Create web server application with express
// Create route to get comments from database
// Create route to add new comment to database

// Import express and create application
const express = require('express');
const app = express();

// Import body parser to parse request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import cors to allow cross-origin resource sharing
const cors = require('cors');
app.use(cors());

// Import mongoose to connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema for comments
// const commentSchema = new mongoose.Schema({
