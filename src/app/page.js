'use client'
// Main Home page component with state management and navigation
// It is the entry point of the application.
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import profile from '../../public/next.svg';
import { useRouter } from "next/navigation";
export default function Home() {

  const [name,setName] = useState("Farhan");
  const router = useRouter();
  const navigate = (route)=>{
    router.push(route);
  }
// Dynamic function to update state
  const who = (props)=>{
    alert(props)
    setName("Farhan Hussain")
  }

  const InnerComp = ()=>{
    return(
      <div>
        <h1>Inner Component in Parent Component
        </h1>
      </div>
    )
  }

  return (
    <div>
    <div className="flex h-50 justify-center items-center bg-orange-200">
      <Image src={profile} alt="Error to load"/>
      <h1 className="w-50 text-center text-white rounded-2xl"> Next Js || By : {name}</h1>
     </div>
     <ul className="flex justify-between">
      <li>

      </li>
      <li>
      <User name="Farhan Hussain"/>
      </li>
      <li>
        <User name="Kaif hussain"/>
        </li>   
        <li>
      <User name="Jihan Hussain"/>
        </li>
          </ul>
    {/* Static button  */}
      <button className="bg-blue-400 text-white border-amber-200 rounded-3xl w-20" onClick={()=>alert("Just click the button")}>Static button</button>
    {/* Dynamic Button with State */}
      <button className="bg-rose-400 text-white border-amber-200 rounded-3xl w-50" onClick={()=>who("Farhan Hussain")}>Dynamic button</button>
    
    {/* Inner Component */}
    <InnerComp/>



    {/* Link */}
    <Link href="/login" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Go to Login </Link>
    
    {/* Navigation */}
    <button onClick={()=>router.push("/login")}>Go to Login</button>
    <button onClick={()=>navigate("/about")}>Go to About</button>
    
    </div>
  );
}

// User component
const User=(props)=>{
  return(
    <div>
      <h2 className="text-white">My name is {props.name}</h2>
    </div>
  )
}