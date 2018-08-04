import * as ActionTypes from './actionsTypes'

export function changeVideo (id) {
    return { type: ActionTypes.CHANGE_VIDEO, id}
}

export function removeVideo (name) {
    return { type: ActionTypes.REMOVE_VIDEO, name}
}

export function addVideo (up) {
    return { type: ActionTypes.ADD_VIDEO, up}
}

export function LoginIn (loginStatus) {
    return { type: ActionTypes.LOGIN_IN, loginStatus}
}

export function LoginOut (login) {
    return { type: ActionTypes.LOGIN_OUT, login}
}