import {takeEvery,takeLatest,all} from 'redux-saga/effects'
import {LoginHandler} from './appListener'
import {LOGIN} from '../constants'

function* appListener()
{
    yield all([
        takeLatest(LOGIN.LOGIN_SUBMIT,LoginHandler)
    ])
}

export default function* sagas()
{
    yield all([
        appListener()
    ])
}