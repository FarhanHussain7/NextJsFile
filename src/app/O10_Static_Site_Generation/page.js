import Link from "next/link";
import GetUser from "../../../service/getUser.js"

export default async function Users(){
    const getUserList = GetUser();
    const users = await getUserList;

    return(
        <div>
            <h1>User List </h1>
            {
                users.map((user)=>(
                    <h1 key={user.id}>
                        <Link href={`/O10_Static_Site_Generation/${user.id}`}>{user.name}</Link>
                    </h1>
                ))
            }
        </div>
    )
}