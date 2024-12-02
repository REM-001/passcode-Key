import { useEffect, useState } from "react";

function App() {
  const [passCode, setPassCode] = useState<string>(""); 
  const [correct, setCorrect] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  //const isWrong =  wrong && 'Wrong Password ❌';

  function handlePassKey(key: string | number) {
    if(passCode.length < 6) {
      setPassCode((prevCode) => prevCode + key)
    }
  }

  function handleDelete() {
    setPassCode(passCode.slice(0, -1)); 
  }

  useEffect(() => {
    if(passCode.length === 6) {
      if (passCode === "111189"){
        setCorrect(true)
        setPassCode('')
        setWrong(false)
      }
      else {
        setCorrect(false)
        setWrong(true)
        setPassCode('')
      }
    }
  },[passCode])

  console.log(passCode)

  return (
  <div className="App">
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto pt-28">
        {correct && <h2 className={`text-slate-50 mb-6 text-2xl`}> Correct Password ✅ </h2>}
        {wrong && <h2 className={`text-slate-50 mb-6 text-2xl`}>Wrong Password ❌</h2>}
      <div className={`flex justify-center gap-6 ${correct ? 'opacity-0' : 'opacity-100'}`}>
        {Array.from({length: 6}).map((_, index) => (
          <div key={index}
           className={`flex gap-6 size-2 items-center justify-center text-xl text-slate-50 border-2 rounded-full p-2 ${index < passCode.length && 'bg-slate-200'}`}>
          </div>
        ))}
      </div>
      <div className="mt-20 grid grid-cols-3 gap-8">
        {Array.from({length: 9}).map((_, index) => (
          <button 
          onClick={() => handlePassKey(index + 1)}
          key={index} 
          className="size-16 bg-slate-600 hover:bg-slate-900 active:scale-[0.91] gap-6 items-center text-center justify-center text-xl text-slate-50 border-2 rounded-full p-2">
            {index + 1}
          </button>
        ))}
        <button 
          onClick={handleDelete}
          className="col-span-3  bg-slate-600 hover:bg-slate-900 active:scale-[0.91] gap-6 items-center text-center justify-center text-xl text-slate-50 border-2 rounded-full p-2">
            Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default App
