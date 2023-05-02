import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser, setUser } from '../Api/userSlice'
import { setItems } from '../Api/workoutSlice'

function Navbar() {
   const dispatch=useDispatch()
   const {value}=useSelector((state)=> state.users)
  

   useEffect(()=>{
    const user= JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch(setUser(user))
    }
   },[])

   const clickHandler=()=>{
    localStorage.removeItem('user')
    dispatch(setUser(null))
    dispatch(setItems(null))
   }

  return (
    <div className='bg-green-400  h-20 p-2  w-[full] flex items-center justify-between'>
        <Link to='/'><p className='text-white text-4xl font-bold'>Workout Buddy 2.0</p></Link>
        {value ? (<div className='flex mr-4 items-center justify-between w-[300px]'> 
          <b>{value.email}</b>
          <p onClick={clickHandler} className='border-gray-600 border-2 p-2 hover:bg-red-600 cursor-pointer font-bold bg-white rounded-lg hover:text-white'>Log Out</p>
        </div>):
        (<div className='w-[150px] flex justify-between items-center mr-4'>
          <Link to='/signup'><b className='hover:text-gray-500'>Sign up</b></Link>
          <Link to='/login'><b className='hover:text-gray-500'>Login </b></Link>
        </div>)}
        
        
     
    </div>
  )
}

export default Navbar