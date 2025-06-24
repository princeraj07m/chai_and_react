import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-violet-800 via-purple-700 to-indigo-800 text-white font-sans p-6">
      <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-6 w-80 border border-white/20">
        <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-xl">{count}</h1>

        <div className="flex gap-6">
          <button
            onClick={dec}
            className="text-4xl px-6 py-3 rounded-xl bg-white text-red-600 font-bold shadow-md hover:bg-red-100 active:scale-95 transition-all duration-200"
          >
            –
          </button>
          <button
            onClick={inc}
            className="text-4xl px-6 py-3 rounded-xl bg-white text-green-600 font-bold shadow-md hover:bg-green-100 active:scale-95 transition-all duration-200"
          >
            +
          </button>
        </div>

        <button
          onClick={reset}
          className="mt-4 px-6 py-2 text-lg font-semibold rounded-xl bg-yellow-300 text-black hover:bg-yellow-400 active:scale-95 shadow-md transition-all duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
