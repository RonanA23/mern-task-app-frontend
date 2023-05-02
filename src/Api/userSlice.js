import {createSlice} from '@reduxjs/toolkit'

export const userSlice=createSlice({
    name:'userSlice',
    initialState:{
        value:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.value=action.payload
        },
        removeUser:(state,action)=>{
            state.value=[]
        },
     
    }
})

//export const selectItems=(state)=>state.workoutSlice.value
export const {setUser,removeUser} =userSlice.actions
export default userSlice.reducer
