const mongoose = require('mongoose');
const logger = require('./logger'); // This looks correct, but let me double-check the path

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bluegreen-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;