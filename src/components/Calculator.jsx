import { useState } from "react";


function Button(){

    const buttons = ['AC', '+/-','%','/','7','8','9','X','4','5','6','-','1','2','3','+','0','.','=']
    const signs = ['/','X','-','+']


    const[dispaly, setDispaly] = useState('0')


    let btn = buttons.map((v, idx) => 
        <div key={idx} className={`${v === '0' ? 'col-span-2' : ''}`}>
            <button className={` w-full h-full font-bold text-lg ${signs.includes(v) || v === '=' ? 'bg-[#F38636]' :'bg-white'}`}>
                {v}
            </button>
        </div>
    )

    function 


    return (
        <div className="bg-[#7A7B88] mt-10 ">
            <p className="flex items-center text-white justify-end text-4xl h-14">
                {display}
            </p>
            <div className="grid gap-[1px] grid-cols-4 p-[1px] h-96 w-80">
                {btn}
            </div>
        </div>
    )
    
    
            
}

export  default function Calculator(){
    return (
        <Button/>
    )
}