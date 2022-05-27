/**
 * @type {import("@remix-run/dev").AppConfig}
 */
module.exports = {
  // appDirectory: "app",

  // assetsBuildDirectory: "public/build",

  cacheDirectory: './node_modules/.cache/remix',

  // devServerPort: 8002

  ignoredRouteFiles: ['**/.*'],

  // publicPath: "/build/",

  server: './server.js',

  // serverBuildPath: "build/index.js",

  serverBuildTarget: 'netlify',
};
