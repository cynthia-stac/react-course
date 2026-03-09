import {useState} from "react"

export default function Form(){

  const [mywork, setMywork] = useState([])

  function handleChange(formData){
      let work = formData.get('work')
      setMywork(prev => [...prev, work]) 
      console.log(mywork)     
  }
  let list = mywork.map(item => <p>{item}</p>)


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