import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Api/userSlice'

export const useLogin=()=>{
    const dispatch=useDispatch()
    const [error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(null)

    const login=async(email,password)=>{
        setIsLoading(true)
        setError(null)

        const response=await fetch('https://embarrassed-gray-bullfrog.cyclic.app/api/user/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const json=await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(response.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            setIsLoading(false)
            dispatch(setUser(json))
        }
    }

    return {login,isLoading,error}
}