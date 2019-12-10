import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    goToDiscordAuth = () => {
        console.log('here')
        axios.get('/api/discord/login').then(console.log('Redirecting..'));
    }

    render() {
        return (
            <div style={thisStyle}>
                <button className="discord_button" onClick={this.goToDiscordAuth}>Click to Join Our Discord Server!</button>
            </div>
        )
    }
}

const thisStyle = {
    textAlign: 'center',
    marginTop:'170px',
}

export default Login;