import { useState } from "react";


function Button(){

    const buttons = ['AC', '+/-','%','/','7','8','9','X','4','5','6','-','1','2','3','+','0','.','=']
    let btn = buttons.map((v, idx) => 
        <div key={idx} className={`${v === '0' ? 'col-span-2' : ''}`}>
            <button className="bg-white w-full h-full rounded-md">
                {v}
            </button>
        </div>
    )
    return (
        <div className="bg-gray-800 mt-12 pt-16 rounded-lg">
        <p className="w-full">0</p>
        <div className="grid gap-[7px] grid-cols-4 rounded-md p-3 h-96 w-80 bg-gray-800">
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