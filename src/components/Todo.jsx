export default function Todo(){
    return (
        <div className="border-red-600 border-2 w-96 ">
            <Title />
        </div>

        
    )
}

function Title(){
    return (  
        <div>
            <h1 className="text-8xl text-gray-400 text-center">todos</h1>
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