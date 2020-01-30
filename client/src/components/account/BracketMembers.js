import React, { Component } from 'react'

class BracketMembers extends Component {
    render() {
        const bracket = this.props.bracketMembers;
        return (
            <div className='bracket' key={bracket.bracket}>
                <h2>{`Bracket ${bracket.bracket} Members`}</h2>
                <hr/>
                <table>
                    <tbody>
                    {bracket.members.map(member => {
                        return(
                            <tr style={{}} key={member.id}>
                                <td>{member.username}</td>
                                <td>{member.timezone}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BracketMembers;