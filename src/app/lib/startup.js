import { initializeDatabase } from './db-connection.js';

// Initialize database connection when the app starts
export default async function startup() {
  try {
    await initializeDatabase();
    console.log('✅ Application startup complete');
  } catch (error) {
    console.error('❌ Startup failed:', error.message);
  }
}
