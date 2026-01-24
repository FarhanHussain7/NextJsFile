"use client"

import { useState } from "react"

export default function Postpage(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    const Adduser = async ()=>{
        console.log(name,age,email);
        let response = await fetch("http://localhost:3000/api/staticRouteApi",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        if(response.success){
            alert("New user added ");
        }else{
            alert("Some error with data please check and try again")
        }
        console.log(response);
    }
    return(
        <div>
            <h1>Post api for static data </h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name " required/>
            <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter your age " required/>
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email " required/>
            <button onClick={Adduser}>Submit</button>
        </div>
    )
}