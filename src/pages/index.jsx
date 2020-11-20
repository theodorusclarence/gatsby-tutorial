import { Link } from "gatsby";
import React from "react";
import Head from "../components/head";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello bambanggggg</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
