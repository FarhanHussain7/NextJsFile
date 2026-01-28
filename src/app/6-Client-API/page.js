"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function ClientAPIPage(){
    return (
        <div>
            <h1>🔄 Client-Side API Examples</h1>
            <p>These examples demonstrate fetching data on the client-side using React hooks</p>
            
            <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                <Link href="/7-Client-API/ClientApi" style={{
                    padding: "10px 20px", 
                    backgroundColor: "#0070f3", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "5px"
                }}>
                    🛒 Products API (Client)
                </Link>
                
                <Link href="/7-Client-API/loader" style={{
                    padding: "10px 20px", 
                    backgroundColor: "#0070f3", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "5px"
                }}>
                    ⏳ Users API with Loading States
                </Link>
            </div>
            
            <div style={{marginTop: "30px"}}>
                <h2>📚 What You'll Learn:</h2>
                <ul>
                    <li>Client-side data fetching with useEffect</li>
                    <li>Loading states and error handling</li>
                    <li>Working with external APIs (DummyJSON)</li>
                    <li>State management for API responses</li>
                    <li>Conditional rendering during loading</li>
                </ul>
            </div>
        </div>
    )
}
