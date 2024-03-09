import { Dialog, Transition } from '@headlessui/react';
import { ClockIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../redux/eventsReducer';


const ModalInfoEvent = ({item, isOpen, closeModal}) => {

  const dispatch = useDispatch();



  return (
    <Transition appear show={isOpen} as={Fragment} onClick={(e) => e.stopPropagation()}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-start border-b-2 pb-4
            "
              >
                <div className="flex w-10/12">
                  <div className="text-blue-dark mr-3">Title:</div>
                  <div>{item.data.title}</div>
                </div>
                <button onClick={closeModal}>
                  <XIcon className="h-4" />
                </button>
              </Dialog.Title>

              <div className="mt-2">
                <p className="text-sm text-gray-500 flex justify-start items-center">
                  {/* <ClockIcon className="h-5 w-5 bg-blue-dark rounded-full text-white mr-3" />
                  {item.data.time.from.hour < 10
                    ? `0${item.data.time.from.hour}`
                    : item.data.time.from.hour}
                  {':'}
                  {item.data.time.from.minute < 10
                    ? `0${item.data.time.from.minute}`
                    : item.data.time.from.minute}
                  {' - '}
                  {item.data.time.to.hour < 10
                    ? `0${item.data.time.to.hour}`
                    : item.data.time.to.hour}
                  {':'}
                  {item.data.time.to.minute < 10
                    ? `0${item.data.time.to.minute}`
                    : item.data.time.to.minute} */}
                </p>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-500 flex">
                  <div className="text-blue-dark mr-3 ">Description:</div>
                  <div>{item.data.description}</div>
                </p>
              </div>

              <div className="mt-4 justify-end flex">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-1 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 mr-2"
                  onClick={() => {
                    const action = deleteEvent({
                      id: item.id,
                      date: item.data.date,
                    });

                    dispatch(action);
                    closeModal();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalInfoEvent;
