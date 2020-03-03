const withSass = require("@zeit/next-sass");
const nextConfig = {
  target: "serverless"
};
module.exports = withSass(nextConfig);
