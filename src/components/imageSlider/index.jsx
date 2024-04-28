import React from 'react'
import { useState,useEffect } from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'
const ImageSlider = ({url, limit}) => {
    const [images, setimages] = useState([])
    const [currentSlide, setcurrentSlide] = useState(0)
    const [errorMsg, seterrorMsg] = useState(null)
    const [loading, setloading] = useState(false)

    async function fetchImages(){
      setloading(true)
        try{
          console.log("entered try")
          const response = await fetch(`${url}?page=1&limit=${limit}`)
          const data = await response.json()
          
          if(data){
            setimages(data)
            setloading(false)
          }
          setloading(false)
        }
        catch(e){
          seterrorMsg(e.message);
         setloading(false);
        }
    }
  
    useEffect(() => {
      if(url !== '') fetchImages();
    }, [url])
    console.log(images)
    console.log("data")

    if(loading){
      return <div>Loading data! Please wait.</div>
    }

    if(errorMsg!==null){
      return <div>Error occured!!!!</div>
    }

    function handlePrevious(){
     setcurrentSlide(currentSlide === 0 ? images.length - 1: currentSlide - 1)
    }
     function handleNext(){
      setcurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1)
     }
  return (
    <div className='container'>
      <BsArrowLeftCircleFill onClick={handlePrevious}
       className="arrow arrow-left"/>


        {images && images.length ? images.map((imageItem,index) => 
          <img 
           key = {imageItem.id}
           alt = {imageItem.download_url}
           src = {imageItem.download_url}
          
           className={
            currentSlide === index
              ? "current-image"
              : "current-image hide-current-image"
          }
          />
         ): null} 


          <BsArrowRightCircleFill onClick={handleNext}
          className="arrow arrow-right" />




        <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
               
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>

    
    </div>
  )
}

export default ImageSlider
