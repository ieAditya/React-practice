import { useState } from "react";
import InputBox from "./Components/InputBox";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);

  const convert = useCallback(() => {
    const url = `https://v6.exchangerate-api.com/v6/9f725f273f5dfd516d370784/latest/${from}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const conversionRate = data.conversion_rates[to];
        const convertedAmt = fromAmount * conversionRate;
        setToAmount(convertedAmt.toFixed(3));
      });
  }, [from, to, fromAmount]);

  useEffect(() => {
    const url = "https://v6.exchangerate-api.com/v6/9f725f273f5dfd516d370784/latest/USD";
    const data = fetch(url).then(response => response.json()).then(data => {
      const ls = Object.keys(data.conversion_rates);
      console.log(ls);
      setCurrencyList(ls);
    });
  }, []);

  const handleSwap = () => {
    const tempTo = to;
    const tempToAmount = toAmount;
    setTo(from);
    setToAmount(fromAmount);
    setFrom(tempTo);
    setFromAmount(tempToAmount);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" 
              currencyList={currencyList}
              amount = {fromAmount}
              currency={from}
              setAmount = {setFromAmount}
              setCurrency = {setFrom}
              readOnly={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={handleSwap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" 
              currencyList={currencyList}
              amount = {toAmount}
              currency={to}
              setAmount = {setToAmount}
              setCurrency = {setTo}
              readOnly={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
