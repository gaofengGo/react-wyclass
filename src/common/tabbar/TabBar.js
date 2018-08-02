import React, { Component } from 'react'
import { Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import './tabbar.styl'

class TabBar extends Component {
    render() {
        return (
            <div className="class-tab">
                <div className="tab-item">
                    <NavLink to="/home" className="nav-link">
                        <Icon type="home" style={{ fontSize: 27 }} />
                        <div>首页</div>
                    </NavLink>
                </div>
                <div className="tab-item">
                    <NavLink to="/mystudy" className="nav-link">
                        <Icon type="star-o" style={{ fontSize: 27 }} />
                        <div>订阅</div>
                    </NavLink>
                </div>
                <div className="tab-item">
                    <NavLink to="/recess" className="nav-link">
                        <Icon type="eye-o" style={{ fontSize: 27 }} />
                        <div>课间</div>
                    </NavLink>
                </div>
                <div className="tab-item">
                    <NavLink to="/my" className="nav-link">
                        <Icon type="user-add" style={{ fontSize: 27 }} />
                        <div>我</div>
                    </NavLink>
                </div>
            </div>

        )
    }
}

export default TabBar