module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1340),
    url: env('RENDER_EXTERNAL_URL', ''),
  });
  