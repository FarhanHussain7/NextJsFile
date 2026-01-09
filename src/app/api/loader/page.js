// page.js
"use client";
import React, { useState, useEffect } from "react";

async function fetchData() {
  const res = await fetch("https://dummyjson.com/users");
  const json = await res.json();
  return json.users;
}

export default function Page() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Loader API Page</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName} {user.lastName}</h2>
          <p>Age : {user.age}</p>
          <p>Gender : {user.gender}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
}