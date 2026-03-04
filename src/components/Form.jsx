import { useState } from "react"
import { createRoot } from "react-dom/client"


export default function MyForm(){
    return (
        <form>
            <label> Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}