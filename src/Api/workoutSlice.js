import {createSlice} from '@reduxjs/toolkit'

export const workoutSlice=createSlice({
    name:'workoutSlice',
    initialState:{
        value:[]
    },
    reducers:{
        setItems:(state,action)=>{
            state.value=action.payload
        },
        addItem:(state,action)=>{
            state.value=[action.payload,...state.value]
        },
        removeItem:(state,action)=>{
            const itemId=action.payload
            const newValues=state.value.filter(item=>{
                return item._id!==itemId
            })
            state.value=newValues
        }
    }
})

//export const selectItems=(state)=>state.workoutSlice.value
export const {setItems,addItem,removeItem} =workoutSlice.actions
export default workoutSlice.reducer