import React, { Component } from 'react';
import TabBar from '@/common/tabbar/TabBar'
import './my.styl'

class My extends Component {
    render() {
        return (
            <div className="my">
            我的
            <TabBar />
            </div>
        )
    }
}

export default My