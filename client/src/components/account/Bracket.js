import React, { Component } from 'react';
import BracketMembers from './BracketMembers';
import Timezones from './Timezones';
import Tournaments from './Tournaments';

class Bracket extends Component {
    render() {
        return(
            <div className="brackets">
                <BracketMembers bracketMembers={this.props.bracketMembers}/>
                <Timezones bracketMembers={this.props.bracketMembers}/>
                <Tournaments bracket={this.props.bracketMembers.bracket}/>
            </div>
        )
    }
}

export default Bracket;