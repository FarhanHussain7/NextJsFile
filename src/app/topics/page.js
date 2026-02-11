// app/topics/page.js
// Next.js Learning Hub - Chapter Index with Learning Order
import Link from "next/link";
import './topics.css';

const chapters = [
  {
    title: "O1 Next.js Fundamentals",
    description: "Core concepts and getting started",
    topics: [
      { name: "Basic Routing", path: "/O1_login", description: "Simple page routing" },
      { name: "About Page", path: "/O2_about", description: "Static page creation" },
    ]
  },
  {
    title: "O2 Advanced Routing",
    description: "Complex routing patterns",
    topics: [
      { name: "Dynamic Student Routes", path: "/O3_studentlist", description: "Dynamic routing with student list" },
      { name: "Catch-all Study Routes", path: "/O4_study", description: "Advanced catch-all routing patterns" },
      { name: "Nested Routing", path: "/O2_about/aboutCollage", description: "About Collage page" },
      { name: "Dynamic Student Detail", path: "/O2_about/aboutStudent", description: "About Student page" },
      { name: "404 Error Handling", path: "/404", description: "Custom not found page" },
    ]
  },
  {
    title: "O3 Styling in Next.js",
    description: "Different styling approaches",
    topics: [
      { name: "Global & Inline Styles", path: "/O5_Style/Global-Inline-hook", description: "CSS-in-JS and global styles" },
      { name: "CSS Modules", path: "/O5_Style/Module_File", description: "Scoped CSS modules" },
    ]
  },
  {
    title: "O4 Client-Side API Integration",
    description: "Fetching data on the client with React hooks",
    topics: [
      { name: "Products API (Client)", path: "/O6_Client_API/ClientApi", description: "Client-side data fetching" },
      { name: "Users API with Loading", path: "/O6_Client_API/loader", description: "Loading states and error handling" },
      { name: "Client API Overview", path: "/O6_Client_API", description: "All client-side examples" },
    ]
  },
  {
    title: "O5 Server-Side API Integration",
    description: "Fetching data on the server with Next.js",
    topics: [
      { name: "Products API (Server)", path: "/O7_Server_API/serverApi", description: "Server-side data fetching" },
      { name: "Server API Overview", path: "/O7_Server_API", description: "All server-side examples" },
    ]
  },
  {
    title: "O6 API Routes Development",
    description: "Building your own backend APIs",
    topics: [
      { name: "Basic API Route", path: "/O8_API_Routes/API_Route", description: "Simple API endpoint" },
      { name: "HTTP Methods", path: "/O8_API_Routes/HTTP_routes", description: "GET/POST/PUT/DELETE" },
      { name: "API Routes Overview", path: "/O8_API_Routes", description: "All API route examples" },
      { name: "API Routes Catch-all", path: "/O8_API_Routes/allroutes", description: "Catch-all API routes" },
    ]
  },
  {
    title: "O7 Static Data Management",
    description: "Working with static data and database-like operations",
    topics: [
      { name: "Static Data API", path: "/O9_Static_API/staticRouteApi", description: "CRUD with static data" },
      { name: "Dynamic User Routes", path: "/O9_Static_API/api", description: "Users with dynamic routing" },
      { name: "Static API Overview", path: "/O9_Static_API", description: "All static data examples" },
    ]
  },
  {
    title: "O8 Static & Dynamic Content",
    description: "SSG, SSR, and ISR concepts",
    topics: [
      { name: "Static Site Generation", path: "/O10_Static_Site_Generation", description: "Build-time static pages" },
      { name: "Dynamic SSG", path: "/O10_Static_Site_Generation/userId", description: "Static with dynamic params" },
      { name: "Static Content", path: "/O18_static", description: "Static page examples" },
    ]
  },
  {
    title: "O9 Assets & Media",
    description: "Handling images and other assets",
    topics: [
      { name: "Image Optimization", path: "/O11_Images", description: "Next.js Image component" },
      { name: "Form & HTTP Request", path: "/O16_Forms_Http_Request", description: "Handling and displaying HTTP requests" },
    ]
  },
  {
    title: "O10 Client-side Scripts",
    description: "Browser-side functionality",
    topics: [
      { name: "External Scripts", path: "/O12_script", description: "Loading third-party scripts" },
    ]
  },
  {
    title: "O11 Advanced Features",
    description: "Production-ready features",
    topics: [
      { name: "Build Optimization", path: "/O13_Build", description: "Build and deployment" },
      { name: "Redirection", path: "/O14_Redirection", description: "URL redirects" },
      { name: "Environment Variables", path: "/O15_env", description: "Environment configuration" },
      { name: "App Configuration", path: "/O17_config", description: "Application settings" },
    ]
  },
  {
    title: "O12 Database Integration",
    description: "Connecting to databases",
    topics: [
      { name: "MongoDB Atlas", path: "/O19_MongoAtlas", description: "Connecting to MongoDB Atlas" },
    ]
  }
];

export default function TopicsPage() {
  return (
    <div className="topics-container">
      <header className="topics-header">
        <h1>Next.js Learning Hub</h1>
        <p>Master Next.js step by step - Follow the numbered chapters for optimal learning</p>
      </header>
      
      <div className="chapters-grid">
        {chapters.map((chapter, index) => (
          <div key={index} className="chapter-card">
            <div className="chapter-header">
              <h2 className="chapter-title">{chapter.title}</h2>
              <p className="chapter-description">{chapter.description}</p>
            </div>
            
            <div className="topics-list">
              {chapter.topics.map((topic, index) => (
                <Link 
                  key={index} 
                  href={topic.path}
                  className="topic-item"
                >
                  <span className="topic-icon">📚</span>
                  <div className="topic-content">
                    <h3 className="topic-name">{topic.name}</h3>
                    <p className="topic-description">{topic.description}</p>
                  </div>
                  <span className="topic-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <footer className="topics-footer">
        <p>Total Chapters: {chapters.length} | Total Topics: {chapters.reduce((acc, ch) => acc + ch.topics.length, 0)}</p>
        <p className="learning-tip">💡 Tip: Follow the chapters in order for the best learning experience!</p>
      </footer>
    </div>
  );
}