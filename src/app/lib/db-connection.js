import mongoose from 'mongoose';
import { mongoURI } from '@/app/util/MongoConnection.js';

// Global connection state
let connectionPromise = null;
let isConnected = false;

// Initialize database connection
export async function initializeDatabase() {
  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = mongoose.connect(mongoURI)
    .then(() => {
      isConnected = true;
      console.log('🚀 Database connection pool initialized');
    })
    .catch((error) => {
      console.error('❌ Database connection failed:', error.message);
      isConnected = false;
      connectionPromise = null;
    });

  return connectionPromise;
}

// Get database connection (lazy initialization)
export async function getDatabaseConnection() {
  if (!isConnected) {
    await initializeDatabase();
  }
  return mongoose.connection;
}

// Close database connection
export async function closeDatabaseConnection() {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.close();
    isConnected = false;
    connectionPromise = null;
    console.log('🔌 Database connection closed');
  }
}

// Connection status checker
export function isDatabaseConnected() {
  return isConnected;
}
