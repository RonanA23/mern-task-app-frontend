import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../Api/workoutSlice'
import {AiOutlineDelete} from 'react-icons/ai'


function Workout({item}) {
    const dispatch=useDispatch()
    const source=useSelector((state)=> state.users) 
    const thing =source?.value?.token
    const deleteHandler=async()=>{  
        if(!thing){
            return
        }    
        dispatch(removeItem(item._id))    
        const response=await fetch('https://embarrassed-gray-bullfrog.cyclic.app/api/workouts/'+item._id,{
            method:'DELETE',
            headers:{'Authorization':`Bearer ${thing}`}
        })    
        const json=await response.json()   
        if(response.ok){
            console.log('deleted',json)}     
    }

  return (
    <div className='bg-blue-300 hover:bg-blue-800 text-black hover:text-white flex justify-between  p-4 items-center mt-2 mx-auto rounded-lg w-[450px] ml-2'>
        <div className=''>
        <p className=' font-bold'>Workout: {item.title}</p>
        <p className=' font-bold'>Reps: {item.reps}</p>
        <p className=' font-bold'>Load: {item.load}kg</p>

        </div>
        
        
        <b className='text-gray-500 font-bold cursor-pointer hover:text-red-500' 
        onClick={deleteHandler}>
            <AiOutlineDelete size={20}/>
        </b>
    </div>
  )
}

export default Workout