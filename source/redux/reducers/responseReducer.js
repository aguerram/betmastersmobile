import {RESPONSE} from '../constants'
let initial = {message: null, error: false}
export const reducer = (state = {}, {type, payload}) => {
    switch (type) {
        case RESPONSE.SET:
            return {
                ...state,
                [payload.id]: {
                    message:payload.message,
                    type:payload.type
                }
            };
        case RESPONSE.RESET: {
            return {}
        }
        default :
            return state;
    }
}