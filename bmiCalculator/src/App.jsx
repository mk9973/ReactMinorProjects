import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[wt,setWt]=useState("");
  const[ht,setHt]=useState("");
  const[result,setResult]=useState("");
  const[bmi,setBmi]=useState(false);

  function onSubmitButton(){
      setBmi(true);
      const calculatedBMI = (wt / (ht * ht)) * 703;
      setResult(calculatedBMI.toFixed(2));
      console.log(calculatedBMI)
  }

  function onChangeHandlerW(e){
      setWt(e.target.value);
  }

  function onChangeHandlerH(e){
      setHt(e.target.value)
  }

  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="w-full max-w-xs bg-white shadow-md rounded-lg p-8">
      <h2 class="text-center text-xl font-bold mb-6">BMI Calculator</h2>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="weight">
          Weight (lbs)
        </label>
        <input
          type="number"
          id="weight"
          placeholder="Enter weight"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={wt}
          onChange={onChangeHandlerW}
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="height">
          Height (in)
        </label>
        <input
          type="number"
          id="height"
          placeholder="Enter height value"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={ht}
          onChange={onChangeHandlerH}
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onSubmitButton}
        >
          Submit
        </button>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={()=>{ setHt("")
            setWt("")
            setBmi(false);
          }}
        >
          Reload
        </button>
      </div>

      <p class="mt-6 text-center text-gray-700">
        Your BMI is: {bmi ?<span class="font-bold">{result}</span> :<span class="font-bold">N/A</span>}
      </p>
    </div>
  </div>
  )
}

export default App
