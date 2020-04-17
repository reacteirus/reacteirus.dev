module.exports = {
  siteMetadata: {
    title: `Reacteirus`,
    name: `Reacteirus`,
    siteUrl: `https://reacteirus.dev`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Bem vindes ao blog do Reacteirus na internet.`,
      maxWidth: 600,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/reacteirus`,
      },
      {
        name: `github`,
        url: `https://github.com/reacteirus`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/reacteirus`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reacteirus`,
        short_name: `Reacteirus`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
