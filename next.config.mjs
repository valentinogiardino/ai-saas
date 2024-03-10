/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "oaidalleapiprodscus.blob.core.windows.net",
        },
  
        {
          protocol: "http",
          hostname: "oaidalleapiprodscus.blob.core.windows.net",
        },
      ],
    },
  };
  
  export default nextConfig;
  