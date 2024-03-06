import { useState } from 'react'
import './App.css'
import { getMonth } from './util'
import CalendarHeader from './components/Calendar/CalendarHeader'
import Sidebar from './components/Sidebar/Sidebar'
import Month from './components/Month/Month'

function App() {

  const [currentMonth, setCurrentMonth] = useState(getMonth())

  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </>
  )
}

export default App
