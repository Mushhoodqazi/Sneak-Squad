// models/User.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
const Signupmodel=  mongoose.model('Signup', signupSchema);

export default Signupmodel;