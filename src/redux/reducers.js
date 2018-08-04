import { combineReducers } from 'redux'
import * as ActionTypes from './actionsTypes'

const initialState = {
    videos: [],         //订阅的全部
    id: null,          //当前播放
    loginStatus: false,  //登录状态
    logging: false      //登录状态
}

function loginStatus(loginStatus = initialState.loginStatus, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_IN:
            return action.loginStatus;
        case ActionTypes.LOGIN_OUT:
            return action.login;
        default:
            return loginStatus;
    }
}

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
            videos.push(action.up)
            return videos;
        case ActionTypes.REMOVE_VIDEO:
            return videos.filter(video => video !== action.name);
        default: 
            return videos
    }
}

const reducer = combineReducers({
    id,
    videos,
    loginStatus
})

export default reducer