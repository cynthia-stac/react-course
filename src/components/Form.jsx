import {useState} from "react"

export default function Form(){

  const [mywork, setMywork] = useState([])
  const [todos, setTodos] = useState([])

  function handleChange(formData){
      let work = formData.get('work')
      setMywork(prev => [...prev, work]) 
      console.log(mywork)     
  }

  function removeItem(arr,index){
    if(index){
      arr.filter(v => indexOf(v) !== index )
    }
  }

  let list = mywork.map((item, index) => {
        return (

          <div className="m-10 flex justify-between border-b shadow-lg p-5">
            <div className="flex gap-4">
                <input type="checkbox" />
                <p>{item !== "" ? item:null}</p>
            </div>
            <button onClick={removeItem} className="text-red-600 bg-gray-200 h-8 w-8 flex justify-center items-center rounded-full">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>

        )
      })


    return (
        <div>

              <div >
                <form action={handleChange} className=" border-[#2CAAA6] border-t shadow-xl flex justify-between gap-6 rounded-full m-6 h-10 items-center">
                <input type="text" name='work'   placeholder="Add todo..." className="pl-3 w-full outline-none rounded-full" />
                  <button className="bg-[#2CAAA6] mr-4 text-white rounded-full h-6 w-7 text-3xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  </button>
                </form>
              </div>
            {list}
        </div>
    )
}