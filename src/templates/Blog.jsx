import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/head";

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`;

const Blog = props => {
  // const data = JSON.parse(props.data.contentfulBlogPost.body.raw);
  // data.content.forEach(item => {
  //   if (item.nodeType === "embedded-asset-block") {
  //     console.log(item.data.target.sys.id);

  //   }
  // });
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       return <p>item</p>;
  //     },
  //   },
  // };
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div> */}
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw)
      )}
    </Layout>
  );
};

export default Blog;
