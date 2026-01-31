// Make sure the path is correct relative to this file
import getUser from "../../../../service/getUser.js";

export default async function Page({ params }) {
    const { userId } = await params;   // ✅ await the params promise for Next.js 15+
    const users = await getUser();
    const userData = users[userId - 1];  // ✅ index properly

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">User Details</h1>
                <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="text-xl font-semibold text-gray-700">User ID</h2>
                        <p className="text-lg text-gray-600">{userData.id}</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                        <h2 className="text-xl font-semibold text-gray-700">Name</h2>
                        <p className="text-lg text-gray-600">{userData.name}</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                        <h2 className="text-xl font-semibold text-gray-700">Website</h2>
                        <p className="text-lg text-gray-600">{userData.website}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <a 
                        href="/O10_Static_Site_Generation" 
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        ← Back to User List
                    </a>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const users = await getUser();   // ✅ consistent function call
    return users.map(user => ({
        userId: user.id.toString()
    }));
}