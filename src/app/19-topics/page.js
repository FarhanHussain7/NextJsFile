// app/topics/page.js
// Next.js Learning Hub - Chapter Index with Learning Order
import Link from "next/link";
import './topics.css';

const chapters = [
  {
    title: "Next.js Fundamentals",
    description: "Core concepts and getting started",
    topics: [
      { name: "Basic Routing", path: "/1-login", description: "Simple page routing" },
      { name: "About Page", path: "/2-about", description: "Static page creation" },
    ]
  },
  {
    title: "Advanced Routing",
    description: "Complex routing patterns",
    topics: [
      { name: "Nested Routing", path: "/2-about/aboutCollage", description: "About Collage page" },
      { name: "Dynamic Routes", path: "/2-about/aboutStudent", description: "About Student page" },
      { name: "404 Error Handling", path: "/404", description: "Custom not found page" },
    ]
  },
  {
    title: "Styling in Next.js",
    description: "Different styling approaches",
    topics: [
      { name: "Global & Inline Styles", path: "/5-Style/Global-Inline-hook", description: "CSS-in-JS and global styles" },
      { name: "CSS Modules", path: "/5-Style/Module_File", description: "Scoped CSS modules" },
    ]
  },
  {
    title: "Client-Side API Integration",
    description: "Fetching data on the client with React hooks",
    topics: [
      { name: "Products API (Client)", path: "/6-Client-API/ClientApi", description: "Client-side data fetching" },
      { name: "Users API with Loading", path: "/6-Client-API/loader", description: "Loading states and error handling" },
      { name: "Client API Overview", path: "/6-Client-API", description: "All client-side examples" },
    ]
  },
  {
    title: "Server-Side API Integration",
    description: "Fetching data on the server with Next.js",
    topics: [
      { name: "Products API (Server)", path: "/7-Server-API/serverApi", description: "Server-side data fetching" },
      { name: "Server API Overview", path: "/7-Server-API", description: "All server-side examples" },
    ]
  },
  {
    title: "API Routes Development",
    description: "Building your own backend APIs",
    topics: [
      { name: "Basic API Route", path: "/8-API-Routes/API_Route", description: "Simple API endpoint" },
      { name: "HTTP Methods", path: "/8-API-Routes/HTTP_routes", description: "GET/POST/PUT/DELETE" },
      { name: "API Routes Overview", path: "/8-API-Routes", description: "All API route examples" },
    ]
  },
  {
    title: "Static Data Management",
    description: "Working with static data and database-like operations",
    topics: [
      { name: "Static Data API", path: "/9-Static-API/staticRouteApi", description: "CRUD with static data" },
      { name: "Dynamic User Routes", path: "/9-Static-API/api", description: "Users with dynamic routing" },
      { name: "Static API Overview", path: "/9-Static-API", description: "All static data examples" },
    ]
  },
  {
    title: "Static & Dynamic Content",
    description: "SSG, SSR, and ISR concepts",
    topics: [
      { name: "Static Site Generation", path: "/10-Static_Site_Generation", description: "Build-time static pages" },
      { name: "Dynamic SSG", path: "/10-Static_Site_Generation/userdId", description: "Static with dynamic params" },
      { name: "Static Content", path: "/18-static", description: "Static page examples" },
    ]
  },
  {
    title: "Assets & Media",
    description: "Handling images and other assets",
    topics: [
      { name: "Image Optimization", path: "/11-Images", description: "Next.js Image component" },
      { name: "Post Management", path: "/16-Post", description: "Post handling and display" },
    ]
  },
  {
    title: "Client-side Scripts",
    description: "Browser-side functionality",
    topics: [
      { name: "External Scripts", path: "/12-script", description: "Loading third-party scripts" },
    ]
  },
  {
    title: "Advanced Features",
    description: "Production-ready features",
    topics: [
      { name: "Build Optimization", path: "/13-Build", description: "Build and deployment" },
      { name: "Redirection", path: "/14-Redirection", description: "URL redirects" },
      { name: "Environment Variables", path: "/15-env", description: "Environment configuration" },
      { name: "App Configuration", path: "/17-config", description: "Application settings" },
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