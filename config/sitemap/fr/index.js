const frSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: '{COMPANY} - Développeur Web & Consultant en React et Node.js',
        description: `Je Suis Un Développeur Web Spécialiste Dans La Création D'Applications Web Modernes Avec React & Node.js. 
		              Sauver Votre Argent Et Votre Temps. Meilleurs Résultats. Délais Respectés.`
    },
    blog: { 
        href: '/blog',
        title: 'Mon Blog',
        seoTitle: 'Blog - {COMPANY}',
        description: `La page blog où je partage des articles sur le développement web et sur le développement
		              React, TypeScript et Node.js.`
    },
    privacyPolicy: {
        exclude: true,
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
        exclude: true,
        href: '/terms-of-use',
        title: 'Conditions d’utilisation'
    },
    resume: {
        href: '/resume',
        title: 'Mon CV',
        seoTitle: 'CV - {COMPANY}',
        description: 'CV de Tim Mouskhelichvili.'
    },
    portfolio: {
        href: '/portfolio',
        title: 'Mon Portfolio',
        seoTitle: 'Portfolio - {COMPANY}',
        description: 'Portfolio de Tim Mouskhelichvili.'
    }
};

module.exports = {
    frSitemap
};