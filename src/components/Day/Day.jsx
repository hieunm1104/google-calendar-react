import dayjs from 'dayjs';
import React, { useState } from 'react';
import ModalInfoEvent from '../ModalInfoEvent'
import { useSelector } from 'react-redux';
function Day({ day, weekIdx }) {

    const [isOpen, setIsOpen] = useState(false)
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const monthIndex = useSelector(state => state.month.monthIndex);

    return (
        <div className='flex flex-col border border-gray-200 h-32' >

            <header className='flex flex-col items-center ' onClick={() => setIsOpen(true)}>
                {/* {
                    weekIdx === 0 && (
                        <p className='text-lg text-calendar-color'>{day.format('ddd').toUpperCase()}</p>
                    )
                } */}
                <p className={`text-lg p-1 my-1 text-center ${day.month() !== monthIndex % 12 &&
                    'text-gray-400 text-center text-lg'
                    } text-[16px] ${day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
                        ? 'bg-dark-blue text-white rounded-full px-[12px] py-[2px] text-center'
                        : ''}`} >
                    {
                        day.format('D')
                    }
                </p>
            </header>
            {/* <ModalInfoEvent isOpen={isOpen} setIsOpen={setIsOpen} item={false} /> */}
        </div>
    )
}

export default Day;