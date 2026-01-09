// app/studentlist/[student]/page.js
// Student detail page displaying information based on dynamic route parameter
export default async function StudentPage({ params }) {
  const { student } = await params;

  return (
    <div>
      <h1>Details of Student</h1>
      <p>Student ID is: {student}</p>
    </div>
  );
}