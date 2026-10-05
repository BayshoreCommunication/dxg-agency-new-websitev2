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
  async redirects() {
    return [
      {
        source: '/problems-we-solve/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/problems-we-solve',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/audiovisual-production-for-events',
        destination: '/audiovisual-production',
        permanent: true,
      },
      {
        source: '/hybrid-and-virtual-event-production',
        destination: '/hybrid-virtual-event-production',
        permanent: true,
      },
      {
        source: '/attendee-engagement-and-event-technology',
        destination: '/attendee-engagement',
        permanent: true,
      },
      {
        source: '/event-creative-and-experience-design',
        destination: '/event-creative-experience-design',
        permanent: true,
      },
      {
        source: '/event-videography-and-photography',
        destination: '/event-videography-photography',
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
};

module.exports = nextConfig;
