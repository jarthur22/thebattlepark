import React, { Component } from 'react';


class Account extends Component {

    render() {
        var user = this.props.user;

        if(this.props.getVerified){
            return(
                <div style={thisStyle}>
                    <h1>Welcome, {user.username}!</h1>
                    <p><i>New features coming soon!</i></p>
                </div>
            )
        } else {
            return(
                <div style={thisStyle}>
                    <h2>It looks like you are not a member of our Discord server.</h2>
                    <img style={{width: '40vw'}} src={`${process.env.PUBLIC_URL}/bpbanner.png`} alt ="The Battle Park"></img>
                    <p>To access a ton of cool features on the website as well as access to PvP discussion, battle groups, and tournaments, click here!</p>
                    <br/>
                    <a className="discord_button" href="https://discord.gg/c4EyDNQ">Click to Join Our Discord Server!</a>
                </div>
            )
        }
    }
}

const thisStyle = {
    textAlign: 'center',
    marginTop:'170px',
    height: '70vh',
    alignItems: 'center',
    padding: '0px 20px'
}

export default Account;