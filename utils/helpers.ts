import { DateTime } from "luxon";
import { BtsEvent } from "./types";
import eventsData from "../data/events.json";

export const getEventDate = (event: BtsEvent) =>
  DateTime.fromFormat(`${event.date} ${event.startTime}`, "D TT");

export const getEvents = (): BtsEvent[] => {
  return eventsData
    .map((event) => ({
      data: event,
      date: DateTime.fromFormat(`${event.date} ${event.startTime}`, "D TT"),
    }))
    .filter(({ date }) => date.diffNow().milliseconds > 0)
    .sort((a, b) => a.date.diff(b.date).milliseconds)
    .map(({ data }) => data);
};
