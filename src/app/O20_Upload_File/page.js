"use client";

import { useRef } from "react";

export default function UploadFile() {
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("Selected file:", file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/O9_API/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Upload result:", result);

      if (result.success) {
        alert(result.message); // ✅ Success alert
        fileInputRef.current.value = ""; // ✅ Clear input field
      } else {
        alert("Upload failed: " + result.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Unexpected error occurred while uploading.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          📁 Upload a File
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 p-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
          >
            🚀 Upload File
          </button>
        </form>
      </div>
    </div>
  );
}