import Link from "next/link"

export default function APIRoutesPage(){
    return (
        <div>
            <h1>🛣️ API Routes Examples</h1>
            <p>These examples demonstrate creating your own API endpoints in Next.js</p>
            
            <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                <Link href="/9-API-Routes/API_Route" style={{
                    padding: "10px 20px", 
                    backgroundColor: "#f59e0b", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "5px"
                }}>
                    📤 Basic API Route
                </Link>
                
                <Link href="/9-API-Routes/HTTP_routes" style={{
                    padding: "10px 20px", 
                    backgroundColor: "#f59e0b", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "5px"
                }}>
                    🔧 HTTP Methods (GET/POST/PUT/DELETE)
                </Link>
            </div>
            
            <div style={{marginTop: "30px"}}>
                <h2>📚 What You'll Learn:</h2>
                <ul>
                    <li>Creating API endpoints with route.js</li>
                    <li>Handling different HTTP methods</li>
                    <li>Request and response handling</li>
                    <li>NextResponse utility for JSON responses</li>
                    <li>Building backend APIs in Next.js</li>
                </ul>
            </div>
        </div>
    )
}
