import { useState , useCallback } from 'react'
import './index.css'
import { useEffect } from 'react'

function Generator() {
  const [length, setlength] = useState(8)
  const [NumAllowed, setNumAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");

    function reversenum(){
        setNumAllowed(!NumAllowed);
        console.log(` useNum : ${!NumAllowed}`);
  }
    function reversechar(){
        setCharAllowed(!CharAllowed);
        console.log(` useChar : ${!CharAllowed}`);
  }

  const passwordGenerator = useCallback(() => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";

    if (NumAllowed) charset += "0123456789";
    if (CharAllowed) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);  // 0,1,2,3.......charset.length - 1
      pass += charset[randomIndex];
    }
    setPassword(pass);
  }, [length, NumAllowed, CharAllowed]);
  
   const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied!');
  };

  useEffect(() => {
    passwordGenerator();
}, [length, NumAllowed, CharAllowed]);

  return (
    <div className="flex flex-col justify-center items-center h-max bg-gradient-to-r from-violet-800 to-blue-500 p-8 space-y-6 rounded-lg shadow-lg">
        
        <div  className=' flex justify-center items-center h-full w-full space-x-3'>
            <input className='bg-white rounded-lg text-green-800 font-bold px-2 py-2' placeholder=' Password ' value={password} readOnly></input>
            
            <button onClick={passwordGenerator} className="font-bold text-white bg-violet-800 px-3 py-1.5 rounded-lg hover:bg-violet-800">
                Generate
            </button>
            <button onClick={copyToClipboard} className="font-bold text-white bg-violet-800 px-3 py-1.5 rounded-lg hover:bg-violet-800">
                copy
            </button>
        </div>

        <div className="flex justify-center items-center w-full flex-wrap gap-10">

            <div className="flex flex-col items-center">
                <input
                    type="range"
                    id="volume"
                    name="volume"
                    min="8"
                    max="25"
                    value={length}
                    onChange={(e) => setlength(Number(e.target.value))}
                    className="w-64 h-2 rounded-lg cursor-pointer accent-violet-800"
                />
                <h2 className="text-xl text-white mt-2">Length ({length})</h2>
            </div>


  <div className="flex flex-col gap-4">
    <label className="flex items-center gap-2 text-white text-lg">
      <input
        type="checkbox"
        onChange={reversenum}
        className="w-5 h-5 accent-violet-800"
      />
      Numbers
    </label>

    <label className="flex items-center gap-2 text-white text-lg">
      <input
        type="checkbox"
        onChange={reversechar}
        className="w-5 h-5 accent-violet-800"
      />
      Characters
    </label>
  </div>
</div>

    </div>
  )
}

export default Generator;