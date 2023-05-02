import {configureStore} from '@reduxjs/toolkit'

import workoutReducer from './workoutSlice'
import userReducer from './userSlice'

export const store= configureStore({
    reducer:{
        workouts:workoutReducer,
        users: userReducer
    }
})