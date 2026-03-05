import { useState } from "react"
import { createRoot } from "react-dom/client"


export default function MyForm(){
    const [name, setName] = useState("")
    return (
        <form>
            <label> Enter your name:
                <input type="text" value={name}/>
            </label>
        </form>
    )
}