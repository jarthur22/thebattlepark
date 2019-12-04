import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Login extends Component {

    render() {
        return (
            <div style={thisStyle}>
                <h1>Login with Discord</h1>
                <p className="discord_button" onClick={axios.get('/api/discord/login')}>Login through discord</p>
            </div>
        )
    }
}

const thisStyle = {
    textAlign: 'center'
    
}

export default Login;