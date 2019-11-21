import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Youtubers from './components/youtubers/Youtubers';
import EcElite4 from './components/EcElite4';

class App extends Component{

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
    return (
      <Router>
        <div className="App" style={this.getStyle()}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/youtubers" component={Youtubers}/>
              <Route path="/ecelite4" component={EcElite4}/>
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
