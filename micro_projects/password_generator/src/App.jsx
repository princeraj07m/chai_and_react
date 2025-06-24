import { useState } from 'react'
import './App.css'
import Generator from "./components/Generator"

function App() {

  return (
    <div className='flex flex-col min-h-screen justify-center items-center  bg-gradient-to-r from-violet-350 to-blue-500 '>
    <div className=" flex flex-col justify-center h-150 w-150 items-center py-10 space-y-10 bg-gradient-to-r from-blue-500 to-violet-350 p-8 space-y-6">
    <div className=" bg-black flex justify-center items-center rounded-3xl shadow-lg p-5 mb-6">
      <h1 className="text-4xl text-violet-100 text-center font-bold ">Password Generator</h1>
    </div>
    
      <Generator />
    
  </div>
  </div>
  )
}

export default App
