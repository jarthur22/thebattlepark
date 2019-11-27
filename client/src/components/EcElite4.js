import React, { Component } from 'react';
import ChampItem from './ChampItem';
import axios from 'axios';


class EcElite4 extends Component {
    _isMounted = false;

    state = {
        e4: [],
        champs: []
    }

    componentDidMount(){
        this._isMounted = true;
        axios.get('/api/e4/e4')
        .then(res => {
            if(res.data.length > 0){
                if(this._isMounted) this.setState({e4: res.data});
            }
        });
        axios.get('/api/e4/champ')
        .then(res => {
            if(res.data.length > 0){
                if(this._isMounted) this.setState({champs: res.data});
            }
        });
    }

    render() {
        return (
            <div className="ecelite4">
                <h1 style={headerStyle}>El Cerrito Elite 4</h1>
                <p>The greatest players in the region. Are you prepared to challenge this gauntlet?</p>
                <br/>
                <div className="elite4members">
                    {/* after members are in db, get request and map members */}
                    
                    {this.state.e4.map((member) => (
                        <div className="member" key={member.username}>
                            <img src={require(`./youtubers/profiles/${member.username}.jpg`)} alt="elite 4 member"/><br/>
                            {member.username}
                        </div>
                    ))}
                </div>
                <br/>
                <h2>Hall of Champions</h2>
                <div className="champs">
                    {this.state.champs.map((champ) => (
                        <ChampItem key={champ.username} champ={champ}/>
                    ))}
                </div>
            </div>
        )
    }
}

const headerStyle = {
    fontSize: '45px',
    textShadow: '3px -2px grey',
    paddingTop: '50px'
}


export default EcElite4;