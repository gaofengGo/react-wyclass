import React, { Component } from 'react'
import { Button,Icon } from 'antd'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
// import TabNavigator from 'react-native-tab-navigator'
import Home from '@/containers/Home'
import MyStudy from './mystudy/MyStudy'
import My from './my/My'
import Recess from './recess/Recess'
import 'antd/dist/antd.css'
// import '@/assets/stylus/reset.styl'
import './App.styl'

class App extends Component {
  constructor (){
    super()
    var width = document.documentElement.clientWidth
    var rem = width/10
    document.documentElement.style.fontSize = rem + 'px' 
  }
  render() {
    return (
      <Router>
        <div className="App">
        
          <div className="class-view">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/mystudy" component={MyStudy} />
              <Route path="/recess" component={Recess} />
              <Route path="/my" component={My} />
              <Redirect from="/" to="/home" />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
