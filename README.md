
![](https://user-gold-cdn.xitu.io/2018/8/5/16508f1883b9e9fe?w=600&h=233&f=jpeg&s=11147)
## 前言
****
   最近开始学习React，于是便仿了一下网易公开课，来加强自己对React的理解，在这里和大家分享一下我
  这几天coding的React项目和自己踩的一些坑
    
### 使用到的技术栈
* 数据请求：axios
* 后台搭建：koa
* 跨域解决：koa-cors
* css预编译器：stylus
* UI框架：antd
* 其他组件：rewire  swiper  better-scroll 
## 项目下载步骤
* git clone https://github.com/fsafafaf/react-wyclass.git
* 安装
```
    # 安装依赖
    npm install
    # 启动后端
    yarn server
    # 启动前端
    yarn start
```
## 效果图

**登录**
![](https://user-gold-cdn.xitu.io/2018/8/5/16509d38cf14b81f?w=378&h=671&f=gif&s=2334671)
<br/>
**订阅功能**
![](https://user-gold-cdn.xitu.io/2018/8/5/16509d46923a7a93?w=378&h=671&f=gif&s=2795545)
<br/>
**搜索功能**
![](https://user-gold-cdn.xitu.io/2018/8/5/16509d5deda46c8b?w=378&h=671&f=gif&s=604345)

**总览**
![](https://user-gold-cdn.xitu.io/2018/8/5/165091a8e8cc1d72?w=377&h=668&f=gif&s=4053989)
<br/>

## 功能实现

* tabbar切换
* 轮播图和滑动功能
* 搜索功能：根据用户输入查找所有课程中符合要求的课程并显示
* 登录功能：根据用户的登录状态来判断是否可以订阅
* 订阅功能：根据用户订阅的账号显示订阅内容
* 播放功能：通过router传参确定视频内容

## 踩过的坑
### 一：react-router-dom 
#### ① JS切换路由

在这个项目中，我使用了react-redux来管理数据的状态，但是并没有连接数据库，所以界面一刷新，store里面的state就全部清零了。这导致我一开始用location跳转就一直保存不了数据，纠结了半天，于是就百度了一下，最后发现可以使用 react-router-dom 的Redirect功能实现页面的跳转<br/>
`实现代码`
```
import { Redirect } from 'react-router-dom'

handleOnclick = () => {
    this.setState({ redirect: true })
}
render () {
    if(this.state.redirect){
            return <Redirect push to="/home" />;
    }
    return (<button onClcik={this.handleOnClick} type="button">Button</button>;)
}
```

#### ②跳转至子路由的数据传入
在coding播放页面的时候，我一开始是用redux来管理传入播放页面的数据，但是页面刷新过后，redux传来的ID也就消失了，页面便成了一片白。emmmm...我沉思了一番，突然发现页面的路由并没有改变，还是以ID结尾的路由！那我为什么不利用路由来匹配播放界面应该传入的数据呢！思考完就动手，这里得提一下我在父组件里面进入播放页面的方法：利用 this.props.match来获得当前页面的路由，然后再加上视频的ID，将其做为子页面的路由

`实现代码`
```
import { Route } from 'react-router-dom'
class home extends Component {
    selectVideo(video, url) {
        return () => {
            this.props.history.push({
                pathname: url
            })
        }
    }
    return (
    
        <a onClick={this.selectVideo(item,`${match.url + '/' + item.id}`)}>
            <img src={item.img} />
            <div className="home-text">{item.text}</div>
        </a>
        
        <Route path = {`${match.url + '/:id'}`} component = {Play}/>
    )
}
```
然后只需要在子页面中将id筛选出来,再将id匹配一下就能获得要播放的数据了

`实现代码`
```
class Play extends Component {
    constructor(props) {
        super(props);
        const arr = this.props.history.location.pathname.split('/')
        const id = parseInt(arr[arr.length-1])
        this.state = {
            id: id
        }
    }
}
```

### 二：react组件的生命周期
react组件的生命周期有3种状态
* Mounting：已插入真实 DOM
* Updating：正在被重新渲染
* Unmounting：已移出真实 DOM

一般我们请求数据都是用componentDidMounting方法，但是这个方法不是万能的，有的时候它并不靠谱。
在实现订阅页面时，我一开始用的就是在componentDidMounting方法中运行检测订阅账号函数，这导致只有我在其他的页面对账号进行订阅，订阅页面才会能重新渲染订阅内容，而直接在订阅页面对账号的订阅进行操作，订阅页面就不会重新渲染。简而言之就是componentDidMounting方法只会在重新加载组件的时候才会运行，而我们需要的是this.props每发生一次改变，都要重新渲染一遍订阅内容，这种时候，我们就需要用到componentWillReceiveProps方法，它会在组件接收到一个新的 prop (更新后)时被调用，而且这个方法在初始化render时不会被调用。

`实现代码`
```
    componentWillReceiveProps() {
        getData().then(res => {
            const names = this.props.videos
            const arr = []
            if (names.length === 0) {
                this.setState({show: false})
            } else {
                this.setState({show: true})
            }
            for (var key in names) {
                for (var index in res) {
                    if (res[index].up === names[key])
                        arr.push(res[index])
                }
            }
            this.setState({
                videos: arr,
            })
        })
    }
```


### 三：搜索功能实现
因为该项目笔者用的是Antd框架搭建的初体验，看到啥组件都想用一用。于是...当正在做搜索功能的我看到了AutoComplete自动完成组件...我就...我就用了。现在回想起来，我真想回去扇自己一巴掌，根本用不来啊，白白浪费了1个小时。如果你想看AutoComplete怎么实现搜索功能，emmm...好吧，你也浪费了1分钟,笔者根本没实现😂。下面就讲一下笔者是怎么实现的搜索功能吧。<br/>
antd里的Search组件的onSearch属性会自动给我们返回一个value值，不用我们手动去获取输入框用户输入的值，所以
我们将value传到我们自己定义的onSearch()函数中，然后对课程名集合allclass进行筛选，这里判断value值是否存在于课程名中我们用indexOf() >= 0 来判断即可，如果不存在，indexOf()的结果就是-1。

`实现代码`
```
onSearch(value) {
        const result = this.state.allclass.filter(item => {
            if (item.Course.indexOf(value) >= 0)
                return item
        })
        console.log(result)
        this.setState({
            result: result
        })
    }
```
筛选出来的数据，用map遍历一下，就可以显示出来了

```
render () {
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
    )
}
```

## 结语

这个react项目是我边学习边coding的，还有一些小bug没解决，比如退出登录的时候 my界面并不会自动渲染，必须要重新切换路由，未登录状态才能渲染到页面上，不过学习不就是这样吗，不断的学习，不断的踩坑，不断的进步！希望我这篇文章能对你有所帮助。最后附上我的[项目地址](https://github.com/fsafafaf/react-wyclass)，如果你觉得不错，可以给我个star哦！