import React from "react"
import { Icon } from 'antd'
import "./header.styl"

class Header extends React.Component {
    handleClick() {
        window.history.back();
    }
    render() {
        return (
            <div className="class-header">
	            <span className="header-back" onClick={this.handleClick}>
                <Icon type="left-circle" />
	            </span>
                <div className="header-title">
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default Header
