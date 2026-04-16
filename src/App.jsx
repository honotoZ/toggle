import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

function App() {
  const [flag, setFlag]=useState(true);

  return (
    <>
      <div className={`h-screen flex justify-center items-center gap-4
        ${flag?"bg-gray-100":"bg-gray-800"}
        `}>
          <button
          className='w-[13%] flex justify-between px-4 py-2 text-xl text-white bg-blue-500 cursor-pointer rounded-full 
          hover:bg-blue-400
          hover:scale-95
          transform
          transition-all 
          duration-150'
          onClick={()=>setFlag(!flag)}
          >
          <span className='text-xl'>Toggle</span>
          <span className='text-2xl flex items-center'>
            {
              flag?
                <FaSun className='text-yellow-500'/>
              :
                <FaRegMoon className='text-white'/>
            }
          </span>
          </button>
      </div>
    </>
  )
}

export default App
