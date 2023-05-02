import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Api/workoutSlice'

function Form() {
    const [title,setTitle]=useState('')
    const [reps,setReps]=useState('')
    const [load,setLoad]=useState('')
    const [error,setError]=useState('')
    const [emptyFields,setEmptyFields]=useState('')
    const dispatch=useDispatch()

    const source=useSelector((state)=> state.users)
     
    const thing =source?.value?.token
   
    

    const submitHandler=async()=>{   
        const Workout={title,reps,load}
        const response= await fetch('https://embarrassed-gray-bullfrog.cyclic.app/api/workouts',{
            method:'POST',
            body:JSON.stringify(Workout),
            headers:{'Content-Type':'application/json',
           'Authorization':`Bearer ${thing}`}
        })
        const json= await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.errorFields)
           
        }
        if(response.ok){
      
        dispatch(addItem(Workout))
        setTitle('')
        setReps('')
        setLoad('')
        setError('')
        setEmptyFields([])   
      }
    }

  return (
    <div className='bg-blue-300 w-[300px] flex flex-col p-4 rounded-lg border-2 border-white'>
        <b className=''>Enter Workout</b>
        <input value={title} className={emptyFields?.includes('title')?'border-2 border-red-600 mt-2 rounded-lg w-[300px]':' mt-2 border-2 rounded-lg'} type='text' placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)}/>
        <input value={reps} className={emptyFields?.includes('reps')?'border-2 border-red-600 mt-2 rounded-lg':' mt-2 border-2 rounded-lg'} type='text' placeholder='Enter Reps' onChange={(e)=>setReps(e.target.value)}/>
        <input value={load} className={emptyFields?.includes('load')?'border-2 border-red-600 mt-2 rounded-lg':' mt-2 border-2 rounded-lg'} type='text' placeholder='Enter Load' onChange={(e)=>setLoad(e.target.value)}/>
        <button className='bg-green-600 mt-2 hover:bg-green-800 text-white w-[270px] p-2 font-bold hover:text-white rounded-lg'
        onClick={submitHandler}
        >Submit</button>
        {error &&<p className='border-2 border-red-900 text-red-900 p-2 font-bold bg-white '>{error}</p>}
    </div>
  )
}

export default Form