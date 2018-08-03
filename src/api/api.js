import axios from 'axios'

let base = 'http://localhost:3006'

export const getRecommend = params => {
    return axios.get(`${base}/titles`, params).then(res => {
        return res.data
    }, err => {
        return Promise.reject(err);
    }).catch((error) => {
        return Promise.reject(error);
    });
}
export const getCarousel = params => {                //用户登录请求
    return axios.get(`${base}/slider`, params).then(res => {
        return res.data;
    }, err => {
        return Promise.reject(err);
    }).catch((error) => {
        return Promise.reject(error);
    });
};

export const getCarousels = params => {
    return axios.get(`${base}/sliders`, params).then(res => {
        return res.data;
    }, err => {
        return Promise.reject(err);
    }).catch((error) => {
        return Promise.reject(error);
    });
}
export const getData = params => {
    return axios.get(`${base}/data`, params).then(res => {
        return res.data;
    }, err => {
        return Promise.reject(err);
    }).catch((error) => {
        return Promise.reject(error);
    })
}