import Link from "next/link";

export default function StudentListPage() {
  const students = [
    { id: 1, name: "Alice Johnson", age: 22, class: "10th" },
    { id: 2, name: "Bob Smith", age: 23, class: "11th" },
    { id: 3, name: "Charlie Brown", age: 24, class: "12th" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="mb-2">
            {/* ✅ Link points to /3-studentlist/[id] */}
            <Link href={`/O3_studentlist/${student.id}`}>
              {student.name} - Age: {student.age} - Class: {student.class}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}