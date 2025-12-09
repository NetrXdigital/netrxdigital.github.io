/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.netrxdigital.com',
  generateRobotsTxt: true, // will also create /robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/admin/*',
    '/dashboard/*',
  ],
  transform: async (config, path) => {
    // custom priorities per route
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path.startsWith('/blogs-digital-and-performace-marketing')) priority = 0.8;
    if (path.startsWith('/services')) priority = 0.9;

    return {
      loc: path, // => /about
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
