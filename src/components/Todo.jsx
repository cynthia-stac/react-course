import Title from "./Title"

export default function Todo(){
    return (
        <div className="border-red-600 border-2 w-96 ">
            <Title name="todos" />
        </div>

        
    )
}



function Form(){
    return (
        <div>
            <form >
                <input type="text" />
            </form>
        </div>
    )
}