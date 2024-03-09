import React, { useState } from "react";
import ModalInfoEvent from "../ModalInfoEvent";
import { VideoCameraIcon } from "@heroicons/react/outline";

function EventItem({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
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
          </div>

          {data.type === "appointment" && (
            <VideoCameraIcon className="mt-1 h-8 w-8 bg-blue-light rounded-full text-white p-1" />
          )}
        </div>

        <ModalInfoEvent setIsOpen={setIsOpen} isOpen={isOpen} item={data} />
      </div>
      {/* ) : (
            <div></div>
          )} */}
    </>
  );
}

export default EventItem;
