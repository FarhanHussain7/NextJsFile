import { MongoClient } from 'mongodb';

const { USER_NAME, PASSWORD } = process.env;

// Updated MongoDB connection string with proper credentials
export const mongoURI = `mongodb+srv://fh4456200_db_user:NextjsDBproduct@productdb.wdijry3.mongodb.net/ProductDB?retryWrites=true&w=majority`;

// Database connection function for reuse
export async function connectToDatabase() {
  try {
    const client = new MongoClient(mongoURI);
    await client.connect();
    const db = client.db("ProductDB");
    return { client, db };
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error(`Database connection failed: ${error.message}`);
  }
}