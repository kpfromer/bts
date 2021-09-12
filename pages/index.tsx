import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { Header } from "../components/Header";
import Page from "../components/Page";

const DraftLink = ({ href, children }) => (
  <li className="font-bold space-y-4 text-blue-500 underline hover:text-blue-400 hover:no-underline">
    <NextLink href={href}>{children}</NextLink>
  </li>
);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bus To Show</title>
        <meta name="description" content="Bus to show." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Page>
        <ul>
          <DraftLink href="/draft-one">Draft One</DraftLink>
          <DraftLink href="/draft-two">Draft Two</DraftLink>
          <DraftLink href="/draft-three">Draft Three</DraftLink>
        </ul>
      </Page>
    </div>
  );
};

export default Home;
