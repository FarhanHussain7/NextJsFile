"use client"
import { useEffect, useState } from "react"

export default function APIPage(){

    const [products,setProducts] = useState([])

    useEffect(()=>{
        async function fetchData(){
        let data = await fetch("https://dummyjson.com/products"); 
        data = await data.json();
        setProducts(data.products);
    }
    fetchData();
    },[])
    return(
        <div>
            <h1>API call from dummy.json in nextjs</h1>
            {
                products.map((product)=>{
                    return(
                        <div key={product.id} style={{border:"2px solid black",margin:"10px",padding:"10px"}}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <img src={product.thumbnail} alt={product.title} width={100}/>
                        </div>
                    )
                })
            }
        </div>
    )
}