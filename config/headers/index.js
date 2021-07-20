const headers = [
    {
        source: '/:path*{/}?',
        headers: [
            {
                key: 'Strict-Transport-Security',
                value: 'max-age=31536000; includeSubDomains'
            },
            {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN'
            },
            {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
            },
            {
                key: 'Referrer-Policy',
                value: 'origin'
            },
            {
                key: 'Permissions-Policy',
                value: 'fullscreen=self'
            }
        ]
    }
];

module.exports = {
    headers
};