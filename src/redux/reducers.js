import { combineReducers } from 'redux'
import * as ActionTypes from './actionsTypes'

const initialState = {
    videos: [],         //订阅的全部
    id: null,          //当前播放
    // showStatus: false,  //播放状态
    logging: false      //登录状态
}

// function showStatus(showStatus = initialState.showStatus, action) {
//     switch (action.type) {
//         case ActionTypes.SHOW_PLAYER:
//             return action.showStatus;
//         default:
//             return showStatus;
//     }
// }

function id(id = initialState.id, action) {
    switch(action.type){
        case ActionTypes.CHANGE_VIDEO:
            return action.id;
        default:
            return id
    }
}

function videos(videos = initialState.videos, action) {
    switch (action.type) {
        case ActionTypes.ADD_VIDEO:
            return videos.push(action.name);
        case ActionTypes.REMOVE_VIDEO:
            return videos.filter(video => video.name !== action.name);
        default: 
            return videos
    }
}

const reducer = combineReducers({
    id,
    videos,
    // showStatus
})

export default reducer