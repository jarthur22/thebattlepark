import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Youtubers from './components/youtubers/Youtubers';

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
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
