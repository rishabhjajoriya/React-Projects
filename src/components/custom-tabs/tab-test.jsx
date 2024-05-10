import React from 'react'
import Tabs from './tabs'
import './styles.css'

const TabTest = () => {
    const tabs = [
        {
            label:"Tab 1",
            content: <div>This is content for tab 1</div>
        },
        {
            label:"Tab 2",
            content: <div>This is content for tab 2</div>
        },
        {
            label:"Tab 3",
            content: <h1>This is content for tab 3</h1>
        }

    ]

  return (

    <div>
        <Tabs tabsContent={tabs} />
    </div>
  )
}

export default TabTest
