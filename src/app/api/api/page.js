import Link from "next/link";

async function  getUsers() {
    let data = await fetch("http://localhost:3001/api/static")
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
                        {item.name}
                        <Link href={""}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}