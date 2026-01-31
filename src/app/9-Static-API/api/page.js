// src/app/9-Static-API/page.js
import Link from "next/link";

async function getUsers() {
  const res = await fetch("http://localhost:3000/9-Static-API/staticRouteApi", {
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
          <Link href={`/9-Static-API/api/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}