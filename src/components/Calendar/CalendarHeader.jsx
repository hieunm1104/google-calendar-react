import dayjs from 'dayjs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMonthIndex } from '../../redux/monthReducer';
function CalendarHeader() {
    const monthIndex = useSelector(state => state.month.monthIndex);
    const dispatch = useDispatch();

  
    const handlePrevMonth = () => {
        const action = setMonthIndex({ monthIndex: monthIndex - 1 });
        dispatch(action);
    };
    const handleNextMonth= () => {
        const action = setMonthIndex({ monthIndex: monthIndex + 1 });
        dispatch(action);
      };
      const handleReset = () => {
        const action = setMonthIndex({ monthIndex: dayjs().month() });
        dispatch(action);
      };
    return (
        <header className='py-2 flex items-center text-3xl text-dark-blue text-bold'>

            <button className='border border-dark-blue p-2 rounded-lg text-base flex items-center justify-center h-10 w-20' onClick={handleReset}>Today</button>
            <button className='material-icons-outlined cursor-pointer mx-2' onClick={handlePrevMonth}>
                chevron_left
            </button>

            <button className='material-icons-outlined cursor-pointer mx-2' onClick={handleNextMonth}>
                chevron_right
            </button>
            <p className="text-dark-blue font-black text-base w-18 text-center">
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    'MMMM YYYY'
                )}
            </p>
        </header>
    );
}

export default CalendarHeader;