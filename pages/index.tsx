import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { Header } from "../components/Header";
import Page from "../components/Page";

const DraftLink: React.FC<{ href: string }> = ({ href, children }) => (
  <div className="mt-10 text-6xl font-bold space-y-4 text-blue-500 underline hover:text-blue-400 hover:no-underline">
    <NextLink href={href}>{children}</NextLink>
  </div>
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
        <DraftLink href="/final-draft">Final Draft</DraftLink>
      </Page>
    </div>
  );
};

export default Home;
