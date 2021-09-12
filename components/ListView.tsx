import clsx from "clsx";
import { DateTime } from "luxon";
import { useState } from "react";
import { getEventDate } from "../utils/helpers";
import { BtsEvent } from "../utils/types";

export interface ListViewProps {
  events: BtsEvent[];
}

const ListView: React.FC<ListViewProps> = ({ events }) => {
  const [event, setEvent] = useState<null | BtsEvent>(null);

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
            /* gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)", */
          }}
        >
          <div>Date</div>
          <div>Event</div>
        </div>

        {events.map((event, index) => (
          <div
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
                className="px-3 py-2 bg-logo text-white rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-100"
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
              <h1 className="text-logo text-3xl">{event.headliner}</h1>
              <h2 className="text-2xl">
                {getEventDate(event).toLocaleString(DateTime.DATETIME_SHORT)}
              </h2>
            </div>

            <p>{event.headlinerBio}</p>
          </div>
        ) : (
          <div className="flex h-full">
            <div className="m-auto">
              <h1 className="font-bold text-2xl mb-3">No event selected!</h1>
              <p>Try selecting one on the left panel.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  /* return (
     *   <div className="flex space-x-2">
     *     <div className="w-1/4 shadow rounded p-4">
     *       <table className="table-auto">
     *         <thead>
     *           <tr>
     *             <th className="w-1/4">Date</th>
     *             <th className="w-3/4">Event</th>
     *           </tr>
     *         </thead>
     *         <tbody>
     *           {events.map((event) => (
     *             <tr
     *               key={event.id}
     *               onClick={() => setEvent(event)}
     *               className="border-b border-gray-300"
     *             >
     *               <td className="pr-2">{event.date}</td>
     *               <td className="pl-2">{event.headliner}</td>
     *             </tr>
     *           ))}
     *         </tbody>
     *       </table>
     *     </div>
     *     <div className="w-3/4">
     *       {event && (
     *         <div className="p-8 rounded shadow-lg">
     *           <div className="pb-3 mb-3 border-b-2 border-gray-300 space-y-3">
     *             <h1 className="font-bold text-6xl text-logo font-header">
     *               {event.headliner}
     *             </h1>
     *             <h2 className="font-bold text-3xl">
     *               {getEventDate(event).toLocaleString(DateTime.DATETIME_MED)}
     *             </h2>
     *           </div>
     *           <div dangerouslySetInnerHTML={{ __html: event.headlinerBio }} />

     *           <div className="flex mt-3">
     *             <button className="px-3 py-2 font-bold bg-logo rounded text-white ml-auto">
     *               Book
     *             </button>
     *           </div>
     *         </div>
     *       )}
     *     </div>
     *   </div>
     * ); */
};

export default ListView;
