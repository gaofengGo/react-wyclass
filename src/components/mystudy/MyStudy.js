import React, { Component } from 'react';
import Search from '@/common/search/Search'
import TabBar from '@/common/tabbar/TabBar'
import Swiper from 'swiper'
import Scroll from '@/common/scroll/Scroll'
import Play from '@/containers/Play'
import { Icon } from 'antd'
import { Route } from 'react-router-dom'
import { getCarousels, getData } from '@/api/api'
import 'swiper/dist/css/swiper.css'
import './mystudy.styl'

class MyStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderList: [],
            videos: [],
            refreshScroll: false,
            titles: []
        }
    }
    componentWillReceiveProps() {
        getData().then(res => {
            // console.log(res)
            const names = this.props.videos
            // console.log(names)
            const arr = []
            for (var key in names) {
                for (var index in res) {
                    if (res[index].up === names[key])
                        arr.push(res[index])
                }
            }
            // console.log(arr)
            this.setState({
                videos: arr,
                refreshScroll: true
            })
        })
    }

    componentDidMount() {
        getCarousels().then(res => {
            this.setState({
                sliderList: res
            }, () => {
                if (!this.sliderSwiper)
                    this.sliderSwiper = new Swiper('.slider-container', {
                        loop: true,
                        autoplay: 3000,
                        autoplayDisableOnInteraction: false,
                        pagination: '.swiper-pagination'
                    })
            })
        })

        getData().then(res => {
            // console.log(res)
            const names = this.props.videos
            // console.log(names)
            const arr = []
            if (names.length === 0) {
                this.setState({login: false})
            }
            for (var key in names) {
                for (var index in res) {
                    if (res[index].up === names[key])
                        arr.push(res[index])
                }
            }
            // console.log(arr)
            this.setState({
                videos: arr,
                refreshScroll: true
            })
        })
    }

    selectVideo(video, url) {
        return () => {
            this.props.changeVideo(video.id);
            // console.log(video.id)
            this.props.history.push({
                pathname: url
            })
        }
    }

    render() {
        const { match } = this.props;
        const videos = this.state.videos.map(item => {
            return (
                <div className="mystudy_small" key={item.id}>
                    <div className="mystudy-up">
                        <img src={item.photo} alt="" />
                        <div className="mystudy-name">{item.up}</div>
                    </div>
                    <a onClick={this.selectVideo(item, `${match.url + '/' + item.id}`)}>
                        <div className="mystudy-text" style={{ background: `url(${item.img})`, backgroundSize: 'cover' }}>
                            <span> {item.Course} </span>
                        </div>
                    </a>
                </div>
            )
        })

        const login = <div className="mystudy_text">您还没有订阅任何人!</div>
        const container = this.state.login? videos: login
        return (
            <div className="class-mystudy">
                <Search />
                <Scroll refreshScroll={this.state.refreshScroll}>
                    <div className="container">
                        <div className="slider-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.sliderList.map(slider => {
                                        return (
                                            <div className="swiper-slide" key={slider.id}>
                                                <a onClick={this.selectVideo(slider, `${match.url + '/' + slider.id}`)}
                                                    className="slider-nav">
                                                    <img src={slider.picUrl} width="100%" height="100%" alt="推荐" />
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                        <ul className="mystudy-tab">
                            <li className="tab">
                                <Icon type="play-circle-o" style={{ fontSize: 27, color: '#439aff' }} />
                                <div>视频分类</div>
                            </li>
                            <li className="tab">
                                <Icon type="plus-square-o" style={{ fontSize: 27, color: '#fd4d4d' }} />
                                <div>添加订阅</div>
                            </li>
                            <li className="tab">
                                <Icon type="heart" style={{ fontSize: 27, color: '#fa7933' }} />
                                <div>我的订阅</div>
                            </li>
                        </ul>

                        <div className="tag">
                            <span className="border">
                                我的订阅
                            </span>
                        </div>

                        <div className="content">
                            {container}
                        </div>
                    </div>
                </Scroll>
                <TabBar />
                <Route path={`${match.url + '/:id'}`} component={Play} />
            </div>
        )
    }
}

export default MyStudy