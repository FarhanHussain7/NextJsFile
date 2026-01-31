import Link from "next/link"

export default function ServerAPIPage(){
    return (
        <div>
            <h1>🖥️ Server-Side API Examples</h1>
            <p>These examples demonstrate fetching data on the server-side using Next.js Server Components</p>
            
            <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                <Link href="/8-Server-API/serverApi" style={{
                    padding: "10px 20px", 
                    backgroundColor: "#10b981", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "5px"
                }}>
                    🛒 Products API (Server)
                </Link>
            </div>
            
            <div style={{marginTop: "30px"}}>
                <h2>📚 What You'll Learn:</h2>
                <ul>
                    <li>Server-side data fetching in Next.js</li>
                    <li>Server Components vs Client Components</li>
                    <li>Async/await patterns in React</li>
                    <li>Data fetching at build time or request time</li>
                    <li>Improved performance with server-side rendering</li>
                </ul>
            </div>
        </div>
    )
}
