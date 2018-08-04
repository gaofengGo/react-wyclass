import React, { Component } from 'react'
import { Button, Icon, Input } from 'antd';
import { NavLink } from 'react-router-dom'
import { getData } from '@/api/api'
import './search.styl'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: false,
            titel: [],
            allclass: [],
            result: []
        }
    }

    componentDidMount() {
        getData().then(res => {
            this.setState({
                allclass: res,
            })
        })
    }

    onSearch(value) {
        console.log(value)
        const result = this.state.allclass.filter(item => {
            if (item.Course.indexOf(value) >= 0)
                return item
        })
        console.log(result)
        this.setState({
            result: result
        })
    }

    searchEnter() {
        return () => {
            this.setState({
                search: true
            })
        }
    }
    searchOut() {
        return () => {
            this.setState({
                search: false,
                result: []
            })
        }
    }
    render() {
        const Search = Input.Search;
        console.log(this.state.result)
        const result = this.state.result.map(item => {
            return  (  
                <div key={item.id} >
                    <NavLink to={`/home/${item.id}`}>
                        <div className="search-bar">
                            <div className="search-text">{item.Course}</div>
                            <Icon type="right" style={{ color: '#9b9b9b' }} />
                        </div>
                    </NavLink>
                </div>
            )
        })
        return (
            <div>
                {!this.state.search &&
                    <div className="button">
                        <div className="hd"><Button icon="search" onClick={this.searchEnter()}>Search</Button></div>
                        <div className="bd"><Icon type="clock-circle-o" /></div>
                        <div className="bd"><Icon type="sound" /></div>
                    </div>
                }

                {this.state.search &&
                    <div className="class-search">
                        <div className="search">
                            <Search
                                placeholder="9种"
                                onSearch={value => this.onSearch(value)}
                                style={{ width: 300 }}
                                autoFocus
                            />
                            <div className="cancel-button" onClick={this.searchOut()}>取消</div>
                        </div>

                        <div className="content">
                            {result}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Search