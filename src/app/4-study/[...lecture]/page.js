"use client";
// app/study/[...lecture]/page.js
// Lecture page handling dynamic nested routes for lectures
// It is using useParams hook to access the dynamic route parameters.
import { useParams } from "next/navigation";

export default function LecturePage() {
  const params = useParams(); // ✅ synchronous hook
  console.log("Lecture params:", params);

  return (
    <div>
      <h1>Lecture Page</h1>
      <p>Lecture ID: {params.lecture}</p>
      <p>Lecture Day: {params.lecture[0]}</p>
      <p>Lecture no: {params.lecture[1]}</p>
      <p>Lecture subject: {params.lecture[2]}</p>
      {/* http://localhost:3000/study/day1/lecture3/hindi */}
    </div>
  );
}