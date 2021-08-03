const frSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: '{COMPANY} - Développeur Web & Consultant',
        description: `Tim Mouskhelichvili Consultant (React, PHP, Node.js). Consultations. 
		              Prix Compétitifs. Meilleurs Résultats. Délais Respectés.`
    },
    blog: { 
        href: '/blog',
        title: 'Blog',
        seoTitle: 'Notre Blog - {COMPANY}',
        description: `La page blog où nous partageons des articles sur le développement web. Nous sommes AftrConsulting.
		              Nous fournissons du développement et des consultations en React, TypeScript, PHP, Node.js.`
    },
    sitemap: {
        href: '/sitemap',
        title: 'Sitemap',
        exclude: true,
        seoTitle: 'Sitemap - {COMPANY}',
        description: 'Sitemap de AftrConsulting.'
    }
};

module.exports = {
    frSitemap
};