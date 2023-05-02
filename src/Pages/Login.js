import React, { useState } from 'react'
import { useLogin } from '../Hooks/useLoginHook'

function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const {login,error,isLoading}=useLogin()

    const submitHandler=async()=>{
      
        await login(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className='bg-blue-500 rounded-lg w-[300px] mt-20 p-8 mx-auto border-2 text-1xl border-blue-500'>
    <b className='ml-10 text-lg'>Login in Here</b>
    <input type='text' className='rounded-lg ml-4 w-[200px] mt-2' value={email}  placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type='text' className='rounded-lg ml-4 w-[200px] mt-2' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/> 
    <button className='bg-green-400 rounded-lg  p-2 w-[200px] ml-4 mt-4 text-white font-bold hover:bg-green-700'
    onClick={submitHandler}
    disabled={isLoading}
    >Submit</button>
    {error && <p>{error}</p>}
</div>
  )
}

export default Login