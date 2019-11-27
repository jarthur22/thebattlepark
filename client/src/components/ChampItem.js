import React, { Component } from 'react';

class ChampItem extends Component {
    render() {
        const username = this.props.champ.username;
       // const profile = this.props.champ.profile;
        const team = this.props.champ.team;

        return (
            <div className="champ">
                <div className="profile">
                    {/* <img src={require(`${profile}`)} alt={username}/>
                    <br/> */}
                    {username}
                </div>
                <br/>
                <div className="team">
                    {team.map((mon) => (
                        <div className="mon" key={mon}>
                            <img src={require("../images/bplogo.png")} alt={mon} style={{width: "40px"}}/>
                            <br/>
                            {mon}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ChampItem;