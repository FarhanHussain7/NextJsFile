"use client"

import { useState } from "react"

export default function Postpage(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    const Adduser = async ()=>{
        console.log(name,age,email);
        let response = await fetch("http://localhost:3000/O9_Static_API/staticRouteApi",{
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
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Post API for Static Data</h1>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(event)=>setName(event.target.value)} 
                            placeholder="Enter your name" 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Age
                        </label>
                        <input 
                            type="number" 
                            value={age} 
                            onChange={(event)=>setAge(event.target.value)} 
                            placeholder="Enter your age" 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(event)=>setEmail(event.target.value)} 
                            placeholder="Enter your email" 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    <button 
                        onClick={Adduser}
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}