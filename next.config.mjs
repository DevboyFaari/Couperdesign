// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js
// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     images: {
//       domains: ['edamam-product-images.s3.amazonaws.com'],
//     },
//   };
  
  /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'edamam-product-images.s3.amazonaws.com',
          port: '', // Optional
          pathname: '/path/**', // Optional
        }
      ],
    },
  };
  
  export default nextConfig;
  