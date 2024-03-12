import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth } from "../../util";
import { useDispatch, useSelector } from "react-redux";

function SmallCalendar({ day, handleToggleDisplay }) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const monthIndex = useSelector((state) => state.month.monthIndex);

  const daySelected = useSelector((state) => state.day.daySelected);
  const isContentVisible = useSelector((state) => state.modal.isContentVisible);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  useEffect(() => {
    setSelectedDay(daySelected)
  },[daySelected])
  
  function handlePrevMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
  }

  const handleClickDay = (day) => {
    setSelectedDay(day);
    handleToggleDisplay();
  };

  return (
    <div className="p-10">
      <header className="flex justify-between flex-col">
        <button className="flex justify-between mb-6">
          <span
            className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
            onClick={handlePrevMonth}
          >
            chevron_left
          </span>
          <p className="text-dark-blue font-bold text-base w-18 text-center">
            {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
              "MMMM YYYY"
            )}
          </p>
          <span
            className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
            onClick={handleNextMonth}
          >
            chevron_right
          </span>
        </button>
        <div className="grid grid-cols-7 grid-rows-6 gap-2">
          <div className="text-[16px] py-1 text-center ml-4">S</div>
          <div className="text-[16px] py-1 text-center ml-4">M</div>
          <div className="text-[16px] py-1 text-center ml-4">T</div>
          <div className="text-[16px] py-1 text-center ml-4">W</div>
          <div className="text-[16px] py-1 text-center ml-4">T</div>
          <div className="text-[16px] py-1 text-center ml-4">F</div>
          <div className="text-[16px] py-1 text-center ml-4">S</div>
          {currentMonth &&
            currentMonth.map((week, index) => (
              <React.Fragment key={index}>
                {week.map((day, i) => (
                  <div key={i} className="p-1 text-center ">
                    <button
                      className={`py-1 w-10 h10 ${
                        day.month() !== currentMonthIndex % 12 &&
                        "text-gray-400 text-center text-[16px]"
                      }  `}
                      onClick={() => handleClickDay(day)}
                    >
                      <div
                        className={`text-[16px] w-full h-full rounded-full p-[6px] ${
                          day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
                            ? "bg-light-blue text-white rounded-full text-center"
                            : ""
                        } ${
                            selectedDay === day
                            ? "bg-dark-blue text-white rounded-full text-center"
                            : ""
                        } ${dayjs(selectedDay).format('DD-MM-YY') === day.format('DD-MM-YY') ? "bg-dark-blue text-white rounded-full text-center"
                        : ""}`}
                      >
                        {day.format("D")}
                      </div>
                    </button>
                  </div>
                ))}
              </React.Fragment>
            ))}
        </div>
      </header>
    </div>
  );
}
export default SmallCalendar;
