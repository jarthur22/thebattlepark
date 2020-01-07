import React, { Component } from 'react';
import axios from 'axios';


class Account extends Component {
    _isMounted = false;
    state= {
        brackets: [],
        bracketMembers: []
    }

    componentDidMount() {
        this._isMounted = true;

        var cached_user = JSON.parse(window.localStorage.getItem("discord_user"));
        if(cached_user){
            if(cached_user.brackets){
                console.log("got it");
                //get all bracket data here
                for(let i=0; i<cached_user.brackets.length; i++){
                    if(cached_user.brackets[i] !== 'Bracket Leader'){
                        axios.get(`/api/members/bracket/${cached_user.brackets[i]}`)
                        //eslint-disable-next-line
                        .then(res => {
                            if(this._isMounted){
                                this.setState({
                                    brackets: [...this.state.brackets, parseInt(cached_user.brackets[i].split('t')[1])],
                                    bracketMembers: res.data
                                });
                            }
                        }).catch(err => console.log(err));
                    }
                }
            }
            else if(cached_user.id){
                console.log("not here");
                axios.get(`/api/members/${cached_user.id}`)
                .then(res => {
                    console.log(res.data);
                    cached_user.timezone = res.data.timezone;
                    cached_user.brackets = res.data.brackets;
                    //get all bracket data here
                    for(var i=0; i<res.data.brackets.length; i++){
                        if(res.data.brackets[i] !== 'Bracket Leader'){
                            axios.get(`/api/members/bracket/${res.data.brackets[i]}`)
                            //eslint-disable-next-line
                            .then(res => {
                                if(this._isMounted){
                                    this.setState({
                                        brackets: [...this.state.brackets, parseInt(cached_user.brackets[i].split('t')[1])],
                                        bracketMembers: res.data
                                    });
                                }
                            }).catch(err => console.log(err));
                        }
                    }
                    
                    window.localStorage.setItem('discord_user', JSON.stringify(cached_user));
                })
                .catch(err => console.log(err));
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    //map seperate components instead of mapping divs

    render() {
        var user = this.props.user;

        if(this.props.getVerified){
            return(
                <div style={thisStyle}>
                    <h1>Welcome, {user.username}!</h1>
                    {this.state.brackets.map(bracket => {
                        return(
                            <div key={bracket}>
                                <h2>{`Bracket ${bracket} Members`}</h2>
                                <hr/>
                                {this.state.bracketMembers.map(member => {
                                    return(
                                        <div key={member.id}>
                                            {member.username}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
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
    marginTop:'100px',
    height: '70vh',
    alignItems: 'center',
    padding: '0px 20px'
}

export default Account;