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

    return (
        <form>
            <label> Enter your name:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <p>Current Value:{name}</p>
            <label>
                <input type="submit" />
            </label>
        </form>
    )
}