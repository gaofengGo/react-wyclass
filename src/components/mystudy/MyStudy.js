import React, { Component } from 'react';
import Search from '@/common/search/Search'
import TabBar from '@/common/tabbar/TabBar'
import './mystudy.styl'

class MyStudy extends Component {
    render() {
        return (
            <div className="mystudy">
            <Search />
            订阅
            <TabBar/>
            </div>
        )
    }
}

export default MyStudy