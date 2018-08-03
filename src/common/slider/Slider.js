import React, { Component } from 'react';
import Swiper from 'swiper'
import { Route } from 'react-router-dom'
import {getCarousel} from '@/api/api'
import 'swiper/dist/css/swiper.css'
import './slider.styl'

class Slider extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sliderList: this.props.sliderList
        }
    }

    componentDidMount() {;
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

    render() {
        return (
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        this.state.sliderList.map(slider => {
                            return (
                                <div className="swiper-slide" key={slider.id}>
                                    <a onClick={this.selectVideo(slider, `${'/home/' + slider.id}`)}
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
        )
    }
}

export default Slider