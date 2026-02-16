"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// 

export default function MongoAtalas(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const addProduct = async (e) => {
        e.preventDefault();
        console.log("Adding product:", { name, email, phone, address });
        try{
            let result = await fetch('http://localhost:3000/O9_API/staticRouteApi', {
                method: 'post',
                body: JSON.stringify({ name, email, phone, address }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            result = await result.json();
            alert("Data added successfully");
        } catch (error) {
            console.error("Error adding user:", error);
        }
    }
    return(
        <div className="flex justify-center items-center">
            <h1>Mongo Atlas</h1> 
            <Link href="/O19_MongoAtlas" className="text-white bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl">Back</Link>
            <input className="text-blue-600 bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input className="text-blue-600 bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl" type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input className="text-blue-600 bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl" type="text" placeholder="Enter your phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <input className="text-blue-600 bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl" type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
            <button onClick={addProduct}>Add Product</button>
        
        </div>
    )
}