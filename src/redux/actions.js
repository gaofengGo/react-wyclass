import * as ActionTypes from './actionsTypes'

export function changeVideo (video) {
    return { type: ActionTypes.CHANGE_VIDEO, video}
}

export function removeVideo (id) {
    return { type: ActionTypes.REMOVE_VIDEO, id}
}

export function addVideo (id) {
    return { type: ActionTypes.ADD_VIDEO, id}
}

export function showPlayer (showStaus) {
    return { type: ActionTypes.SHOW_PLAYER, showStaus}
}