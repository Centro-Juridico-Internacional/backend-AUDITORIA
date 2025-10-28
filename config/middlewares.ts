export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://grounded-positivity-3e23e06907.strapiapp.com",
        "https://actualidadfrontend.vercel.app",
        "http://localhost:1337",
        "http://localhost:4321",
      ],
      headers: "*",
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
