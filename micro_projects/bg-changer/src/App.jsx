import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Olive", value: "olive", textColor: "text-white", bgColor: "bg-black" },
    { name: "Red", value: "red", textColor: "text-white", bgColor: "bg-red-500" },
    { name: "Blue", value: "blue", textColor: "text-white", bgColor: "bg-blue-500" },
    { name: "Green", value: "green", textColor: "text-white", bgColor: "bg-green-500" },
    { name: "Yellow", value: "yellow", textColor: "text-black", bgColor: "bg-yellow-400" },
    { name: "Purple", value: "purple", textColor: "text-white", bgColor: "bg-purple-500" },
    { name: "Black", value: "black", textColor: "text-white", bgColor: "bg-black" },
  ];

  return (
    <div
      className="fixed flex flex-wrap w-full h-screen justify-center items-center px-2 transition-all duration-700 ease-in-out"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center px-4 py-4 gap-3 bg-violet-300 rounded-2xl shadow-lg absolute bottom-6 max-w-[95%]">
        {colors.map((c) => (
          <button
            key={c.value}
            className={`px-5 py-2 rounded-3xl ${c.bgColor} ${c.textColor} 
              ${color === c.value ? "ring-4 ring-offset-2 ring-white" : ""}`}
            onClick={() => setColor(c.value)}
          >
            {c.name}
          </button>
        ))}

        {/* Color Picker */}
        <label className="flex items-center gap-2 px-5 py-2 rounded-3xl bg-gray-200 text-black cursor-pointer">
          Pick Color
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 p-0 border-none bg-transparent cursor-pointer"
          />
        </label>

        {/* Reset Button */}
        <button
          className="px-5 py-2 rounded-3xl bg-gray-700 text-white hover:bg-gray-900"
          onClick={() => setColor("white")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
