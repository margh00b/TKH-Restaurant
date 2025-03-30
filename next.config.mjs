/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/customer/about",
        permanent: true,
      },
      {
        source: "/menu",
        destination: "/customer/menu",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
