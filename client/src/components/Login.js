import React, { Component } from 'react';

class Login extends Component {

    goToDiscordAuth = () => {
        console.log('here')
        const CLIENT_ID = '562770948764205077';
        const redirect = encodeURIComponent('http://localhost:3000/');
        //axios.get('/api/discord/login').then(console.log('Redirecting..'));
        window.location.href = `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`;
    }

    render() {
        return (
            <div style={thisStyle}>
                <button className="discord_button" onClick={this.goToDiscordAuth}>Login with Discord</button>
            </div>
        )
    }
}

const thisStyle = {
    textAlign: 'center',
    marginTop:'170px',
}

export default Login;