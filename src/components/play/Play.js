import React, {Component} from 'react'
import Header from '@/common/header/Header'
import { Redirect} from 'react-router-dom'
import './play.styl'
import { getData } from '@/api/api';
import { toastIt } from '@/common/toast/toast';

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
                toastIt('订阅成功', 1500,{fontSize: '16px'})
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
            toastIt('取消订阅', 1500,{fontSize: '16px'})
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
                <video src="http://117.21.186.14/vcloud1049.tc.qq.com/1049_M0118400001H0VZ02yMnL41001152843.f40.mp4?vkey=0B4F538814225890BCEBC7D96E88E86DF4BCACDD16A28A4B2D619BC90369932D40079D468A62F5968FB59B1FFF9DC4B9EE39307ED8F4AFA704B526A9CF5721EDAEC10717A5269DEA454B028B52697508F35C5181647A271C"
                autoplay="autoplay" controls="controls"  className="videoPlay"></video>
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