import React, { useEffect, useState } from "react";
import './styles.css'

export default function ScrollIndicator({url}){

    const[data,setData] = useState([]);
    const[loading,setloading] = useState(false);
    const[errormessage,seterrormessage] = useState('');
    const [scrollpercentage, setscrollpercentage] = useState(0)

   
    async function fetchData(url){
        try{
            setloading(true);
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

            if(data && data.products && data.products.length > 0){
                setData(data.products);
                setloading(false);
            }
        }
        catch(e){
            setloading(false)
            seterrormessage(e.message)
        }
    }

    
    function handlescrollpercentage(){
        console.log(document.body.scrollTop,document.documentElement.scrollTop,document.documentElement.scrollHeight,document.documentElement.clientHeight);

        const fullHeight = document.documentElement.scrollHeight;
        const viewportHeight = document.documentElement.clientHeight;

        const Height = fullHeight - viewportHeight;
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;

        const percentage = scroll/Height * 100
        setscrollpercentage(percentage);
    }

    useEffect(() => {
       fetchData(url);
    }, [url])

    useEffect(() => {
      window.addEventListener('scroll',handlescrollpercentage);
    
      return () => {
        window.removeEventListener('scroll',() =>{})
      }
    }, [])
    
    
    console.log(data,scrollpercentage);
    if(loading){
        return <div> Loading Data! Please wait.
        </div>
    }
    if(errormessage){
        return <div>Error! Occured. {errormessage}</div>
    }
    return (
    <div>
       
        <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div className="current-scroll-bar" style={{width : `${scrollpercentage}%`}}>
                    
                </div>
            </div>
        </div>
        <div className="data-container"  >
           { data && data.length > 0 ?
            data.map((item) => 
                <p>{item.title}</p>    
            )
            : null }
        </div>
    </div>)

}