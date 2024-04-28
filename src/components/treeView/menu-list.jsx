import React from 'react'
import MenuItem from './menu-item'
import './styles.css'
const MenuList = ({ list }) => {
  return (
    <ul className='menu-list-container'>
       {list && list.length ? 
        list.map(listItem => { 
            return <>
             <MenuItem item = {listItem} />
            </>
        })
       : null}
    </ul>
  )
}

export default MenuList
