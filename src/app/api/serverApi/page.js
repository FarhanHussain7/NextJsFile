import Product from "./product";

async  function fetchData(){
    let data = await fetch("https://dummyjson.com/products"); 
    data = await data.json();
    return data.products;
}   

export default function ServerAPIPage(){
    const products = fetchData();

    return(
        <div>
            <h1>API call from dummy.json in nextjs (Server Component)</h1>
            {
                products.then((items)=>{
                    return items.map((product)=>{
                        return(
                            <div key={product.id} style={{border:"2px solid black",margin:"10px",padding:"10px"}}>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                                <Product params={product.price}/>
                                <img src={product.thumbnail} alt={product.title} width={100}/>
                            </div>
                        )
                    })
                })
            }
        </div>
    )
}