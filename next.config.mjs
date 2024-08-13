/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.pinimg.com",
          port: "",
          pathname:
            "/originals/70/65/4f/70654fd75f2991e168ec22b75fdbd6a5.gif",
        },
      ],
    },
  };
  
  export default nextConfig;
  