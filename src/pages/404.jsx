import { Link } from "gatsby";
import React from "react";
import Head from "../components/head";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
