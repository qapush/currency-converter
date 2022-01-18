import { useEffect, useState } from "react";
import Nbp from "../../services/Nbp";
import Calculator from "../Calculator/Calculator";
import './app.css'

function App() {
  
  const nbp = new Nbp();
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(['PLN', 'USD']);


  useEffect(() => {
    nbp.getTable().then((resp) => {
      setData(resp);
    });
  }, []);

  const swapSelected = () => {
    setSelected( selected => {
      return [...selected].reverse();
    }) 
  }

  const changeSelected = (selector, value) => {
    setSelected(selected => {
      let newSelected = [...selected];
      const index = selected.indexOf(selector);
      newSelected[index] = value;
      return newSelected;
    })
  }


  return (
    <div className="app">

      {data ? <Calculator 
        date={data.date}
        rates={data.rates}
        selected={selected}
        swapSelected={swapSelected}
        changeSelected={changeSelected}
      /> : null }

    </div>
  );
}


export default App;
