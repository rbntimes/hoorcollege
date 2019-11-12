module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/rbntimes.github.io" : ""
};
