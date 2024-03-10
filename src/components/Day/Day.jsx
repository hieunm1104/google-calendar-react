import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDaySelected } from "../../redux/dayReducer";
import { setIsModalVisible } from "../../redux/modalReducer";
import EventModal from "../EventModal/EventModal";
import ModalInfoEvent from "../ModalInfoEvent";
function Day({ day }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const monthIndex = useSelector((state) => state.month.monthIndex);
  const dispatch = useDispatch();
  const daySelected = useSelector((state) => state.day.daySelected);
  const visibleModal = useSelector((state) => state.modal.isModalVisible);
  const [selectedItem, setItem] = useState();

  const handleDaySelected = (day) => {
    const action = setDaySelected({ daySelected: day });
    dispatch(action);
  };
  const handleVisibelModal = () => {
    const action = setIsModalVisible({ isModalVisible: true });
    dispatch(action);
  };
  const openModal = (item) => {
    if (item) {
      setItem(item);
      setIsOpen(true);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const listEvent = useSelector((state) => {
    const a = Object.keys(state.event.listEvent).find(
      (key) =>
        dayjs(new Date(key)).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    return !!a ? state.event.listEvent[a] : undefined;
  });
  return (
    <>
      <div
        className="flex flex-col border border-gray-200 h-32"
        onClick={() => {
          handleVisibelModal();
          handleDaySelected(day);
        }}
      >
        <header className="flex flex-col items-center ">
          <button
            className={`text-lg p-1 my-1 text-center ${
              day.month() !== monthIndex % 12 &&
              "text-gray-400 text-center text-lg"
            } text-[16px] ${
              day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
                ? "bg-dark-blue text-white rounded-full px-[12px] py-[2px] text-center"
                : ""
            } ${
              daySelected === day
                ? "bg-dark-blue text-white rounded-full px-[12px] py-[2px] text-center"
                : ""
            }`}
          >
            {day.format("D")}
          </button>

          {listEvent &&
            listEvent.map((item, index) => (
              <>
                {index < 2 && (
                  <>
                    <div
                      key={index}
                      className={`w-full text-left text-xs p-1 bg-dark-orange rounded mb-0.5 text-dark-blue font-semibold truncate border-l-4 ${item.data.labelColor.border} cursor-pointer hover:opacity-80`}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                    >
                      {item.data.title}
                    </div>
                  </>
                )}
              </>
            ))}
          {listEvent?.length >= 3 && (
            <div className="text-blue-dark font-semibold text-xs px-1 text-left">
              {listEvent?.length - 2} More
            </div>
          )}
          <ModalInfoEvent
            closeModal={(e) => {
              closeModal();
            }}
            isOpen={isOpen}
            item={selectedItem}
          />
        </header>
      </div>
      {visibleModal && <EventModal />}
    </>
  );
}

export default Day;
