import { useState, useEffect } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/a105c2aad325ecd33f258a3d/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["conversion_rates"]));
    }, [currency]);
    
    // console.log(data);
    
    return data;
}

export default useCurrencyInfo;