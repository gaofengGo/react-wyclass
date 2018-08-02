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

// export function showPlayer (showStaus) {
//     return { type: ActionTypes.SHOW_PLAYER, showStaus}
// }