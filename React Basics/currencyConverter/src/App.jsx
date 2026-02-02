import './App.css'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { useState } from 'react';

function App() {

    const [amount, setAmount] = useState(0);
    const [fromCurrencyType, setFromCurrencyType] = useState("USD")
    const [toCurrencyType, setToCurrencyType] = useState("INR")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(fromCurrencyType);
    // console.log(currencyInfo)

    const calculateConvertedAmount = () => {
        let multiplier = currencyInfo[toCurrencyType];
        console.log(amount * multiplier)
        setConvertedAmount((amount * multiplier).toFixed(2));
    }

    const swap = () => {
        // let temp = fromCurrencyType;
        setFromCurrencyType(toCurrencyType);
        setToCurrencyType(fromCurrencyType);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
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
                        calculateConvertedAmount();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            onAmountChange={setAmount}
                            onCurrencyChange={setFromCurrencyType}
                            currencyOptions={Object.keys(currencyInfo)}
                            selectCurrency={fromCurrencyType}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            onAmountChange={setConvertedAmount}
                            onCurrencyChange={setToCurrencyType}
                            currencyOptions={Object.keys(currencyInfo)}
                            selectCurrency={toCurrencyType}
                            amountDisable = {true}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    // onClick={calculateConvertedAmount}
                    >
                        Convert
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
