import { useState } from 'react'
import './App.css'
import { getMonth } from './util'
import CalendarHeader from './components/Calendar/CalendarHeader'
import Sidebar from './components/Sidebar/Sidebar'
import Month from './components/Month/Month'
import { useSelector } from 'react-redux'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex gap-10 p-10">
          <Sidebar />
          
          <Month/>
        </div>
      </div>
    </>
  )
}

export default App
