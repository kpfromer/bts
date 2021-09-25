import { DateTime } from "luxon";
import { BtsEvent } from "./types";
import eventsData from "../data/events.json";

export const getEventDate = (event: BtsEvent) =>
  DateTime.fromFormat(`${event.date} ${event.startTime}`, "D TT");

export const getEvents = (): BtsEvent[] => {
  return (eventsData as unknown as BtsEvent[])
    .map((event) => ({
      data: event,
      date: DateTime.fromFormat(`${event.date} ${event.startTime}`, "D TT"),
    }))
    .filter(({ date }) => date.diffNow().milliseconds > 0)
    .sort((a, b) => a.date.diff(b.date).milliseconds)
    .map(({ data }) => data);
};

export const chunkToParagraphs = (data: string): string[] => {
  const paragraphs = data.split(". ");

  const chunks: string[][] = [];

  for (let i = 0; i < paragraphs.length; ++i) {
    if (i % 4 === 0) chunks.push([]);
    chunks[chunks.length - 1].push(paragraphs[i]);
  }

  return chunks.map((items) => items.join("\n"));
};
