import React, { useEffect, useState } from 'react'
import Suggestions from './suggestions'


const SearchAutocomplete = () => {
    const [loading, setloading] = useState(false)
    const [users, setusers] = useState([])
    const [error, seterror] = useState(null)
    const[searchparam,setsearchparam] = useState('');
    const [dropdown, setdropdown] = useState(false);
    const [filteredUsers, setfilteredUsers] = useState([]);

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setsearchparam(query);
        if(query.length>1){
            const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : [];
            setfilteredUsers(filteredData);
            setdropdown(true);
        }else{
            setdropdown(false);
        }
    }

    function handleClick(event){
        setsearchparam(event.target.innerText)
        setdropdown(false)
        setfilteredUsers([])
        
    }
    async function fetchUsers(){
        try{
            setloading(true)
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            
            if(data && data.users && data.users.length > 0){
                setusers(data.users.map((item) => item.firstName
                ))
                setloading(false)
                seterror(null)
            }
        }
        catch(e){
            setloading(false)
            console.log(e);
            seterror(e);
        }
        


    }
  
    console.log(searchparam)

    useEffect(() => {
      fetchUsers();
    }, [])
    
    

  return (
    <div style ={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}} className='search-autocomplete-container'>
       
       <input onChange={handleChange} value = {searchparam} name="text" placeholder='search users'/>

        {dropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  )
}

export default SearchAutocomplete
