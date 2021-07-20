const enSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: 'Best Web Development Services - {COMPANY}',
        description: `Very Fast Web Development. React, PHP, Node.js. Consultations. 
					  Affordable Pricing. Top Results. On-Time Delivery.`
    },
    blog: { 
        href: '/blog',
        title: 'Blog',
        seoTitle: 'Our Blog - {COMPANY}',
        description: `The blog page where we share articles on web development themes.
					  We are AftrConsulting. We provide React, TypeScript, PHP, Node.js development and consultations.`
    },
    sitemap: {
        href: '/sitemap',
        title: 'Sitemap',
        exclude: true,
        seoTitle: 'Sitemap - {COMPANY}',
        description: 'Sitemap of AftrConsulting.'
    }
};

module.exports = {
    enSitemap
};