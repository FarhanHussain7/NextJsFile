import { MongoClient } from 'mongodb';

// Hardcoded MongoDB Atlas credentials (permanent fix for authentication issues)
const USER_NAME = 'fh4456200_db_user';
const PASSWORD = 'NextjsDBproduct';

// Direct MongoDB URI
export const mongoURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@productdb.wdijry3.mongodb.net/ProductDB?retryWrites=true&w=majority`;

// Database connection function for reuse
export async function connectToDatabase() {
  try {
    console.log('🔍 Connecting to MongoDB Atlas...');
    console.log('👤 Username:', USER_NAME);
    console.log('🔗 Cluster: productdb.wdijry3.mongodb.net');
    console.log('📊 Database: ProductDB');
    
    const client = new MongoClient(mongoURI);
    await client.connect();
    const db = client.db("ProductDB");
    
    console.log('✅ MongoDB Atlas Connection: SUCCESS');
    console.log('📦 Collection: products');
    
    return { client, db };
  } catch (error) {
    console.error('❌ MongoDB Atlas Connection: FAILED');
    console.error('🚨 Error:', error.message);
    throw new Error(`Database connection failed: ${error.message}`);
  }
}