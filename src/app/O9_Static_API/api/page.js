// src/app/9-Static-API/page.js
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
    <div>
      <h1>Users List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <Link href={`/O9_Static_API/api/${item.id}`}>
            {item.name}
          </Link>
          <span><Link href={`/O9_Static_API/api/${item.id}/update`}>Update</Link></span>
        </div>
      ))}
    </div>
  );
}