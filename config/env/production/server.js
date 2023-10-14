module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1340),
    url: env('HOST', 'https://nifty-pascal.74-208-60-233.plesk.page'),
  });
  