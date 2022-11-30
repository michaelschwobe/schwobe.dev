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

  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './server.js'
      : undefined,

  // serverBuildPath: ".netlify/functions-internal/server.js",

  serverBuildTarget: 'netlify',
};
