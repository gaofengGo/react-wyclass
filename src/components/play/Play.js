import React, {Component} from 'react'
import Header from '@/common/header/Header'
import './play.styl'
import { getData } from '@/api/api';

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fous: false,
            id: 1,
            data: {}
        };

    }
    componentWillMount() {

    } 

    componentDidMount() {
        getData().then(res => {
            console.log(res)
            if(res) {
                var a = (res) => {
                    for (var i=0;i < res.length; i++) {
                        if(res[i].id === this.state.id)
                            return res[i]
                    }
                }
                const data = a(res)
                // const data = res.map((item,key) => {
                //     if(item.id === this.state.id)
                //     return item
                // })
                console.log(data)
                this.setState({
                    data: data
                })
            }
        })
    }

    fous() {
        return () => {
            this.setState({
                fous: !this.state.fous
            })
        }
    }

    render () {
        const YES = <button className="YES" onClick={this.fous()}>已订阅</button>
        const NO = <button className="NO" onClick={this.fous()}>订阅</button>
        const button = this.state.fous ? YES : NO;
        return (
            <div className="class-play">
                <Header title="播放"/>
                <div className="videoPlay"></div>
                <div className="up">
                    <img className="hd" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=bbd55d5106e93901420f856c1a853f82/5d6034a85edf8db10c1f99150e23dd54564e748a.jpg" alt=""/>
                    <div className="bd">
                        <div className="name">生活真无趣</div>
                        <div className="instructions">无聊请绕道</div>
                        <div className="number">
                            <div className="one">262万人订阅</div>
                            <div className="two">405条</div>
                        </div>
                    </div>
                    <div className="ft">{button}</div>
                </div>
                <div className="videoIntroduction">
                    <div className="hd">9999</div>
                    <div className="bd">趣味科普/美国</div>
                    <div className="ft">考试分数高和IQ高</div>
                </div>
            </div>
        )
    }
}

export default Play