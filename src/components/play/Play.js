import React, {Component} from 'react'
import Header from '@/common/header/Header'
import './play.styl'

class Play extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render () {
        return (
            <div className="class-play">
            <Header title="播放"/>
            Play
            </div>
        )
    }
}

export default Play