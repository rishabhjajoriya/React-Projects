import React, { useEffect, useState } from "react";
import "./styles.css"

const LoadMore = () => {
    const [loading,setloading] = useState(false)
    const [products, setproducts] = useState([])
    const [count, setcount] = useState(0)
    const [disablebutton, setdisablebutton] = useState(false)
    async function fetchProducts(){

        try{
            setloading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`);
            
            const data = await response.json();
            console.log(data);
            if(data && data.products && data.products.length){
                setproducts((prevData) => [...prevData,...data.products])
                setloading(false)
            }
        }catch(e){
            console.log(e);
        }
        
       
    }

    useEffect(()=>{
        fetchProducts();
    },[count])

    useEffect(() => {
        if(products && products.length === 100 ){
            setdisablebutton(true);
        }
    },[products])

    if(loading){
        console.log("loading data. please wait!!!!!!");
    }

  
    return (

        <div className="lcontainer">
            <div className="products-container">
                <div className="product">
                   {
                    products && products.length ? products.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.images[0]} alt={item.title} />
                            <p>{item.title}</p>
                        </div>

                    )): null
                   }
                </div>
            </div>
            <div className="button-container">
                <button disabled = {disablebutton} onClick={() => setcount(count+1)}>load more products {count} </button>
            </div>
                   {
                   disablebutton ? <p>You have reached end</p> : null
                   }
        </div>
    )

}

export default LoadMore;

