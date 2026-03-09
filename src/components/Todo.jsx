import Title from "./Title"
import Form from "./Form"

export default function Todo(){
    return (
        <div className="border-[#32aaa6] bg-gray-100 border-l-2 shadow-xl my-14 w-[600px] rounded-xl flex flex-col gap-28 justify-center ">
            <Title name="todos" />
            <Form />
        </div>

        
    )
}



