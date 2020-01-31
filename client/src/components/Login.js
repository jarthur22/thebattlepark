import React, { Component } from 'react';
import axios from 'axios';
import btoa from 'btoa';

class Login extends Component {
    CLIENT_ID = '562770948764205077';
    CLIENT_SECRET = '-eQrhkMMZS-aEvuzpCJuoQ9z6BMNZdSk'
    //redirect = encodeURIComponent('http://localhost:3000/');
    redirect = encodeURIComponent('https://www.thebattlepark.com/');
    code = '';

    componentDidMount() {
        if(window.localStorage.getItem('authCode')){
            this.code = window.localStorage.getItem('authCode');
            window.localStorage.removeItem('authCode');
            const creds = btoa(`${this.CLIENT_ID}:${this.CLIENT_SECRET}`);
            //console.log(creds);
            axios.post(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${this.code}&redirect_uri=${this.redirect}`,
            {}, {headers: {Authorization: `Basic ${creds}`,}}).then(res => {
                window.localStorage.setItem('discord_token', res.data.access_token)
                console.log(res.data.access_token);
                this.props.setLoggedIn();
                window.location.href = '/#/account'
            }).catch(err => console.log(err));
        }
    }

    goToDiscordAuth = () => {
        //axios.get('/api/discord/login').then(console.log('Redirecting..'));
        window.location.href = `https://discordapp.com/api/oauth2/authorize?client_id=${this.CLIENT_ID}&scope=identify%20guilds&response_type=code&redirect_uri=${this.redirect}`;
    }

    render() {
        //console.log(window.localStorage.getItem('authCode'));
        //console.log(this.redirect);
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