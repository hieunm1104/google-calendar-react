import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '../../util';
import { useDispatch,useSelector } from 'react-redux';
import { setMonthIndex } from '../../redux/monthReducer';
import { setSmallCalendarMonth } from '../../redux/monthReducer';
import { setDaySelected } from '../../redux/dayReducer';
import { setIsContentVisible } from '../../redux/modalReducer';
function SmallCalendar({ day }) {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());

    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const monthIndex = useSelector(state => state.month.monthIndex);

    const daySelected = useSelector(state => state.day.daySelected);
    const isContentVisible = useSelector(state => state.modal.isContentVisible);
    const dispatch = useDispatch();
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);



    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex));
      }, [currentMonthIndex]);
    

    function handlePrevMonth() {
        setCurrentMonthIndex(currentMonthIndex - 1);
    }
    function handleNextMonth() {
        setCurrentMonthIndex(currentMonthIndex + 1);
    }

    const handleMoveToMonth = () => {
        const action = setSmallCalendarMonth({
          smallCalendarMonth: currentMonthIndex,
        });
        const actionDay = setDaySelected({ daySelected: day });
        const actionContent = setIsContentVisible({ isContentVisible: true });
        dispatch(action);
        dispatch(actionDay);
        dispatch(actionContent);
      };
    
    return (
        <div className='p-10'>
            <header className='flex justify-between flex-col'>
                <button className='flex justify-between mb-6'>
                    <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2' onClick={handlePrevMonth}>
                        chevron_left
                    </span>
                    <p className="text-dark-blue font-bold text-base w-18 text-center">
                        {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
                            'MMMM YYYY'
                        )}
                    </p>
                    <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2' onClick={handleNextMonth}>
                        chevron_right
                    </span>
                </button >
                <div className="grid grid-cols-7 grid-rows-6 gap-2">
                    <div className="text-[16px] py-1 text-center ml-4">S</div>
                    <div className="text-[16px] py-1 text-center ml-4 ">M</div>
                    <div className="text-[16px] py-1 text-center ml-4">T</div>
                    <div className="text-[16px] py-1 text-center ml-4">W</div>
                    <div className="text-[16px] py-1 text-center ml-4">T</div>
                    <div className="text-[16px] py-1 text-center ml-4">F</div>
                    <div className="text-[16px] py-1 text-center ml-4">S</div>

                    {currentMonth &&
                        currentMonth.map((row, index) => (
                            <React.Fragment key={index}>
                                {row.map((day, i) => (
                                    <div key={i} className="p-1 text-center">
                                        <button
                                            className={`py-1 w-10 h10 ${day.month() !== currentMonthIndex % 12 &&
                                                'text-gray-400 text-center text-[16px]'
                                                } ${daySelected === day.format('D') ? 'bg-light-blue rounded-full' : ''}`}
                                        >
                                            <span className={`text-[16px] ${day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
                                                ? 'bg-light-blue text-white rounded-full px-[12px] py-[6px] text-center'
                                                : ''}`}>{day.format('D')}</span>
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