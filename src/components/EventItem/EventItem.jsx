import React, { useState } from "react";
import ModalInfoEvent from "../ModalInfoEvent";
import { VideoCameraIcon } from "@heroicons/react/outline";

function EventItem({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div
        className={`p-4 bg-dark-orange mb-2 rounded-md border-l-4 ${data.data.labelColor.border} mt-1 cursor-pointer  `}
        onClick={openModal}
      >
        <div className="flex justify-between items-start text-left">
          <div className="w-10/12">
            <div className="text-blue-dark text-sm font-bold mb-1">
              {data.data.title}
            </div>
            <div className="text-xs">
              {data.data.time.from.hour}:
              {data.data.time.from.minute < 10
                ? `0${data.data.time.from.minute}`
                : data.data.time.from.minute}{" "}
              - {data.data.time.to.hour}:
              {data.data.time.to.minute < 10
                ? `0${data.data.time.to.minute}`
                : data.data.time.to.minute}
            </div>
          </div>

          {data.type === "appointment" && (
            <VideoCameraIcon className="mt-1 h-8 w-8 bg-blue-light rounded-full text-white p-1" />
          )}
        </div>

        <ModalInfoEvent closeModal={(e) => {
          closeModal()
        }} isOpen={isOpen} item={data} />
      </div>
     
    </>
  );
}

export default EventItem;
