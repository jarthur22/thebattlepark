import React, { Component } from 'react';
import ChampItem from './ChampItem';


class EcElite4 extends Component {
    state = {
        champs: [
            {
                username: "KiengIv",
                profile: "./youtubers/profiles/kieng.jpg",
                team:[
                    "Charizard",
                    "Venusaur",
                    "Blastoise",
                    "Pikachu",
                    "Snorlax",
                    "Lapras"
                ]
            }
        ]
    }

    render() {
        return (
            <div className="ecelite4">
                <h1 style={headerStyle}>El Cerrito Elite 4</h1>
                <p>The greatest players in the region. Are you prepared to challenge this gauntlet?</p>
                <br/>
                <div className="elite4members">
                    {/* after members are in db, get request and map members */}
                    <div className="member">
                        <img src={require("./youtubers/profiles/bestinwest.jpg")} alt="elite 4 member"/><br/>
                        Bestinwest
                    </div>
                    <div className="member">
                        <img src={require("./youtubers/profiles/bestinwest.jpg")} alt="elite 4 member"/><br/>
                        Bestinwest
                    </div>
                    <div className="member">
                        <img src={require("./youtubers/profiles/bestinwest.jpg")} alt="elite 4 member"/><br/>
                        Bestinwest
                    </div>
                    <div className="member">
                        <img src={require("./youtubers/profiles/bestinwest.jpg")} alt="elite 4 member"/><br/>
                        Bestinwest
                    </div>
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