import React, { Component } from 'react';
import Swiper from 'swiper'
import { Route } from 'react-router-dom'
import Scroll from '@/common/scroll/Scroll'
import Search from '@/common/search/Search'
import TabBar from '@/common/tabbar/TabBar'
import {getRecommend,getCarousel} from '@/api/api'
import {Icon} from 'antd'
import 'swiper/dist/css/swiper.css'
import './home.styl'
import Play from '@/containers/Play'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshScroll: false,
            sliderList: [],
            titles: []
        }
    }
    componentDidMount() {
        getCarousel().then(res => {
            if (res) {
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
                
            }
        });
        getRecommend().then(res => {
            if (res) {
                this.setState({
                    refreshScroll: true,
                    titles: res
                })
            }
        })
    }

    selectVideo(video, url) {
        return () => {
            this.props.changeVideo(video.id);
            console.log(video.id)
            this.props.history.push({
                pathname: url
            })
        }
    }

    toLink(linkUrl) {
        return () => {
            window.location.href = linkUrl;
        }
    }
    render() {
        const {match} = this.props
        const titles = this.state.titles.map(title => {
            const small = title.title.map(item => {
                return (
                    <div className="small" key={item.id}>
                        <a onClick={this.selectVideo(item,`${'/home/' + item.id}`)}>
                            <img src={item.img} />
                            <div className="text">{item.text}</div>
                        </a>
                    </div>
                )
            })
            return (
                <div className="big" key={title.id}>
                    <div className="tag">
                        <span className="border">
                        {title.name}
                        </span>
                    </div>
                    <div className="title">
                        {small}
                    </div>
                </div>
            )
        })
        return (
            <div className="class-home">
                <Search />
                <Scroll refreshScroll={this.state.refreshScroll}>
                    <div className="container"> 
                        <div className="slider-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.sliderList.map(slider => {
                                        return (
                                            <div className="swiper-slide" key={slider.id}>
                                                <a onClick={this.toLink(slider.linkUrl)} className="slider-nav">
                                                    <img src={slider.picUrl} width="100%" height="100%" alt="推荐" />
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                        
                        <ul className="home-tab">
                            <li className="tab">
                            <Icon type="coffee" style={{ fontSize: 27, color: '#62b4ff'}}/>
                            <div>最热</div>
                            </li>
                            <li className="tab">
                            <Icon type="bulb" style={{ fontSize: 27, color: '#a5d0b6'}}/>
                            <div>最新</div>
                            </li>
                            <li className="tab">
                            <Icon type="sound" style={{ fontSize: 27, color: '#ff807f'}}/>
                            <div>音频</div>
                            </li>
                            <li className="tab">
                            <Icon type="appstore" style={{ fontSize: 27, color: '#f5a623'}}/>
                            <div>分类</div>
                            </li>
                        </ul>

                        <div className="content">
                                {titles}
                        </div>
                    </div>
                </Scroll>
                <TabBar />
                <Route path = {`${'/home/:id'}`} component = {Play}/>
            </div>
        )
    }
}

export default Home