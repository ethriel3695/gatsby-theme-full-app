// https://egghead.io/lessons/gatsby-set-up-to-create-data-driven-pages-in-gatsby

const fs = require("fs");

// Verify the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "data";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// Define the event type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Navigation implements Node @dontInfer {
      id: ID!
      route: String!
      label: String!
    }`);
  // actions.createTypes(`
  // type Affirmation implements Node @dontInfer {
  //   id: ID!
  //   route: String!
  //   label: String!
  //   dueDate: Date! @dateformat @proxy(from: "due_date")
  // }`);
};

// Define resolvers for any custom fields
exports.createResolvers = ({ createResolvers }) => {
  const basePath = "/";

  const slugify = str => {};
};

// Query for events and create pages
exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!");

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      heading: "Your Theme Here",
      content: `
        <p>
          Use this handy theme example as the basis for your own amazing theme!
        </p>
        <p>
          For more information, see 
          <a href="https://themejam.gatsbyjs.org">themejam.gatsbyjs.org</a>.
        </p>
      `,
    },
  });
};
