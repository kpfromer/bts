import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import ListView from "../components/ListView";
import Page from "../components/Page";
import { getEvents } from "../utils/helpers";
import useModal from "../utils/use-modal";

const sortedEvents = getEvents();

export interface DraftThreeProps { }

const DraftThree: React.FC<DraftThreeProps> = (props) => {
  const { modal, open, close } = useModal();


  return (
    <>
      <Page header={<Header />} oneScreen>
        <Head>
          <title>Bus To Show</title>
          <meta name="description" content="Bus to show." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ListView events={sortedEvents} />
      </Page>

      {modal}
    </>
  );
};

export default DraftThree;
