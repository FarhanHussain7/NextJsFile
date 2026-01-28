// app/studentlist/page.js
// Student List page displaying a list of students with links to their details
import Link from "next/link";

export default function StudentListPage() {
  const students = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id} className="mb-2">
            <Link href={`/studentlist/${student.id}`}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}