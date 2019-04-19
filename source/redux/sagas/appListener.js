import {call, put} from 'redux-saga/effects'
import axios from '../../utils/axios'
import {AsyncStorage} from 'react-native';
import {RESPONSE} from '../constants'
import {SetResponse} from '../actions/ResponseAction'
import Lang from '../../utils/lang'
import {ID} from '../../utils/config'
export function* LoginHandler({payload}) {
    let {email, password, rememberMe} = payload;
    yield put(SetResponse({
        id: ID.LOGIN.EMAIL,
        message: Lang.filed_required,
        type: 'error'
    }))
}