import React, { Component } from 'react';
import bplogo from '../images/bplogo.png';
import '../App.css';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div style={thisStyle}>
                    <h1 style={headerStyle}>WELCOME TO <br/>THE BATTLE PARK!</h1>
                    <p style={{fontSize: 'medium', textShadow: '2px 1px grey', marginTop:'-20px'}}>Get ready to bring your Discord battling experience to a new level.
                    <br/>
                    (More features coming soon!)</p>
                    <br/>
                    <br/>
                    <a className="discord_button" href="https://discord.gg/c4EyDNQ">Click to Join Our Discord Server!</a>
                </div>
            </React.Fragment>
        )
    }
}

const thisStyle = {
    textAlign: 'center',
    height: '100vh',
    marginTop:'-170px',
    backgroundImage: `url(${bplogo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
}

const headerStyle = {
    fontSize: '45px',
    textShadow: '3px -2px grey',
    paddingTop: '40vh'
}

export default Home;