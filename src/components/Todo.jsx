import Title from "./Title"
import Form from "./Form"

export default function Todo(){
    return (
        <div className="border-[#32aaa6] border-l-2 shadow-xl mt-6 w-[600px] rounded-xl flex flex-col gap-28 justify-center ">
            <Title name="todos" />
            <Form />
        </div>

        
    )
}



