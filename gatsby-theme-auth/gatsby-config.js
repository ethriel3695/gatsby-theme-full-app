module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Navigation",
      },
    },
  ],
};
