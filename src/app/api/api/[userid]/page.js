
async function  getUser(id) {
    let data = await fetch(`http://localhost:3000/api/static/${id}`)
    data = await data.json();
    return data.result;
}

export default async function Page({params}){
    const user = await getUser(params.userid)
    return(
        <div>
            <h1>User Details</h1>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.address}</h2>
        </div>
    )
}