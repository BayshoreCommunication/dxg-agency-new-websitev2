/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bayshore.nyc3.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
  skipTrailingSlashRedirect: true,
<<<<<<< HEAD
  async redirects() {
    return [
      {
        source: '/problems-we-solve/:slug',
        destination: '/services/:slug',
        permanent: true,
      },
      {
        source: '/problems-we-solve',
        destination: '/services',
        permanent: true,
      },
    ];
  },
  // Add headers for PDF files
  async headers() {
    return [
      {
        source: '/Sabbir-Nasir-Transformation-Framework.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Sabbir-Nasir-Transformation-Framework.pdf"',
          },
        ],
      },
    ];
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
=======
>>>>>>> b093613c274db3b2acef44beeb8c05070b7d814d
};

module.exports = nextConfig;
