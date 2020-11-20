const path = require("path");

//* this is using source markdown
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md");

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     });
//   }
// };

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/Blog.jsx");

  //* This is using source file
  // const res = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        // to pass data
        slug: edge.node.slug,
      },
    });
  });
};
