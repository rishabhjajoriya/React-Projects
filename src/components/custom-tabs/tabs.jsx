import React from "react"
import { useState } from "react"

const Tabs = ({tabsContent}) => {

    const [currentTabIndex, setcurrentTabIndex] = useState(0)

    function handleclick(index){
        setcurrentTabIndex(index)
        
    }
    return <div className="wrapper">
        {<h1>These are Tabs.</h1> }
        <div className="heading">
            {
                tabsContent.map((item,index) => (
                    <div className={`tab-item ${currentTabIndex === index ? 'active' : ""}`} 
                    onClick={() => handleclick(index)} key = {item.label} >
                        <span className="label" style={{color:"black"}} >{item.label}</span>
                    </div>

                ))
            }
        </div>
        <div className="content">
            {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
    </div>
}

export default Tabs