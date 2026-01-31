// Student detail page displaying information based on dynamic route parameter
// src/app/3-studentlist/[student]/page.js
export default async function StudentPage({ params }) {
  const { student } = await params; // ✅ params is now a Promise, must be awaited

  return (
    <div>
      <h1>Details of Student</h1>
      <p>Student ID is: {student}</p>
    </div>
  );
}