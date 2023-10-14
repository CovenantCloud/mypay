module.exports = [
    'strapi::errors',
    'strapi::security',
    'strapi::poweredBy',
    {
      name: 'strapi::cors',
      config: {
        enabled: true,          
        headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
        origin: ['http://localhost:3000','https://localhost:7072','*']
      }
    },
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
  