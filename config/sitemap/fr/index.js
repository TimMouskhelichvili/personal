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
        description: `La page blog où je partage des articles sur le développement web. Tim Mouskhelichvili Consultant.
		              Je fournis du développement et des consultations en React, TypeScript, PHP, Node.js.`
    },
    privacyPolicy: {
        href: '/privacy-policy',
        title: 'Politique de confidentialité'
    },
    sitemap: {
        href: '/sitemap',
        title: 'Sitemap',
        exclude: true,
        seoTitle: 'Sitemap - {COMPANY}',
        description: 'Sitemap de Tim Mouskhelichvili.'
    },
    termsOfUse: {
        href: '/terms-of-use',
        title: 'Conditions d’utilisation'
    }
};

module.exports = {
    frSitemap
};