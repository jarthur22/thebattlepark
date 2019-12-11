import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Youtubers from './components/youtubers/Youtubers';
import EcElite4 from './components/EcElite4';
import Login from './components/Login';

class App extends Component{

  state = {
    discordAuthCode: ''
  }

  componentDidMount() {
    if(window.location.href.includes('?code=')){
      var code = window.location.href.split('code=')[1];
      code = code.split('#')[0];
      this.setState({discordAuthCode: code});
    }
  }

  getStyle = () => {
    return {
      backgroundColor: '#111111',
      color: 'white',
      fontFamily: 'Arial,Helvetica,sans-serif',
      height: '100%',
      overflow:'auto'
    }
  }

  render(){

    if(this.state.discordAuthCode !== ''){
      window.localStorage.setItem('authCode', this.state.discordAuthCode);
      window.location.href = '/#/login';
    }

    return (
      <Router>
        <div className="App" style={this.getStyle()}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/youtubers" component={Youtubers}/>
              <Route path="/ecelite4" component={EcElite4}/>
              <Route path="/login" component={Login}/>
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
