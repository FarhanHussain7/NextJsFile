"use client"
import { useState } from "react"

export default function StylePage(){

    const [Style, setStyle] = useState(
        {
            backgroundColor:"lime", 
            color:"black"
        }
    );
    return(
        <div>
            <h1>Style in Next js</h1>
            <p>1 - Global css :- work on every page</p>
            <p style={{backgroundColor:"gray", color:"black"}}>2 - Inline css :- Work only on single page/line</p>
            <p style={Style}>3 - Style with hook like useState</p>
            <button onClick={()=>setStyle({backgroundColor:"orange", textDecorationColor:"black"})}>Change style</button>
        </div>
    )
}