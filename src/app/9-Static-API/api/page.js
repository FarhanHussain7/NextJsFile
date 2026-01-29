import Link from "next/link";

async function getUsers() {
    // Use App Router path (no /api prefix) so we fetch the JSON API route
    let data = await fetch("http://localhost:3000/9-Static-API/staticRouteApi")
    data = await data.json();
    return data;
}
export default async function Page(){
    const users = await getUsers();
    return(
        <div>
            {
                users.map((item)=>(
                    <div key={item.id}>
                        <Link href={`/users/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}