import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Bracket from './Bracket';
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
                        let b = parseInt(cached_user.brackets[i].split('t')[1]);
                        axios.get(`/api/members/bracket/${cached_user.brackets[i]}`)
                        //eslint-disable-next-line
                        .then(res => {
                            if(this._isMounted){
                                this.setState({
                                    brackets: [...this.state.brackets, b],
                                    bracketMembers: [...this.state.bracketMembers, {
                                        bracket: b,
                                        members: res.data
                                    }]
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
                            let b = parseInt(cached_user.brackets[i].split('t')[1]);
                            axios.get(`/api/members/bracket/${res.data.brackets[i]}`)
                            //eslint-disable-next-line
                            .then(res => {
                                if(this._isMounted){
                                    this.setState({
                                        brackets: [...this.state.brackets, b],
                                        bracketMembers: [...this.state.bracketMembers, {
                                            bracket: b,
                                            members: res.data
                                        }]
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

    render() {
        var user = this.props.user;

        if(this.props.getVerified){
            const brackets = this.state.bracketMembers;
            if(brackets[0]){
                const firstBracket = brackets[0];
                return(
                    <React.Fragment>
                        <div style={thisStyle}>
                            <h1>Welcome, {user.username}!</h1>
                            <React.Fragment>
                                <Router>
                                    <Link className="yt_switch_el" to={`/account/bracket${firstBracket.bracket}`}>{`Bracket ${firstBracket.bracket}`}</Link>
                                    {brackets.map(b => {
                                        if(b.bracket === firstBracket.bracket) return null;
                                        return(
                                            <React.Fragment key={b.bracket}>
                                                <Link className="yt_switch_el" to={`/account/bracket${b.bracket}`}>{`Bracket ${b.bracket}`}</Link>
                                            </React.Fragment>
                                        ) 
                                    })}
    
                                    <Switch>
                                        <Route exact path={`/account`} render={props => (<Bracket{...props} bracketMembers={firstBracket}/>)}/>
                                        <Route path={`/account/bracket${firstBracket.bracket}`} render={props => (<Bracket{...props} bracketMembers={firstBracket}/>)}/>
                                        {brackets.map(b => {
                                            if(b.bracket === firstBracket.bracket) return null;
                                            return(
                                                <React.Fragment key={b.bracket}>
                                                    <Route path={`/account/bracket${b.bracket}`} render={props => (<Bracket{...props} bracketMembers={b}/>)}/>
                                                </React.Fragment>
                                            )
                                        })}
                                    </Switch>
                                </Router>
                            </React.Fragment>
                        </div>
                        <br/>
                    </React.Fragment>
                )
            }else {
                return(
                    <div style={thisStyle}>
                        <h1>Welcome, {user.username}!</h1>
                        <h2>Loading Account...</h2>
                    </div>
                )
            }
            
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
    alignItems: 'center',
    padding: '0px 20px'
}

export default Account;