import { useState, useEffect } from "react";
import Select from "../Select/Select";

function Calculator({ date, rates, selected, swapSelected, changeSelected }) {

    const [amount, setAmount] = useState(null);
    const [result, setResult] = useState(null);

    const calculate = () => setResult( rates[selected[0]] / rates.PLN * rates.PLN / rates[selected[1]] * amount );

    useEffect( () => {
        if(amount) {
            calculate();
        }
    }, [selected, amount])

    const dateOfRate = new Date(date).toLocaleDateString('pl-PL', {weekday: 'long', day: 'numeric', month: 'long'})

  return (
    <div className="calculator">
      
      {date ? <h1>Kurs aktualny na {dateOfRate}</h1> : null}
      
      <input 
        type="number" 
        onChange={ e => setAmount(e.target.value) }/>
      
      <Select 
        rates={rates} 
        selected={selected[0]} 
        onChange={changeSelected}
        />
      
      <div>
        <button onClick={swapSelected}>reverse</button>
      </div>
     
      <Select 
        rates={rates} 
        selected={selected[1]} 
        onChange={changeSelected}
        />
      
      <div className="result">
          <h3>
              {result > 0 && amount ? result.toFixed(2) : null}
          </h3>
      </div>

    </div>
  );
}

export default Calculator;
