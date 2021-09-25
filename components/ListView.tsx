import clsx from "clsx";
import { DateTime } from "luxon";
import { useState, useMemo } from "react";
import { getEventDate, chunkToParagraphs } from "../utils/helpers";
import { BtsEvent } from "../utils/types";

export interface ListViewProps {
  events: BtsEvent[];
}

const ListView: React.FC<ListViewProps> = ({ events }) => {
  const [event, setEvent] = useState<null | BtsEvent>(null);
  const [filter, setFilter] = useState("");

  const filteredEvents = useMemo(
    () =>
      filter !== ""
        ? events.filter((event) =>
            event.headliner.toLowerCase().includes(filter.toLowerCase())
          )
        : events,
    [events, filter]
  );

  const gridStyle = {
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr) minmax(0, 1fr)",
  };

  return (
    <div className="grid gap-3 grid-cols-2 mt-5 mb-3 flex-grow min-h-0">
      <div className="flex flex-col border border-gray-300 rounded-lg min-h-0 overflow-y-auto">
        <div
          className="grid gap-3 grid-cols-3 font-bold text-3xl text-logo p-3 border-b-2 border-gray-300"
          style={{
            ...gridStyle,
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
          }}
        >
          <div className="font-header">Date</div>
          <div className="flex space-x-6">
            <div className="font-header">Event</div>

            <input
              placeholder="Search"
              className="flex-grow text-sm px-2 py-3 border border-gray-200 rounded-lg text-black bg-gray-50"
              onChange={(ev) => setFilter(ev.target.value)}
            />
          </div>
        </div>

        {filteredEvents.map((event, index) => (
          <div
            key={event.id}
            className={clsx(
              "grid gap-3 grid-cols-3 p-3 group",
              index !== events.length - 1 && "border-b border-gray-300"
            )}
            style={gridStyle}
          >
            <div>
              {getEventDate(event).toLocaleString({
                ...DateTime.DATE_SHORT,
                weekday: "long",
              })}
            </div>
            <div>{event.headliner}</div>
            <div>
              <button
                className="px-3 py-2 bg-logo text-white rounded-lg group-hover:opacity-100 opacity-0 transition-all duration-100 hover:bg-bts-600"
                onClick={() => setEvent(event)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-gray-300 p-3 rounded-lg min-h-0 overflow-y-auto">
        {event ? (
          <div>
            <div className="pb-3 mb-3 space-y-2 font-bold border-b border-gray-300">
              <h1 className="text-logo text-4xl font-header">
                {event.headliner}
              </h1>
              <h2 className="text-2xl">
                {getEventDate(event).toLocaleString(DateTime.DATETIME_SHORT)}
              </h2>
            </div>

            {event.headlinerBio?.length > 0 ? (
              <div className="space-y-3">
                {chunkToParagraphs(event.headlinerBio).map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            ) : (
              <div>No details about the artist!</div>
            )}

            <div className="mt-3 flex">
              <button
                className="ml-auto px-3 py-2 font-bold bg-bts-500 hover:bg-bts-600 text-white rounded-lg transition-colors"
                onClick={() => alert("Book")}
              >
                Book
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full">
            <div className="m-auto text-center">
              <h1 className="font-bold text-2xl mb-3 font-header">
                No event selected!
              </h1>
              <p>Try selecting one on the left panel.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListView;
