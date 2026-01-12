// Make sure the path is correct relative to this file
import getUser from "../../../../service/getUser.js";

export default async function Page(props) {
    const users = await getUser();   // ✅ single await
    const currentId = props.params.userId;
    const userData = users[currentId - 1];  // ✅ index properly

    return (
        <div>
            <h1>User List</h1>
            <h3>{userData.id}</h3>
            <h3>{userData.name}</h3>
            <h3>{userData.website}</h3>
        </div>
    );
}
export async function generateStaticParams() {
    const users = await getUser();   // ✅ consistent function call
    return users.map(user => ({
        userId: user.id.toString()
    }));
}