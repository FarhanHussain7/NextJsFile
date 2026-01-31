"use client";
// app/study/[...lecture]/page.js
// Lecture page handling dynamic nested routes for lectures
// It is using useParams hook to access the dynamic route parameters.
import { useParams } from "next/navigation";

export default function LecturePage() {
  const params = useParams(); // ✅ synchronous hook
  console.log("Lecture params:", params);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lecture Page</h1>
      <div className="space-y-4">
        <p className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-blue-600">Lecture ID:</span> {params.lecture}
        </p>
        <p className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-green-600">Lecture Day:</span> {params.lecture[0]}
        </p>
        <p className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-purple-600">Lecture no:</span> {params.lecture[1]}
        </p>
        <p className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-orange-600">Lecture subject:</span> {params.lecture[2]}
        </p>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Example URL: http://localhost:3000/O4_study/day1/lecture3/hindi
        </p>
      </div>
    </div>
  );
}