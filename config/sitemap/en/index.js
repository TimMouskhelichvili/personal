const enSitemap = {
    home: {
        href: '/',
        title: 'Home',
        exclude: true,
        home: true,
        seoTitle: '{COMPANY} - Software Engineer & Consultant',
        description: `Tim Mouskhelichvili Consultant (React, PHP, Node.js). Consultations. 
					  Affordable Pricing. Top Results. On-Time Delivery.`
    },
    blog: { 
        href: '/blog',
        title: 'Blog',
        seoTitle: 'Our Blog - {COMPANY}',
        description: `The blog page where I share articles on web development themes.
					  Tim Mouskhelichvili Consultant. I provide React, TypeScript, PHP, Node.js development and consultations.`
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
    }
};

module.exports = {
    enSitemap
};