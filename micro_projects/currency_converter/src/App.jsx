import { useState } from 'react'
import './App.css'

function App() {
  const [iamount, setiAmount] = useState('');
  const [famount, setfAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  const conversionRate = 74.85; // 1 USD = 74.85 INR

  function calculate() {
    if (fromCurrency === 'usd' && toCurrency === 'inr') {
      setfAmount(Number(iamount) * conversionRate);
    } else if (fromCurrency === 'inr' && toCurrency === 'usd') {
      setfAmount(Number(iamount) / conversionRate);
    } else if (fromCurrency === toCurrency) {
      setfAmount(Number(iamount));
    } else {
      setfAmount(0);
    }
  }

  return (
    <div className=" border-1 border-amber-300  flex flex-col items-center justify-center h-screen bg-black">
    <div className=" border-2 border-amber-300  flex flex-col items-center justify-center px-14 py-7 bg-black">
      
      <h1 className="text-5xl font-bold text-amber-500 py-7">Currency Converter</h1>

      <div className="flex flex-col items-center ">
        <input
          onChange={e => setiAmount(e.target.value)}
          type="number"
          placeholder="Amount"
          className=" flex fit-content text-amber-300 p-2 m-2 border text-center border-gray-300 rounded placeholder-gray-500 "
        />
      </div>

      <div>
        <select
          className="p-2 m-2 border text-gray-500 border-gray-300 rounded"
          value={fromCurrency}
          onChange={e => setFromCurrency(e.target.value)}
        >
          <option value="" disabled hidden>From</option>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
        </select>

        <select
          className="p-2 m-2 border text-gray-500 border-gray-300 rounded"
          value={toCurrency}
          onChange={e => setToCurrency(e.target.value)}
        >
          <option value="" disabled hidden>To</option>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
        </select>

        <button onClick={calculate} className="p-2 m-2 bg-amber-500 text-white rounded">Convert</button>
      </div>

      <div className=" text-amber-500 py-5">  {/*border border-amber-500 */}
        <p className=" border border-amber-500 text-2xl px-2 py-2">Converted Amount: {famount.toFixed(2)}</p>
        <p className=" text-amber-50 py-5 px-5">Exchange Rate: 1 USD = 74.85 INR</p>
      </div>
    </div>
    </div>
  );
}

export default App;
