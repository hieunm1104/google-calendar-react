import dayjs from 'dayjs';
import React, { useState } from 'react';
import ModalInfoEvent from '../ModalInfoEvent'

function Day({ day, weekIdx }) {

    const [isOpen, setIsOpen] = useState(false)

    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format('DD-MM-YY') ? 'bg-light-blue text-white rounded-full w-10' : '';
    }

    return (
        <div className='border border-gray-400 flex flex-col' >
            <header className='flex flex-col items-center' onClick={() => setIsOpen(true)}>
                {
                    weekIdx === 0 && (
                        <p className='text-lg text-calendar-color mt'>{day.format('ddd').toUpperCase()}</p>

                    )
                }
                <p className={`text-lg p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('D')}
                </p>
            </header>
            <ModalInfoEvent isOpen={isOpen} setIsOpen={setIsOpen} item={false} />
        </div>
    );
}

export default Day;