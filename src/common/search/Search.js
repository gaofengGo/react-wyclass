import React, { Component } from 'react'
import { Button, Icon, Input } from 'antd';
import './search.styl'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: false,
            titel: []
        }
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
                search: false
            })
        }
    }
    render() {
        const Search = Input.Search;
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
                            placeholder="一辈子"
                            onSearch={value => console.log(value)}
                            style={{ width: 300 }}
                            autoFocus
                            />
                            <div className="cancel-button" onClick={this.searchOut()}>取消</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Search