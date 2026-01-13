'use client'
// Comprehensive Next.js Redirection Examples
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { redirect, notFound, permanentRedirect } from 'next/navigation';
import Link from 'next/link';

export default function RedirectionPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [redirectCount, setRedirectCount] = useState(0);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // 1. Programmatic Navigation with useRouter
  const handleRouterPush = (path) => {
    router.push(path);
  };

  const handleRouterReplace = (path) => {
    router.replace(path);
  };

  const handleRouterBack = () => {
    router.back();
  };

  const handleRouterForward = () => {
    router.forward();
  };

  // 2. Conditional Redirect Example
  const handleConditionalRedirect = () => {
    const userRole = 'admin'; // Simulate user role
    if (userRole === 'admin') {
      router.push('/admin/dashboard');
    } else {
      router.push('/user/profile');
    }
  };

  // 3. Timer-based Redirect
  const handleTimerRedirect = () => {
    setRedirectCount(5);
    const timer = setInterval(() => {
      setRedirectCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/topics');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 4. Authentication-based Redirect
  const handleAuthRedirect = () => {
    const isAuthenticated = false; // Simulate authentication
    if (!isAuthenticated) {
      router.push('/login?redirect=/Redirection');
    } else {
      router.push('/dashboard');
    }
  };

  // 5. External Redirect
  const handleExternalRedirect = () => {
    window.location.href = 'https://nextjs.org/docs';
  };

  // 6. Query Parameter Redirect
  const handleQueryRedirect = () => {
    const params = new URLSearchParams();
    params.append('source', 'redirection-page');
    params.append('timestamp', Date.now());
    router.push(`/about?${params.toString()}`);
  };

  // 7. Hash-based Redirect
  const handleHashRedirect = () => {
    router.push('/about#section-redirection');
  };

  const redirectionMethods = [
    {
      title: '📍 next.config.js Redirects',
      description: 'Server-side redirects configured in next.config.js',
      examples: [
        { path: '/old-blog', description: 'Basic redirect to /blog/new-post' },
        { path: '/docs/getting-started', description: 'Wildcard redirect to /documentation/getting-started' },
        { path: '/user/123', description: 'Regex redirect for numeric IDs to /profile/123' },
        { path: '/github', description: 'External redirect to GitHub' },
        { path: '/category/react', description: 'Blog category redirect to /blog/category/react' },
      ],
      type: 'config'
    },
    {
      title: '🔄 useRouter() Methods',
      description: 'Client-side navigation using Next.js router',
      examples: [
        { action: handleRouterPush, path: '/topics', description: 'router.push() - Adds to history' },
        { action: handleRouterReplace, path: '/about', description: 'router.replace() - Replaces current entry' },
        { action: handleRouterBack, path: '#', description: 'router.back() - Go back in history' },
        { action: handleRouterForward, path: '#', description: 'router.forward() - Go forward in history' },
      ],
      type: 'router'
    },
    {
      title: '⚡ Server-side Redirects',
      description: 'Server-side redirection functions',
      examples: [
        { path: '/server-redirect', description: 'redirect() - Temporary server redirect' },
        { path: '/server-permanent', description: 'permanentRedirect() - Permanent server redirect' },
        { path: '/not-found', description: 'notFound() - Show 404 page' },
      ],
      type: 'server'
    },
    {
      title: '🎯 Advanced Redirect Patterns',
      description: 'Complex redirection scenarios',
      examples: [
        { action: handleConditionalRedirect, path: '#', description: 'Conditional redirect based on user role' },
        { action: handleTimerRedirect, path: '#', description: `Timer redirect (${redirectCount}s)` },
        { action: handleAuthRedirect, path: '#', description: 'Authentication-based redirect' },
        { action: handleExternalRedirect, path: '#', description: 'External site redirect' },
        { action: handleQueryRedirect, path: '#', description: 'Query parameter redirect' },
        { action: handleHashRedirect, path: '#', description: 'Hash-based redirect' },
      ],
      type: 'advanced'
    }
  ];

  return (
    <div className="redirection-container">
      <header className="redirection-header">
        <h1>Next.js Redirection Masterclass</h1>
        <p>Learn all the different ways to redirect users in Next.js applications</p>
        <div className="current-url">
          <strong>Current URL:</strong> {currentUrl}
        </div>
      </header>

      <div className="redirection-grid">
        {redirectionMethods.map((method, index) => (
          <div key={index} className={`method-card ${method.type}`}>
            <h2>{method.title}</h2>
            <p>{method.description}</p>
            
            <div className="examples-list">
              {method.examples.map((example, exampleIndex) => (
                <div key={exampleIndex} className="example-item">
                  {example.action ? (
                    <button 
                      onClick={() => example.action(example.path)}
                      className="example-button"
                      disabled={example.path === '#' && redirectCount > 0}
                    >
                      <span className="example-title">{example.description}</span>
                      <span className="example-arrow">→</span>
                    </button>
                  ) : (
                    <Link href={example.path} className="example-link">
                      <span className="example-title">{example.description}</span>
                      <span className="example-path">{example.path}</span>
                      <span className="example-arrow">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Demo Section */}
      <section className="interactive-demo">
        <h2>🎮 Interactive Redirect Demo</h2>
        <div className="demo-controls">
          <div className="control-group">
            <label>Quick Navigation:</label>
            <div className="button-group">
              <button onClick={() => handleRouterPush('/topics')}>Topics</button>
              <button onClick={() => handleRouterPush('/about')}>About</button>
              <button onClick={() => handleRouterPush('/login')}>Login</button>
              <button onClick={() => handleRouterPush('/')}>Home</button>
            </div>
          </div>
          
          <div className="control-group">
            <label>History Navigation:</label>
            <div className="button-group">
              <button onClick={handleRouterBack}>⬅️ Back</button>
              <button onClick={handleRouterForward}>Forward ➡️</button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="code-examples">
        <h2>📝 Code Examples</h2>
        <div className="code-grid">
          <div className="code-card">
            <h3>next.config.js</h3>
            <pre>{`async redirects() {
  return [
    {
      source: '/old-blog',
      destination: '/blog/new-post',
      permanent: false,
    },
    {
      source: '/docs/:path*',
      destination: '/documentation/:path*',
      permanent: true,
    },
  ]
}`}</pre>
          </div>
          
          <div className="code-card">
            <h3>useRouter Hook</h3>
            <pre>{`import { useRouter } from 'next/navigation';

const router = useRouter();

// Push to history
router.push('/new-page');

// Replace current
router.replace('/new-page');

// Go back/forward
router.back();
router.forward();`}</pre>
          </div>
          
          <div className="code-card">
            <h3>Server Redirects</h3>
            <pre>{`import { redirect, permanentRedirect } from 'next/navigation';

// Temporary redirect
redirect('/login');

// Permanent redirect
permanentRedirect('/new-url');

// 404 page
notFound();`}</pre>
          </div>
        </div>
      </section>

      <footer className="redirection-footer">
        <p>💡 Tip: Try different redirect methods to understand their behavior</p>
        <p>📚 Check the browser console and network tab to see redirect status codes</p>
      </footer>
    </div>
  );
}