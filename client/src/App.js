import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Youtubers from './components/youtubers/Youtubers';
import EcElite4 from './components/EcElite4';
import Login from './components/Login';
import Account from './components/account/Account';
import Podcast from './components/Podcast';

class App extends Component{

  state = {
    discordAuthCode: '',
    loggedIn: false,
    openMenu: false,
    user: window.localStorage.getItem('discord_user') ?
      JSON.parse(window.localStorage.getItem('discord_user')):
      {}
  }

  componentDidMount() {
    if(window.location.href.includes('?code=')){
      var code = window.location.href.split('code=')[1];
      code = code.split('#')[0];
      this.setState({discordAuthCode: code});
    }
    if(window.localStorage.getItem('discord_token')){
      this.setState({loggedIn: true});
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

  getLoginBtn = () => {
    if(this.loggedIn){
      return <Link className="link" to="/login">Logout</Link>;
    }else{
      return <Link className="link" to="/login">Login</Link>;
    }
  }

  setLoggedIn = () => {
    axios.get('https://discordapp.com/api/users/@me',
      {headers: {Authorization: `Bearer ${window.localStorage.getItem('discord_token')}`,}})
      .then(res => {
        window.localStorage.setItem('discord_user', JSON.stringify(res.data));
        this.setState({
          user: JSON.parse(window.localStorage.getItem('discord_user')),
          loggedIn: true
        });
      })
      .catch(err => console.log(err));
  }

  getVerified = () => {
    axios.get('https://discordapp.com/api/users/@me/guilds',
      {headers: {Authorization: `Bearer ${window.localStorage.getItem('discord_token')}`,}})
      .then( res => {
        res.data.forEach(guild => {
          if(guild.id === '549574028638027776'){
            return true;
          }
        });
        return false; //only hits this if user is not in TBP
      }).catch(err => console.log(err));
  }

  menuClicked = () => {
    this.setState({openMenu: !this.state.openMenu});
  }

  closeMenu = () => {
    if(this.state.openMenu){
      this.setState({openMenu: false});
    }
    
  }

  renderMenu = () => {
    if(this.state.openMenu/*  && this.state.user */){
      /* var avatarLink = this.state.user.id ?
        `http://cdn.discordapp.com/avatars/${this.state.user.id}/${this.state.user.avatar}.png?size=2048` :
        `${process.env.PUBLIC_URL}/bplogo.png`; */
      console.log("openMenu true")
      var loginBtn = this.state.loggedIn ?
        <Link className="link" to="/account">My Account</Link> :
        <Link className="link" to="/login">Login</Link>;

      return(
        <div className="menu" style={{
          position: "fixed",
          right: '0vw',
          zIndex: "10",
          height: "100vh",
          width: "45vw",
          backgroundColor: "#738adb"
        }}>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/youtubers">Youtubers</Link>
          <Link className="link" to="/podcasts">Podcasts</Link>
          {loginBtn}
        </div>
      )
    }
  }

  render(){

    if(this.state.discordAuthCode !== ''){
      window.localStorage.setItem('authCode', this.state.discordAuthCode);
      window.location.href = '/#/login';
    }

    return (
      <Router>
        <div className="App" style={this.getStyle()} onClick={this.closeMenu}>
            <Header loggedIn={this.state.loggedIn} user={this.state.user} menuClicked={this.menuClicked}/>
            {this.renderMenu()}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/youtubers" component={Youtubers}/>
              <Route path="/ecelite4" component={EcElite4}/>
              <Route path="/login" component={() => <Login setLoggedIn={this.setLoggedIn}/>}/>
              <Route path="/account" component={() => <Account getVerified={this.getVerified} user={this.state.user}/>}/>
              <Route path="/podcasts" component={Podcast}/>
            </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
