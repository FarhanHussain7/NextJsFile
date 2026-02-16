// src/app/O9_Static_API/api/[apiid]/page.js
import { user } from '@/app/util/db';

// Function to get user by ID
async function getUser(id) {
  return user.find(u => u.id === parseInt(id));
}

export default async function Page({ params }) {
  const { apiid } = await params; // await the params promise

  if (!apiid) {
    return <h1>Missing user id</h1>;
  }

  const userData = await getUser(apiid);

  if (!userData) {
    return <h1>User not found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Details</h1>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold text-gray-700">Name</h2>
            <p className="text-lg text-gray-600">{userData.name}</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h2 className="text-xl font-semibold text-gray-700">Age</h2>
            <p className="text-lg text-gray-600">{userData.age}</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-xl font-semibold text-gray-700">Email</h2>
            <p className="text-lg text-gray-600">{userData.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <a 
            href="/O9_Static_API/api" 
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            ← Back to Users List
          </a>
        </div>
      </div>
    </div>
  );
}