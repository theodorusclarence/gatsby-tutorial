import React from "react";
import Head from "../components/head";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>My Number: 01392123091</p>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        go
      </a>
    </Layout>
  );
};

export default contact;
