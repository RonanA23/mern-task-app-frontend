import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Api/userSlice'

export const useSignup=()=>{
    const dispatch=useDispatch()
    const [error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(null)

    const signup=async(email,password)=>{
        console.log(typeof(password))
       
        setIsLoading(true)
        setError(null)
       
        const response = await fetch('https://embarrassed-gray-bullfrog.cyclic.app/api/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        
        const json = await response.json()
        console.log('response is',json)
        if(!response.ok){
            setIsLoading(false)
            setError('Here is your error',response)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            setIsLoading(false)
            dispatch(setUser(json))
            console.log('dispatching',json )
            
        }
    }

    return {signup,isLoading,error}
}