import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import Calendar from "../components/Calendar";
import { Header } from "../components/Header";
import Page from "../components/Page";
import useModal from "../utils/use-modal";

const Home: NextPage = () => {
  const { modal, open, close } = useModal();

  return (
    <>
      <div>
        <Head>
          <title>Bus To Show</title>
          <meta name="description" content="Bus to show." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Page>
          <div className="mt-8">
            <h1 className="text-3xl font-bold mb-3">Bus to Show Events</h1>
            <Calendar onClick={(event) => open(event)} />
          </div>
        </Page>
      </div>

      {modal}
    </>
  );
};

export default Home;
