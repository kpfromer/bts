import { DateTime } from "luxon";
import Head from "next/head";
import React from "react";
import GenericBanner from "../components/GenericBanner";
import { Header } from "../components/Header";
import Page from "../components/Page";
import bannerImage from "../public/galatic-city.webp";
import { getEventDate, getEvents } from "../utils/helpers";
import useModal from "../utils/use-modal";

const events = getEvents();

export interface DraftTwoProps {}

// w-full sm:w-1/3 md:w-1/4

const DraftTwo: React.FC<DraftTwoProps> = (props) => {
  const { modal, open, close } = useModal();

  return (
    <>
      <Page header={<Header />} oneScreen>
        <Head>
          <title>Bus To Show</title>
          <meta name="description" content="Bus to show." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <GenericBanner img={bannerImage}>
          <h1 className="font-bold text-4xl text-center">Save the Future</h1>

          <p className="mx-auto max-w-4xl text-center">
            Bus to Show is coming to you in the present time from the future
            where people do not need to use their own hands to drive a vehicle.
            In the future, and now in the present, Bus to Show's strategy is to
            provide autonomous vehicles in which humans board and magically get
            transported to their favorite local events. Why is Bus to Show
            bringing back this incredible technology? It's simple: it saves
            lives and saves fuel that preserves the environment for future
            people. All you need to do is hop on board and be{" "}
            <span className="font-bold">apart of the solution.</span>{" "}
          </p>
        </GenericBanner>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="rounded-xl shadow-md overflow-hidden bg-white "
            >
              <div className="md:flex md:flex-col">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full"
                    src={
                      index % 2 === 0
                        ? "https://source.unsplash.com/NYrVisodQ2M/500x300"
                        : "https://source.unsplash.com/KR53q8ZDd_Y/500x300"
                    }
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="p-8">
                  {/**  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a> */}
                  <div className="text-xl leading-tight font-bold text-logo">
                    {event.headliner}
                  </div>
                  <div className="text-sm tracking-wide my-2 font-semibold">
                    {getEventDate(event).toLocaleString(DateTime.DATETIME_MED)}
                  </div>
                  <p className="mt-2 text-gray-500">
                    {event.headlinerBio.slice(0, 200)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Page>

      {modal}
    </>
  );
};

export default DraftTwo;
