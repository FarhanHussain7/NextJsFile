// app/topics/page.js
// Next.js Learning Hub - Chapter Index with Learning Order
import Link from "next/link";
import './topics.css';

const chapters = [
  {
    number: 1,
    title: "Next.js Fundamentals",
    description: "Core concepts and getting started",
    topics: [
      { name: "Basic Routing", path: "/login", description: "Simple page routing" },
      { name: "About Page", path: "/about", description: "Static page creation" },
    ]
  },
  {
    number: 2,
    title: "Advanced Routing",
    description: "Complex routing patterns",
    topics: [
      { name: "Nested Routing", path: "/about/aboutCollage", description: "About Collage page" },
      { name: "Dynamic Routes", path: "/about/aboutStudent", description: "About Student page" },
      { name: "404 Error Handling", path: "/404", description: "Custom not found page" },
    ]
  },
  {
    number: 3,
    title: "Styling in Next.js",
    description: "Different styling approaches",
    topics: [
      { name: "Global & Inline Styles", path: "/Style/Global-Inline-hook", description: "CSS-in-JS and global styles" },
      { name: "CSS Modules", path: "/Style/Module_File", description: "Scoped CSS modules" },
      { name: "Conditional Styling", path: "/Style/conditional_style", description: "Dynamic CSS classes" },
      { name: "Typography & Fonts", path: "/Style/Fonts", description: "Font optimization" },
      { name: "Metadata Management", path: "/Style/MetaData", description: "SEO and meta tags" },
    ]
  },
  {
    number: 4,
    title: "API Integration",
    description: "Client and server-side data fetching",
    topics: [
      { name: "Client-side API Calls", path: "/api/ClientApi", description: "Fetch data on client" },
      { name: "Server-side API Calls", path: "/api/serverApi", description: "Fetch data on server" },
      { name: "API with Loading States", path: "/api/loader", description: "Loading and error states" },
    ]
  },
  {
    number: 5,
    title: "Static & Dynamic Content",
    description: "SSG, SSR, and ISR concepts",
    topics: [
      { name: "Static Site Generation", path: "/Static_Site_Generation", description: "Build-time static pages" },
      { name: "Dynamic SSG", path: "/Static_Site_Generation/userdId", description: "Static with dynamic params" },
    ]
  },
  {
    number: 6,
    title: "Assets & Media",
    description: "Handling images and other assets",
    topics: [
      { name: "Image Optimization", path: "/Images", description: "Next.js Image component" },
    ]
  },
  {
    number: 7,
    title: "Client-side Scripts",
    description: "Browser-side functionality",
    topics: [
      { name: "External Scripts", path: "/script", description: "Loading third-party scripts" },
    ]
  },
  {
    number: 8,
    title: "Advanced Features",
    description: "Production-ready features",
    topics: [
      { name: "Build Optimization", path: "/Build", description: "Build and deployment" },
      { name: "Redirection", path: "/Redirection", description: "URL redirects" },
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
        {chapters.map((chapter) => (
          <div key={chapter.number} className="chapter-card">
            <div className="chapter-header">
              <span className="chapter-number">Chapter {chapter.number}</span>
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