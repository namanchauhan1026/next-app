/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    // Prevent webpack from scanning system directories
    config.watchOptions = {
      ignored: [
        '**/node_modules',
        '**/.git',
        '**/dist',
        '**/build',
        '**/.next',
        '**/C:/Users/**',
        '**/C:/ProgramData/**',
        '**/C:/Windows/**',
        '**/C:/Program Files/**',
        '**/C:/Users/naman/Application Data/**',
        '**/C:/Users/naman/AppData/**',
        '**/C:/Users/naman/Cookies/**'
      ]
    };
    
    // Disable file watching during build
    if (!dev) {
      config.watchOptions = {
        ignored: ['**/*']
      };
    }
    
    return config;
  },
  experimental: {
    // Disable webpack build worker to prevent file system scanning
    webpackBuildWorker: false
  }
};

export default nextConfig;
