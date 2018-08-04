import React, { Component } from 'react';
import TabBar from '@/common/tabbar/TabBar'
import { Icon, Popconfirm, message } from 'antd'
import { NavLink, Redirect } from 'react-router-dom'
import './my.styl'

class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.loginStatus
        }
    }

    componentWillReceiveProps () {
        console.log(this.props.loginStatus)
        this.setState({
            login: this.props.loginStatus
        })
    }
    
    render() {
        const that = this
        function confirm(e) {
            message.success('已退出登录');
            // console.log(props)
            that.props.LoginOut(false)
            that.setState({redirect: true})
          }
          
        function cancel(e) {
        }

        const loginIn =
            <NavLink to="/login" >
                <div className="my-login">登录，做个学霸~</div>
            </NavLink>
        const loginOut =
            <div className="my-account">
                <Popconfirm className="my-account_text" title="你确定要退出登录吗？" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533385508194&di=1a98f53314c69f961594a409ca7e935b&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2Ff2ee1ce3c6576669add181128b5280b643c8beca.jpg" alt="" />
                </Popconfirm>
                <div>好好学习,天天向上!</div>
            </div>
        const login = this.state.login ? loginOut : loginIn

        if(this.state.redirect){
            return <Redirect push to="/home" />;
        }

        return (
            <div className="class-my">
                <div className="my-header">
                    <div className="my-hd">
                        <div className="my-bd"><Icon type="setting" /></div>
                        <div className="my-ft"><Icon type="notification" /></div>
                    </div>
                    {login}
                </div>

                <ul className="my-tab">
                    <li className="Tab">
                        <Icon type="download" style={{ fontSize: 20, color: '#64bdf5' }} />
                        <div>下载</div>
                    </li>
                    <li className="Tab">
                        <Icon type="heart" style={{ fontSize: 20, color: '#ff807f' }} />
                        <div>收藏</div>
                    </li>
                    <li className="Tab">
                        <Icon type="clock-circle-o" style={{ fontSize: 20, color: '#a5d0b6' }} />
                        <div>历史</div>
                    </li>
                    <li className="Tab">
                        <Icon type="calendar" style={{ fontSize: 20, color: '#fa7933' }} />
                        <div>签到</div>
                    </li>
                    <li className="Tab">
                        <Icon type="pay-circle-o" style={{ fontSize: 20, color: '#d09dff' }} />
                        <div>钱包</div>
                    </li>
                    <li className="Tab">
                        <Icon type="shopping-cart" style={{ fontSize: 20, color: '#ff8400' }} />
                        <div>已购</div>
                    </li>
                    <li className="Tab">
                        <Icon type="message" style={{ fontSize: 20, color: '#a2d06f' }} />
                        <div>消息</div>
                    </li>
                    <li className="Tab">
                        <Icon type="bell" style={{ fontSize: 20, color: '#fdb135' }} />
                        <div>提醒</div>
                    </li>
                </ul>

                <div className="my-bar">
                    <div className="my-text">我关注的全部订阅号</div>
                    <Icon type="right" style={{ color: '#9b9b9b' }} />
                </div>
                <div className="my-bar">
                    <div className="my-text">我的一万分钟</div>
                    <Icon type="right" style={{ color: '#9b9b9b' }} />
                </div>
                <div className="dynamic">
                    <div className="my-text">动态</div>
                    <button className="NO">发表</button>
                </div>
                <div className="my-background"></div>
                <TabBar />
            </div>
        )
    }
}

export default My