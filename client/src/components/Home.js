import React, { Component } from 'react';
import bplogo from '../images/bplogo.png';
import {Link} from 'react-router-dom';
import '../App.css';

class Home extends Component {

    render() {
        var LoginBtn = window.localStorage.getItem('discord_user') ?
            <Link className='discord_button' to='/account'>My Account</Link> : 
            <Link className='discord_button' to='/login'>Login with Discord</Link>

        return (
            <div style={{
                backgroundImage: `url(${bplogo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '90vh'
            }}>
                <div style={thisStyle}>
                    <h1 style={headerStyle}>WELCOME TO <br/>THE BATTLE PARK!</h1>
                    <p style={{fontSize: 'medium', textShadow: '2px 1px grey', marginTop:'-20px', padding: '5px'}}>
                        <br/>
                        Get ready to bring your Discord battling experience to a new level.
                        <br/>
                    </p>
                    <a className="discord_button" href="https://discord.gg/vthVceQubh">Click to Join Our Discord Server!</a>
                    <br/>
                    <p style={{fontSize: 'medium', textShadow: '2px 1px grey',padding: '5px'}}>
                        Already in the server? Log in with Discord or view your account!
                        <br/>
                    </p>
                    {LoginBtn}
                </div>
            </div>
        )
    }
}

const thisStyle = {
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 15px'
}

const headerStyle = {
    fontSize: '45px',
    textShadow: '3px -2px grey',
}

export default Home;