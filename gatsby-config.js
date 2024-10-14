/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `لورم پادکست`,
    siteUrl: `https://lorempodcast.ir`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-sitemap",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/",
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `episodes`,
      path: `${__dirname}/content/episodes`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `books`,
      path: `${__dirname}/content/books`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
    },
  },
]
};