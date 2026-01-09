'use client'
import { useState } from "react"
import style from '../../custom.module.css'


export default function ConditionalStyle(){
    const [color,setColor] = useState("red");
     const [active, setActive] = useState(true)

    let {red} = style;
    let {green} = style;
    return(
        <div>
            <h1 className={color=='red'?style.red:style.green}>
                Conditional with Style 
            </h1>
            <button onClick={()=>setColor("green")}>Change color</button>

         <div className={active ? `${style.red} ${style.active}` : `${style.green} ${style.inactive}`}>
        Conditional Styling Example
        <button onClick={() => setActive(!active)}>Toggle</button>
      </div>

      <h1 className={red}>Dummy data </h1>
      <h1 className={green}>Dummy data </h1>

        </div>
    )
}