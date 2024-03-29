import { withContentlayer } from 'next-contentlayer';
import './env.mjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          outputPath: 'static/images/',
          name: '[name].[hash].[ext]',
          esModule: false
        }
      }
    });

    return config;
  }
};

export default withContentlayer(nextConfig);
