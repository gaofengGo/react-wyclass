import { combineReducers } from 'redux'
import * as ActionTypes from './actionsTypes'

const initialState = {
    videos: [],         //订阅的全部
    video: {},          //当前播放
    showStatus: false,  //播放状态
    logging: false      //登录状态
}

function showStatus(showStatus = initialState.showStatus, action) {
    switch (action.type) {
        case ActionTypes.SHOW_PLAYER:
            return action.showStatus;
        default:
            return showStatus;
    }
}

function video(video = initialState.video, action) {
    switch(action.type){
        case ActionTypes.CHANGE_VIDEO:
            return action.video;
        default:
            return video
    }
}

function videos(videos = initialState.videos, action) {
    switch (action.type) {
        case ActionTypes.ADD_VIDEO:
            return videos.push(action.video);
        case ActionTypes.REMOVE_VIDEO:
            return videos.filter(video => video.id !== action.id);
        default: 
            return videos
    }
}

const reducer = combineReducers({
    video,
    videos,
    showStatus
})

export default reducer