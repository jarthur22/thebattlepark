import React, { Component } from 'react'

class BracketMembers extends Component {
    render() {
        return (
            <div className="brackets">
                        {this.props.bracketMembers.map(bracket => {
                            return(
                                <div className='bracket' key={bracket.bracket}>
                                    <h2>{`Bracket ${bracket.bracket} Members`}</h2>
                                    <hr/>
                                    {bracket.members.map(member => {
                                        return(
                                            <div style={{}} key={member.id}>
                                                {member.username}
                                                
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
        )
    }
}

export default BracketMembers;