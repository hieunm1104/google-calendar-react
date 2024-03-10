import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Month from "./components/Month/Month";
import { useCallback, useState } from "react";

function App() {
  const isMobileDevices = window.matchMedia("(max-width: 768px)").matches;
  
  const [hiddenSidebar, setHiddenSidebar] = useState('')
  const [displayMonth, setDisplayMonth] = useState('')
  const handleToggleDisplay = useCallback(() => {
    if (isMobileDevices) {
      setHiddenSidebar('hidden')
      setDisplayMonth('flex')
    }
  }, [isMobileDevices])
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex gap-10 p-10">
          <Sidebar isMobileDevices={isMobileDevices} hiddenSidebar={hiddenSidebar} handleToggleDisplay={handleToggleDisplay}/>
          <Month displayMonth={displayMonth}/>
        </div>
      </div>
    </>
  );
}

export default App;
