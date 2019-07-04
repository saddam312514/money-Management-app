import {combineReducers} from 'redux'
import authReducer from './authReducer'

const rootRecer= combineReducers({
    auth:authReducer
})

export default rootRecer