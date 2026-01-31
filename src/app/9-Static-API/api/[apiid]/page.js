// src/app/9-Static-API/api/[apiid]/page.js
export default async function Page({ params }) {
  const apiid = params.apiid; // plain string

  if (!apiid) {
    return <h1>Missing user id</h1>;
  }

  const user = await getUser(apiid);

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
}