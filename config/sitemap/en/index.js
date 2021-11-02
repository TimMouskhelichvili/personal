const enSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: '{COMPANY} - Freelance Developer & Consultant in React, Node.js',
        description: `I Help Business by Building Modern Web Applications using React & Node.js
		              Save Your Time And Money. Top Results. On-Time Delivery.`
    },
    blog: { 
        href: '/blog',
        title: 'My Blog',
        seoTitle: 'Blog - {COMPANY}',
        description: `The blog page where I share articles on web development themes and about 
		              React, TypeScript, Node.js development.`
    },
    privacyPolicy: {
        exclude: true,
        href: '/privacy-policy',
        title: 'Privacy Policy'
    },
    sitemap: {
        href: '/sitemap',
        title: 'Sitemap',
        exclude: true,
        seoTitle: 'Sitemap - {COMPANY}',
        description: 'Sitemap of Tim Mouskhelichvili.'
    },
    termsOfUse: {
        exclude: true,
        href: '/terms-of-use',
        title: 'Terms of Use'
    },
    resume: {
        href: '/resume',
        title: 'My Resume',
        seoTitle: 'Resume - {COMPANY}',
        description: 'Resume of Tim Mouskhelichvili.'
    },
    portfolio: {
        href: '/portfolio',
        title: 'My Portfolio',
        seoTitle: 'Portfolio - {COMPANY}',
        description: 'Portfolio of Tim Mouskhelichvili.'
    }
};

module.exports = {
    enSitemap
};