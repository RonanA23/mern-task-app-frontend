import React, { useState } from 'react'
import { useSignup } from '../Hooks/useSignupHook'

function Signup() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const{signup,isLoading,error}=useSignup()

    const submitHandler=async()=>{
        
        await signup(email,password)
        setEmail('')
        setPassword('')

    }
  return (
    <div className='bg-blue-500 rounded-lg w-[300px] mt-20 p-8 mx-auto border-2 text-1xl border-blue-500'>
        <b className='ml-10 text-lg'>Sign Up Here</b>
        <input type='text' className='rounded-lg w-[200px] mt-2 ml-4' value={email}  placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='text' className='rounded-lg w-[200px] mt-2 ml-4' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/> 
        <button className='bg-green-400 rounded-lg w-[200px] ml-4 mt-4 p-2 text-white font-bold hover:bg-green-700'
        onClick={submitHandler}
        disabled={isLoading}
        >Submit</button>
        {error && <p>{error}</p>}
    </div>
  )
}

export default Signup