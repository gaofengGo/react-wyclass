import React, { Component } from 'react';
import TabBar from '@/common/tabbar/TabBar'
import Search from '@/common/search/Search'

class Recess extends Component {
    render() {
        return (
            <div className="recess">
            <Search />
            课间
            <TabBar />
            </div>
        )
    }
}

export default Recess