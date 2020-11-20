import { Link } from "gatsby";
import React from "react";
import Head from "../components/head";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Page</h1>
      <p>Hi, my name is Clarence.</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default about;
