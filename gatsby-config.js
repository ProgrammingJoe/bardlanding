module.exports = {
  siteMetadata: {
    title: `Community based storytelling social media platform`,
    description: `Bard is a community based storytelling social media platform for creatives, including illustrators, artists, music producers, writers, voice actors, poets, and any other visual, audio, or written art forms`,
    author: `@bardsocial`,
    siteUrl: `https://bard.social/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `1npdkx3s`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        // Your custom domain, defaults to `cdn.usefathom.com`
        trackingUrl: 'https://bard.social/',
        // Unique site id
        siteId: 'WZYELUGA'
      }
    },
    {
      resolve: 'gatsby-plugin-iubenda-cookie-footer',
      options: {
        iubendaOptions: {
          "ccpaAcknowledgeOnDisplay": true,
          "consentOnContinuedBrowsing": false,
          "countryDetection": true,
          "enableCcpa": true,
          "floatingPreferencesButtonDisplay": "bottom-right",
          "gdprAppliesGlobally": false,
          "invalidateConsentWithoutLog": true,
          "lang": "en",
          "perPurposeConsent": true,
          "siteId": 2723185,
          "whitelabel": false,
          "cookiePolicyId": 98067353,
          "banner": {
            "acceptButtonDisplay": true,
            "closeButtonDisplay": false,
            "customizeButtonDisplay": true,
            "explicitWithdrawal": true,
            "listPurposes": true,
            "logo": null,
            "position": "float-bottom-center",
            "rejectButtonDisplay": true
          }
        },
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}