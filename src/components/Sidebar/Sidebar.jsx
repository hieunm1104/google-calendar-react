import React, { useState } from 'react';
import SmallCalendar from '../SmallCalendar/SmallCalendar';


function Sidebar(props) {

    return (
        <>
            <div className='bg-white rounded-xl'>
                <SmallCalendar />
                <div className='h-[1px] w-full bg-dark-blue'>

                </div>
                <div className='flex justify-between py-10 px-4'>
                    <p className='text-left text-dark-blue font-bold'>Upcoming Event</p>
                    <button className='rounded-[20px] bg-dark-blue p-4 text-white h-8 flex items-center text-sm'>View All</button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;