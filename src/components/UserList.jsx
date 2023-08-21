import React, { useEffect, useState } from 'react'
import User from './User'
import axios from 'axios'
const UserList = () => {
  const [users, setusers] = useState([])
  useEffect(() => {
    (async()=>{
        try{
            let result=await axios.get('https://jsonplaceholder.typicode.com/users')
            setusers(result.data)
        } catch(error){
            console.error(error);
        }
      })()
  }, [])
  
  return (
    <div className='cardlist'>
      {users.map(el=><User el={el}/>)}
    </div>
  )
}

export default UserList