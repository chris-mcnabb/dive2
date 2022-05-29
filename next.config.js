const withVideos = require("next-videos")


module.exports = withVideos({
  reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com",
            "www.shearwater.com",
            "cdn-mdb.head.com",
            "www.cressi.com",
            "fourthelement.com",
            "us.aqualung.com",
        'icon-library.com',
        'images.pexels.com',
            "firebasestorage.googleapis.com"
        ]
    },
    i18n: {
        locales: ['en', 'fr', 'nl', 'de'],
        defaultLocale: 'en',
    },
})
