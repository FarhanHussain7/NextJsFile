'use client'
// Modern Next.js Learning Hub - Home Page
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import profile from '../../public/next.svg';
import { useRouter } from "next/navigation";
import './home.css';

export default function Home() {
  const [name, setName] = useState("Farhan");
  const router = useRouter();
  
  const navigate = (route) => {
    router.push(route);
  }

  const who = (props) => {
    alert(props);
    setName("Farhan Hussain");
  }

  const InnerComp = () => {
    return (
      <div className="inner-component">
        <h3>Inner Component Demo</h3>
        <p>Components can be nested inside other components</p>
      </div>
    )
  }

  const features = [
    { icon: "🚀", title: "Fast Performance", description: "Lightning-fast builds and optimized runtime" },
    { icon: "🎨", title: "Modern Styling", description: "CSS Modules, Tailwind, and more" },
    { icon: "📱", title: "Mobile First", description: "Responsive design out of the box" },
    { icon: "⚡", title: "Server Components", description: "Hybrid rendering for optimal performance" }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Next.js Learning Hub
              <span className="hero-subtitle">Master Modern Web Development</span>
            </h1>
            <p className="hero-description">
              Welcome to your comprehensive Next.js learning journey. 
              Build powerful, scalable web applications with the latest React framework.
            </p>
            <div className="hero-buttons">
              <Link href="/O19_topics" className="btn btn-primary">
                📚 Start Learning
              </Link>
              <button onClick={() => navigate("/O2_about")} className="btn btn-secondary">
                📖 About Project
              </button>
            </div>
          </div>
          <div className="hero-image">
            <Image src={profile} alt="Next.js Logo" className="logo-image" />
          </div>
        </div>
      </header>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <div className="section-header">
          <h2>Interactive React Features</h2>
          <p>Explore core React concepts with live examples</p>
        </div>
        
        <div className="demo-grid">
          {/* State Management Demo */}
          <div className="demo-card">
            <h3>🔄 State Management</h3>
            <p>Current user: <strong>{name}</strong></p>
            <div className="demo-buttons">
              <button onClick={() => who("Farhan Hussain")} className="demo-btn">
                Update Name
              </button>
              <button onClick={() => setName("Guest")} className="demo-btn">
                Reset to Guest
              </button>
            </div>
          </div>

          {/* Component Composition */}
          <div className="demo-card">
            <h3>🧩 Component Composition</h3>
            <div className="user-list">
              <User name="Farhan Hussain" />
              <User name="Kaif Hussain" />
              <User name="Jihan Hussain" />
            </div>
          </div>

          {/* Navigation Methods */}
          <div className="demo-card">
            <h3>🧭 Navigation Methods</h3>
            <div className="nav-methods">
              <Link href="/O1_login" className="nav-link">
                🔗 Link Component
              </Link>
              <button onClick={() => router.push("/O1_login")} className="nav-btn">
                ⚡ useRouter.push()
              </button>
              <button onClick={() => alert("Programmatic navigation!")} className="nav-btn">
                📱 Alert Demo
              </button>
            </div>
          </div>

          {/* Nested Components */}
          <div className="demo-card">
            <h3>📦 Nested Components</h3>
            <InnerComp />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Learn Next.js?</h2>
          <p>Discover the power of modern full-stack React development</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="quick-access">
        <div className="section-header">
          <h2>Quick Access</h2>
          <p>Jump to specific learning topics</p>
        </div>
        
        <div className="quick-links">
          <Link href="/O19_topics" className="quick-link">
            📚 All Topics
          </Link>
          <Link href="/O1_login" className="quick-link">
            🔐 Login Demo
          </Link>
          <Link href="/O2_about" className="quick-link">
            📄 About Page
          </Link>
          <Link href="/O5_Style/Global-Inline-hook" className="quick-link">
            🎨 Styling Examples
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>Built with ❤️ using Next.js 14 | React Learning Project</p>
        <p>Created by {name} | Interactive Learning Platform</p>
      </footer>
    </div>
  );
}

// User Component
const User = (props) => {
  return (
    <div className="user-card">
      <h4>👤 {props.name}</h4>
      <p>React Component</p>
    </div>
  )
}