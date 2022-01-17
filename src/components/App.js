import { useEffect, useState } from "react";
import Nbp from "../services/Nbp";
import './app.css'

function App() {
  
  const nbp = new Nbp();
  const [date, setDate] = useState(null);
  const [rates, setRates] = useState([]);
  const [selected, setSelected] = useState(['PLN', 'PSD']);


  useEffect(() => {
    nbp.getTable().then((resp) => {
      setDate(resp.date);
      setRates(resp.rates);
    });
  }, []);

  useEffect(() => {
    console.log("render");
  });

  

  return (
    <div className="app">
      {date ? <h1>{date}</h1> : null}

  

      <div>
        <button>reverse</button>
      </div>

    </div>
  );
}

const Select = ({currency}) => {

  const currencies = !rates
    ? null : Object.keys(rates).map((item, index) => {
        return (
          <option id={index} value={item}>
            {item}
          </option>
        );
      });

  return(
    <div>
      <select>

      </select>
    </div>
  )
}

export default App;
