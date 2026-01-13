/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    domains:['www.istockphoto.com']
  },
  // It will allow to export one component from another component 
  output:"export",
  
  // Redirection Examples in next.config.js
  async redirects() {
    return [
      // Basic redirect - old-blog to new-blog
      {
        source: '/old-blog',
        destination: '/blog/new-post',
        permanent: false, // 307 temporary redirect
      },
      // Wildcard redirect - all /docs/* to /documentation/*
      {
        source: '/docs/:path*',
        destination: '/documentation/:path*',
        permanent: true, // 308 permanent redirect
      },
      // Regex redirect - redirect numbers to user profile
      {
        source: '/user/:id(\\d+)',
        destination: '/profile/:id',
        permanent: false,
      },
      // External redirect - redirect to external site
      {
        source: '/github',
        destination: 'https://github.com/vercel/next.js',
        permanent: false,
      },
      // Language-based redirect
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: false,
      },
      // Blog category redirect
      {
        source: '/category/:category',
        destination: '/blog/category/:category',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
