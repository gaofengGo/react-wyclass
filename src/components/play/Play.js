import React, {Component} from 'react'
import Header from '@/common/header/Header'
import { Redirect} from 'react-router-dom'
import './play.styl'
import { getData } from '@/api/api';

class Play extends Component {
    constructor(props) {
        super(props);
        const arr = this.props.history.location.pathname.split('/')
        const id = parseInt(arr[arr.length-1])
        this.state = {
            id: id,
            data: {
                fous: false
            }
        };

    }
    componentWillMount() {
        // this.setState({
        //     id: 
        // })
    } 

    componentDidMount() {
        getData().then(res => {
            // console.log(res)
            if(res) {
                var a = (res) => {
                    for (var i in res) {
                        if(res[i].id === this.state.id)
                            return res[i]
                    }
                }
                const data = a(res)
                // const data = res.map((item,key) => {
                //     if(item.id === this.state.id)
                //     return res[item]
                // })
                // console.log(data)
                if(data) {
                    const ups = this.props.videos
                    for (var key in ups) {
                        if(ups[key] === data.up) {
                           data.fous = true
                           data.num2+=1
                        } 
                    }
                    this.setState({
                        data: data
                    })
                }
            }
        })
    }
 
    fous() {
        return () => {
            if(this.props.login){
                const data = this.state.data
                data.fous = true
                data.num2+=1
                this.setState({
                    data: data
                })
                this.props.addVideo(data.up)
                console.log(this.props.videos)
            } else {
                this.setState({redirect: true})
            }
        }
    }
    fousOut() {
        return (e) => {
            const data = this.state.data
            data.fous = false
            data.num2-=1
            this.setState({
                data: data
            })
            this.props.removeVideo(data.up)
            const arr = this.props.videos
        }
    }

    render () {
        const YES = <button className="YES" onClick={this.fousOut()}>已订阅</button>
        const NO = <button className="NO" onClick={this.fous()}>订阅</button>
        const button = this.state.data.fous ? YES : NO;
        const data = this.state.data
        if(this.state.redirect){
            return <Redirect push to="/login" />;
        }
        return (
            <div className="class-play">
                <Header title={data.Course}/>
                <video src="http://ugcyd.qq.com/c0367mes4na.mp4?sdtfrom=v1010&guid=46c7c3bb9552044797e6c15ca0d486fc&vkey=2069396B81EEB84E44C631F01E54618C83742B6439394ED0A475D66DDFFDF4A66098CF8B91571B415CA1E9388404BB940C6BDA656CE9E612DBA2AA944C7EC761BF63B30E6FD19C34091BA03723AA91C7BD63793855C79B0CA648BD8CAAAAF0E49E91283BC9CCC23D433F7C2BBE095E7EF7C3CDEBAC1CCEA4"
                // autoplay="autoplay"
                 controls="controls"  className="videoPlay"></video>
                <div className="up">
                    <img className="hd" src={data.photo} alt=""/>
                    <div className="bd">
                        <div className="name">{data.up}</div>
                        <div className="instructions">{data.instructions}</div>
                        <div className="number">
                            <div className="one">{data.num1}</div>
                            <div className="two">{data.num2}</div>
                        </div>
                    </div>
                    <div className="ft">{button}</div>
                </div>
                <div className="videoIntroduction">
                    <div className="hd">{data.Course}</div>
                    <div className="bd">{data.type}/{data.countries}</div>
                    <div className="ft">{data.text}</div>
                </div>
            </div>
        )
    }
}

export default Play