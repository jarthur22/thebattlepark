import React, { Component } from 'react';
import axios from 'axios';

class Tournaments extends Component {
    _isMounted = false;
    state= {
        tournaments: []
    }

    componentDidMount(){
        this._isMounted = true;
        if(this.props.bracket){
            const {bracket} = this.props;
            axios.get(`/api/tournaments/${bracket}`).then(res => {
                console.log(res.data);
                if(this._isMounted){
                    this.setState({tournaments: res.data});
                }
            }).catch(err => console.log(err));
        }
    }

    render() {
        const {tournaments} = this.state;
        if(tournaments.length > 0){
            return (
                <div>
                    <h2>Current Tournaments</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td>Link</td>
                                <td>Rules</td>
                                <td>Start Date</td>
                                <td>Participants</td>
                            </tr>
                            {tournaments.map(t => {
                                return(
                                    <tr key={t.rsvpurl}>
                                        <td>{t.title}</td>
                                        <td><a href={t.rsvpurl} rel="noopener noreferrer" target="_blank">{t.rsvpurl}</a></td>
                                        <td>{t.rules}</td>
                                        <td>{t.date.split(',')[0]}</td>
                                        <td>{t.rsvps}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return(
                <div>
                    <h2>Current Tournaments</h2>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}

export default Tournaments;