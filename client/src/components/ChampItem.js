import React, { Component } from 'react';

class ChampItem extends Component {

    parseSpritePath = (mon) => {
        var spritePath = mon.toLowerCase().replace(" ", "-").replace("alolan", "alola");
        spritePath = `${process.env.PUBLIC_URL}/sprites/${spritePath}.png`;
        return spritePath;
    }

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
                <div className="team">
                    {team.map((mon) => (
                        <div className="mon" key={mon}>
                            <img src={this.parseSpritePath(mon)} alt={mon} style={{width: "90px"}}/>
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