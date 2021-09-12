import { format, subHours, startOfMonth } from "date-fns";
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";
import { useMemo, useState } from "react";
import data from "../data/events.json";
import { DateTime } from "luxon";
import { BtsEvent } from "../utils/types";

export interface CalendarProps {
  onClick: (event: BtsEvent) => void;
}

interface EventType {
  title: string;
  date: Date;
  data: BtsEvent;
}

const Calendar: React.FC<CalendarProps> = ({ onClick }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(new Date())
  );

  const eventData = useMemo(() => {
    return (data as BtsEvent[]).map((event) => ({
      title: event.headliner,
      date: DateTime.fromFormat(
        `${event.date} ${event.startTime}`,
        "D TT"
      ).toJSDate(),
      data: event,
    }));
  }, data);

  return (
    <MonthlyCalendar
      currentMonth={currentMonth}
      onCurrentMonthChange={(date) => setCurrentMonth(date)}
    >
      <MonthlyNav />
      <MonthlyBody
        events={[
          ...eventData,
          // { title: 'Call John', date: subHours(new Date(), 2) },
          // { title: 'Call John', date: subHours(new Date(), 1) },
          // { title: 'Meeting with Bob', date: new Date() },
        ]}
      >
        <MonthlyDay<EventType>
          renderDay={(data) =>
            data.map((item, index) => (
              <div
                className="cursor-pointer"
                onClick={() => onClick(item.data)}
              >
                <DefaultMonthlyEventItem
                  key={index}
                  title={item.title}
                  date={DateTime.fromJSDate(item.date).toLocaleString(
                    DateTime.TIME_SIMPLE
                  )}
                />
              </div>
            ))
          }
        />
      </MonthlyBody>
    </MonthlyCalendar>
  );
};

export default Calendar;
