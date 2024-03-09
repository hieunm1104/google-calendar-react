import React, { useState, useEffect } from "react";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import { useSelector } from "react-redux";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import dayjs from "dayjs";
import { getMonth } from "../../util";
import EventItem from "../EventItem/EventItem";
function Sidebar(props) {
  const today = useSelector((state) => state.day.todaySelected);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const monthIndex = useSelector((state) => state.month.monthIndex);
  dayjs.extend(isSameOrAfter);
  const [toggleView, setToggleView] = useState(true);

  const listEvent = useSelector((state) => {
    const a = Object.keys(state.event.listEvent)
      .filter((key, index) => {
        return dayjs(new Date(key)).isSameOrAfter(
          dayjs(new Date().setHours(0, 0, 0, 0))
        );
      })
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .map((i) => ({
        [i]: state.event.listEvent[i],
      }));

    return a;
  });
  const listCount = useSelector((state) => {
    const a = Object.keys(state.event.listEvent)
      .filter((key, index) => {
        return dayjs(new Date(key)).isSameOrAfter(
          dayjs(new Date().setHours(0, 0, 0, 0))
        );
      })
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .map((i) => state.event.listEvent[i].length);

    return a;
  });
  return (
    <>
      <div className="bg-white rounded-xl">
        <SmallCalendar />
        <div className="h-[1px] w-full bg-dark-blue"></div>

        <div className="flex justify-between pt-6 px-4">
          <p className="text-left text-dark-blue font-bold">Upcoming Events</p>

          <button
            className="rounded-[20px] bg-dark-blue p-4 text-white h-8 flex items-center text-sm"
            onClick={() => setToggleView(!toggleView)}
          >
            {toggleView ? "View All" : "Hide"}
          </button>
        </div>
        <div className="text-left px-4 text-gray-400 font-black">
          Today,{dayjs().date()}{" "}
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMM")}
        </div>
        <div>
          {listEvent.length > 0 ? (
            <div>
              {listEvent &&
                listEvent.map((data, key) => (
                  <div>
                    {data[Object.keys(data)[0]].map((item, index) => {
                      if (toggleView) {
                        let count = 0;
                        for (let i = 0; i < key; i++) {
                          count = count + listCount[i];
                        }
                        if (index + count <= 2) {
                          return <EventItem data={item} key={index} />;
                        }
                      } else {
                        return <EventItem data={item} key={index} />;
                      }
                    })}
                  </div>
                ))}
            </div>
          ) : (
            "No Event"
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
