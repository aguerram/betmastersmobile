import {LOGIN} from '../constants'
export const LoginForm = (payload)=>{
    return {
        type:LOGIN.LOGIN,
        payload
    }
}
export const LoginSubmit = (payload)=>{
    return {
        type:LOGIN.LOGIN_SUBMIT,
        payload
    }
}