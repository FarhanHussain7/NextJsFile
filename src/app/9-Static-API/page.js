import Link from "next/link"

export default function StaticAPIPage(){
    return (
        <div>
            <h1>📊 Static API Examples</h1>
            <p>These examples demonstrate working with static data and database-like operations</p>
            
            <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                <Link href="/9-Static-API/staticRouteApi" style={{
                    padding: "10px 20px", 
                    backgroundColor: "#8b5cf6", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "5px"
                }}>
                    💾 Static Data API (GET/POST)
                </Link>
                
                <Link href="/9-Static-API/api" style={{
                    padding: "10px 20px", 
                    backgroundColor: "#8b5cf6", 
                    color: "white", 
                    textDecoration: "none", 
                    borderRadius: "5px"
                }}>
                    👥 Users List with Dynamic Routes
                </Link>
            </div>
            
            <div style={{marginTop: "30px"}}>
                <h2>📚 What You'll Learn:</h2>
                <ul>
                    <li>Working with static data files</li>
                    <li>CRUD operations with API routes</li>
                    <li>Dynamic routing with API data</li>
                    <li>Database-like functionality without a database</li>
                    <li>Data persistence and management</li>
                </ul>
            </div>
        </div>
    )
}

// C:\Users\HP\New folder\NextJsTopic\learningnextjs\src\app\9-Static-API\staticRouteApi
