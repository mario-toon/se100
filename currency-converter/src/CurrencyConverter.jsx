import {useEffect, useState} from "react"

function CurrencyConverter(props) {
    const [amount, setAmount] = useState("");

const [output, setOutput] = useState(0);

useEffect(
    () => {
        fetch(
            "https://v6.exchangerate-api.com/v6/d4f5b4ec487bbcb5e11b54e1/pair/" +
            props.currencyFrom +
            "/" +
            props.currencyTo +
            amount
        )
		    .then((res) => res.json())
		    .then((data) => setOutput(data.conversion_result));
    }, [
	    amount, 
        props.currencyFrom, 
        props.currencyTo
    ]);

    return (
        <div className="currencyContainer">
            <input 
            value={amount}
            placeholder="Enter amount"
            className="converterInput"
            onChange={(event)=> {
                setAmount(event.target.value);
            }}
            />
            <p>{props.currencyFrom}</p>
            <p>=</p>
            <p className="convertedAmount">{output}</p>
            <p>{props.currencyTo}</p>
        </div>
    );
}

export default CurrencyConverter;