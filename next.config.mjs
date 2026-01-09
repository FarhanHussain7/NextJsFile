/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    domains:['www.istockphoto.com']
  },
  // It will allow to export one component from another component 
  output:"export"
};

export default nextConfig;
