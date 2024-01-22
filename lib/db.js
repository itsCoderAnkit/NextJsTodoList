// mongodb+srv://ankit:ankit@cluster0.wq5hkex.mongodb.net/TodoListDbName?retryWrites=true&w=majority


// db.js

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ankit:ankit@cluster0.wq5hkex.mongodb.net/TodoListDbName?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected  to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with an error
  }
};

export default connectDB;
