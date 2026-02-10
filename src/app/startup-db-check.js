import { connectToDatabase } from './util/MongoConnection.js';

// Run database connection check on application startup
async function startupDatabaseCheck() {
  console.log('🚀 Starting Next.js Application...');
  console.log('🔍 Checking MongoDB Atlas Connection...');
  
  try {
    const { client, db } = await connectToDatabase();
    console.log('✅ MongoDB Atlas Connection: SUCCESS');
    console.log('📊 Database:', db.databaseName);
    console.log('🔗 Cluster: productdb.wdijry3.mongodb.net');
    console.log('📦 Collection: products');
    await client.close();
    console.log('🔌 Database connection closed after check');
  } catch (error) {
    console.error('❌ MongoDB Atlas Connection: FAILED');
    console.error('🚨 Error:', error.message);
  }
}

// Run the check
startupDatabaseCheck();
