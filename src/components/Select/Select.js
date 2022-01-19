import './select.css';

export default function Select({rates, selected, onChange}) {
    
    const options = Object.keys(rates).map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    
    return (
       <select value={selected} onChange={(e) => onChange(selected, e.target.value)}>
           {options}
       </select>
    )
}
