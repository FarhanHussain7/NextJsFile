"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const id = params.id; // ✅ matches [id] folder

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [oldName, setOldName] = useState("");
  const [oldPhone, setOldPhone] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [oldAddress, setOldAddress] = useState("");

  useEffect(() => {
    if (id) {
      getUserDetails();
    }
  }, [id]);

  const getUserDetails = async () => {
    try {
      let res = await fetch(`http://localhost:3000/O9_Static_API/staticRouteApi/${id}`);
      let data = await res.json();

      // store old values for placeholders
      setOldName(data.name ?? "");
      setOldPhone(data.phone?.toString() ?? "");
      setOldEmail(data.email ?? "");
      setOldAddress(data.address ?? "");
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const UpdateDetails = async () => {
    try {
      let res = await fetch(`http://localhost:3000/O19_MongoAtlas/updateProduct/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, address }),
    });
      let data = await res.json();
      console.log("Update response:", data);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Update API Page for ID: {apiid}
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder={`Previous: ${oldName}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

            <input
            type="text"
            placeholder={`Previous: ${oldEmail}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <input
            type="text"
            placeholder={`Previous: ${oldPhone}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder={`Previous: ${oldAddress}`}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        

        </div>

        <button
          onClick={UpdateDetails}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}