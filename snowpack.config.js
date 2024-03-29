// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-sass',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    '@/': './src',
    '@/components/': './src/components',
    '@/layouts/': './src/layouts',
    '@/lib/': './src/lib',
    '@/routes/': './src/routes',
    '@/styles/': './src/styles',
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
}
