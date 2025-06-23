import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor] = useState("olive");

  return (
  <div
    className="fixed flex flex-wrap w-full h-screen justify-center items-center px-2 gap-2"
    style={{
      backgroundColor: color,
      color: color === "black" ? "white" : "black",
    }}
  >
    <div className="flex flex-wrap justify-center px-5 py-5 gap-4 bg-white rounded-2xl shadow-lg absolute bottom-10 ">
      <button className="px-5 py-2 rounded-3xl bg-black text-white" onClick={() => setcolor("olive")}>
        Olive
      </button>
      <button className="px-5 py-2 rounded-3xl bg-red-500 text-white" onClick={() => setcolor("red")}>
        Red
      </button>
      <button className="px-5 py-2 rounded-3xl bg-blue-500 text-white" onClick={() => setcolor("blue")}>
        Blue
      </button>
      <button className="px-5 py-2 rounded-3xl bg-green-500 text-white" onClick={() => setcolor("green")}>
        Green
      </button>
      <button className="px-5 py-2 rounded-3xl bg-yellow-400 text-black" onClick={() => setcolor("yellow")}>
        Yellow
      </button>
      <button className="px-5 py-2 rounded-3xl bg-purple-500 text-white" onClick={() => setcolor("purple")}>
        Purple
      </button>
      <button className="px-5 py-2 rounded-3xl bg-black text-white" onClick={() => setcolor("black")}>
        Black
      </button>
    </div>
  </div>
);

}

export default App
