import React from 'react';
import dayjs from 'dayjs';
function CalendarHeader() {

    return (
        <header className='px-16 py-2 flex items-center text-3xl text-dark-blue text-bold'>
            {
            dayjs().format("MMMM YYYY")
            }
            <button className='material-icons-outlined cursor-pointer text-white mx-2 '>
                chevron_left
            </button>
            <button className='material-icons-outlined cursor-pointer text-white mx-2 '>
                chevron_right
            </button>
        </header>
    );
}

export default CalendarHeader;