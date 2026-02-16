// src/app/9-Static-API/page.js
import DeletePage from "@/app/O16_Forms_Http_Request/O2_Delete/page";
import Link from "next/link";

async function getUsers() {
  const res = await fetch("http://localhost:3000/O9_Static_API/staticRouteApi", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Users List</h1>
          <p className="text-gray-600">Manage and view all users</p>
        </div>
        
        <div className="grid gap-4 md:gap-6">
          {users.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Link 
                  href={`/O9_Static_API/api/${item.id}`}
                  className="text-xl font-semibold text-white hover:text-black transition-colors duration-200 truncate"
                >
                  {item.name}
                </Link>
                
                <div className="flex gap-3 flex-wrap">
                  <Link 
                    href={`/O9_Static_API/api/${item.id}/update`}
                    className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
                  >
                    Update
                  </Link>
                  <div className="inline-flex">
                    <DeletePage id={item.id}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {users.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No users found</p>
          </div>
        )}
      </div>
    </div>
  );
}