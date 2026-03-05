import { useState } from "react"
import { createRoot } from "react-dom/client"


export default function MyForm(){
    const [name, setName] = useState("John Doe")

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        alert(name)
    }

    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label> Enter your name:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <p>Current Value:{name}</p>
            <label>
                <input type="submit" />
            </label>
        </form>
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
        </>
    )
}