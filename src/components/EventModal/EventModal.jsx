import React, { useState } from "react";
import { setIsModalVisible } from "../../redux/modalReducer";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../../redux/eventsReducer";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const labelsClasses = [
  { bg: 'bg-indigo-500', border: 'border-indigo-500' },
  { bg: 'bg-gray-500', border: 'border-gray-500' },
  { bg: 'bg-green-500', border: 'border-green-500' },
  { bg: 'bg-blue-500', border: 'border-blue-500' },
  { bg: 'bg-red-500', border: 'border-red-500' },
  { bg: 'bg-purple-500', border: 'border-purple-500' },
];


function EventModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLable, setSelectedLable] = useState(labelsClasses[0]);
  const daySelected = useSelector((state) => state.day.daySelected);
  const dispatch = useDispatch();
  function handleModalVisible(isModalVisible) {
    const action = setIsModalVisible({ isModalVisible: false });
    dispatch(action);
  }
  const handleSubmit = (values) => {
    const data = {
      data: {
        ...values,
        labelColor: selectedLable,
        date: daySelected,
      },
      type: "appointment",
    };
    const action = addEvent({
      event: data,
    });
    dispatch(action);
    const actionModal = setIsModalVisible({ isModalVisible: false });
    dispatch(actionModal);
  };
  const schema = yup.object().shape({
    title: yup.string().required(),
  });
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form
        className="bg-white rounded-lg w-1/4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ title, description, daySelected, selectedLable });
        }}
      >
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button>
            <span
              className="material-icons-outlined text-gray-400"
              onClick={handleModalVisible}
            >
              close
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              form={form}
              required
              type="text"
              name="title"
              placeholder="Add title...."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:border-dark-blue focus:outline-none focus:ring-0"
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p className="text-left">{daySelected?.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description...."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:border-dark-blue focus:outline-none focus:ring-0"
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((labelClass, i) => (
                <div
                  key={i}
                  className={`${labelClass.bg} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={() => setSelectedLable(labelClass)}
                >
                  {labelClass === selectedLable && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
