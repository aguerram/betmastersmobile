import {RESPONSE} from '../constants'
export const SetResponse = (payload) => {
    return {
        type: RESPONSE.SET,
        payload
    }
}
export const ResetResponse = () => {
    return {
        type: RESPONSE.RESET
    }
}