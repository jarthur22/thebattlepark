import React, { Component } from 'react';
import BracketMembers from './BracketMembers';
import Timezones from './Timezones';

class Bracket extends Component {
    render() {
        return(
            <React.Fragment>
                <BracketMembers bracketMembers={this.props.bracketMembers}/>
                <Timezones bracketMembers={this.props.bracketMembers}/>
            </React.Fragment>
        )
    }
}

export default Bracket;