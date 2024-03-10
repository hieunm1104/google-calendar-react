import React from 'react';
import Day from '../Day/Day';
import { useSelector } from 'react-redux';
import { getMonth } from '../../util';
import CalendarHeader from '../Calendar/CalendarHeader';
function Month({displayMonth}) {
    const monthIndex = useSelector(state => state.month.monthIndex);
    const month = getMonth(monthIndex);
    return (
        <div className={`flex-col w-full h-full bg-white p-10 rounded-2xl ${displayMonth || 'hidden'} md:flex`}>
            <CalendarHeader />
            
            <div className='flex-1 grid grid-cols-7'>
                <div className="text-xs py-1 text-center font-bold text-gray-400">SUN</div>
            <div className="text-xs py-1 text-center font-bold text-gray-400">MON</div>
            <div className="text-xs py-1 text-center font-bold text-gray-400">TUE </div>
            <div className="text-xs py-1 text-center font-bold text-gray-400">WED </div>
            <div className="text-xs py-1 text-center font-bold text-gray-400">THU </div>
            <div className="text-xs py-1 text-center font-bold text-gray-400">FRI</div>
            <div className="text-xs py-1 text-center font-bold text-gray-400">SAT</div>
                {
                    month.map((week, i) => (
                        <React.Fragment key={i}>
                            {
                                week.map((day, j) => (
                                    <Day day={day} key={j} weekIdx={i} />
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}

export default Month;
