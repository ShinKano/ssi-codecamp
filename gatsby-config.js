module.exports = {
  siteMetadata: {
    siteUrl: 'https://codingbootcamp.club/',
    title: '超集中ブートキャンプ式の格安プログラミング学習 - VivixxCodingCamp',
    description:
      '未経験からのプログラミング学習は、フィリピンで効率良く最短で習得がオススメ。短期・集中コースだから格安。認定講師が教えるアメリカ式のブートキャンプスタイルで身に付く実践的プログラミングスクールです。 アメリカなど海外企業でのインターンもカリキュラムに含まれるので実務経験にも繋がる。',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
        resolve: `gatsby-plugin-intl`,
        options: {
          // language JSON resource path
          path: `${__dirname}/src/intl`,
          // supported language
          languages: [`en`, `ja`,],
          // language file path
          defaultLanguage: `ja`,
          // option to redirect to `/ko` when connecting `/`
          redirect: false,
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-102508487-2",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
        },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
