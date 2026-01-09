"use client";
// 
export default function Product({params}){
    const ClientSideFunc = ()=>{
        console.log(params)
    }
    return(
        <div>
            <button onClick={ClientSideFunc}>Click me</button>   
        </div>
    )
}