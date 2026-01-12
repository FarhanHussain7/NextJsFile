export default async function GetUser(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}