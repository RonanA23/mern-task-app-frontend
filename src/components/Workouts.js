import React, { useEffect, useState } from 'react'
import Workout from './Workout'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { setItems} from '../Api/workoutSlice'

function Workouts() {  
    const {value}=useSelector((state)=> state.workouts)
    //const {users}=useSelector((state)=> state.users)


    const source=useSelector((state)=> state.users)
   const thing =source?.value?.token
   
    const dispatch=useDispatch()

    useEffect(()=>{
        const fetchData=async()=>{
           // const {value}=useSelector((state)=> state.workouts)
            const response= await fetch('https://embarrassed-gray-bullfrog.cyclic.app/api/workouts',{
                headers:{'Authorization':`Bearer ${thing}`}
            })
            const json= await response.json()  
            if(response.ok){      
                dispatch(setItems(json))         
            }
        }
        if(source){
        fetchData()  
        } 
        
    },[dispatch,thing])

  return (
    <div className='bg-gray-600 h-[600px] w-full p-8'>
        {value?.length ===0 ? (<b className='text-white ml-40  text-lg'>Create Some Workouts!</b>):(<b className='text-white ml-80 text-lg mt-[20px]'>Workouts</b>)}
         <div className='flex justify-between w-[900px] mx-auto mt-8'>
            <div>
            {value && value?.map((item)=>(
            <Workout item={item} key={item._id}/>
        ))}

            </div>
            <div>
            <Form/>

            </div>

         </div>
        
        
    </div>
  )
}

export default Workouts