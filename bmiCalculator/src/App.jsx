import { useState } from 'react'
import './App.css'

function App() {
  const [wt, setWt] = useState("");
  const [ht, setHt] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  function onSubmitButton() {
    if (wt === '0' || ht === '0' || wt === "" || ht === "") {
      alert("Please provide valid input");
    } else {
      let calculatedBMI = (wt / (ht * ht)) * 703;
      calculatedBMI = calculatedBMI.toFixed(1);
      setBmi(calculatedBMI);

      if (calculatedBMI < 25) {
        setMessage("You are underweight");
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setMessage("You are healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  }

  function onChangeHandlerW(e) {
    setWt(e.target.value);
  }

  function onChangeHandlerH(e) {
    setHt(e.target.value);
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-xs bg-white shadow-md rounded-lg p-8">
        <h2 className="text-center text-xl font-bold mb-6">BMI Calculator</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
            Weight (lbs)
          </label>
          <input
            type="number"
            id="weight"
            placeholder="Enter weight"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={wt}
            onChange={onChangeHandlerW}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
            Height (in)
          </label>
          <input
            type="number"
            id="height"
            placeholder="Enter height"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={ht}
            onChange={onChangeHandlerH}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onSubmitButton}
          >
            Submit
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              setHt("");
              setWt("");
              setBmi("");
              setMessage("");
            }}
          >
            Reload
          </button>
        </div>

        <p className="mt-6 text-center text-gray-700">
          {bmi && <>Your BMI is: {bmi}</>}
          <div>{message}</div>
        </p>
      </div>
    </div>
  )
}

export default App;
