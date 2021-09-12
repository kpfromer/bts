import { DateTime } from "luxon";
import Head from "next/head";
import React, { useMemo } from "react";
import Banner from "../components/Banner";
import { Header } from "../components/Header";
import ListView from '../components/ListView';
import Page from "../components/Page";
import eventsData from '../data/events.json';
import useModal from "../utils/use-modal";

export interface DraftThreeProps {

}

const DraftThree: React.FC<DraftThreeProps> = (props) => {
    const { modal, open, close } = useModal();

    const sortedEvents = useMemo(() => {
        return eventsData.map(event => ({
            data: event, date: DateTime.fromFormat(
                `${event.date} ${event.startTime}`,
                "D TT"
            )
        })).filter(({ date }) => date.diffNow().milliseconds > 0)
            .sort((a, b) => a.date.diff(b.date).milliseconds)
            .map(({ data }) => data)
    }, [eventsData])

    return (
        <>
            <Page header={
                <Header />
            }
                oneScreen>
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
}

export default DraftThree;
