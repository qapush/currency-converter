import { useState, useEffect } from "react";
import Select from "../Select/Select";
import {BsArrowDownUp} from 'react-icons/bs'
import './calculator.css';

function Calculator({ date, rates, selected, swapSelected, changeSelected }) {

    const [amount, setAmount] = useState(null);
    const [result, setResult] = useState(null);

    const calculate = () => setResult( rates[selected[0]] / rates.PLN * rates.PLN / rates[selected[1]] * amount );

    useEffect( () => {
        if(amount) {
            calculate();
        }
    }, [selected, amount])

    const dateOfRate = new Date(date).toLocaleDateString('pl-PL', {day: 'numeric', month: 'long'})

  return (
    <div className="calculator">
      
      {date ? <div className="row"><h2>Kurs aktualny na {dateOfRate}</h2></div> : null}
      
      <div className="row row--first">
      <input 
        type="number" 
        onChange={ e => setAmount(e.target.value) }/>
      
      <Select 
        rates={rates} 
        selected={selected[0]} 
        onChange={changeSelected}
        />
      </div>
      
      <div className="row">
      <div>
        <button onClick={swapSelected}><BsArrowDownUp/></button>
      </div>
      </div>
     
      <div className="row">
      <Select 
        rates={rates} 
        selected={selected[1]} 
        onChange={changeSelected}
        />
      </div>
      
     <div className="row">
      <div className="result">
            <h3>
                {result > 0 && amount ? <h3>{result.toFixed(2)}</h3> : null}
            </h3>
        </div>
     </div>


    </div>
  );
}

export default Calculator;
