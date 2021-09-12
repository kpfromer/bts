import { DateTime } from "luxon";
import { useState } from "react";
import { getEventDate } from "../utils/helpers";
import { BtsEvent } from "../utils/types";

export interface ListViewProps {
  events: BtsEvent[];
}

const ListView: React.FC<ListViewProps> = ({ events }) => {
  const [event, setEvent] = useState<null | BtsEvent>(null);
  return (
    <div className="flex space-x-2">
      <div className="w-1/4 shadow rounded p-4">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="w-1/4">Date</th>
              <th className="w-3/4">Event</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} onClick={() => setEvent(event)}>
                <td>{event.date}</td>
                <td>{event.headliner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-3/4">
        {event && (
          <div className="p-8 rounded shadow-lg">
            <div className="pb-3 mb-3 border-b-2 border-gray-300 space-y-3">
              <h1 className="font-bold text-6xl text-logo font-header">
                {event.headliner}
              </h1>
              <h2 className="font-bold text-3xl">
                {getEventDate(event).toLocaleString(DateTime.DATETIME_MED)}
              </h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: event.headlinerBio }} />

            <div className="flex mt-3">
              <button className="px-3 py-2 font-bold bg-logo rounded text-white ml-auto">
                Book
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListView;
