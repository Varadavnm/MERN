import {configureStore} from '@reduxjs/toolkit'
import user from './userSlice'
import general from './generateSlice'
export default configureStore({
    reducer:{
        user:user,
        general:general
    }
})
