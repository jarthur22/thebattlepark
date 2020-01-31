import React, { Component } from 'react';
import axios from 'axios';

class Tournaments extends Component {
    _isMounted = false;
    state= {
        tournaments: [],
        empty: false
    }

    componentDidMount(){
        this._isMounted = true;
        if(this.props.bracket){
            const {bracket} = this.props;
            axios.get(`/api/tournaments/${bracket}`).then(res => {
                if(this._isMounted){
                    this.setState({tournaments: res.data});
                    if(res.data.length === 0){
                        this.setState({empty: true});
                    }
                }
            }).catch(err => console.log(err));
        }
    }

    render() {
        const {tournaments} = this.state;
        if(tournaments.length > 0){
            return (
                <div className="tournaments">
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
                                    <tr key={t._id}>
                                        <td>{t.title}</td>
                                        <td><a href={t.rsvpurl} rel="noopener noreferrer" target="_blank">GO!</a></td>
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
        } else if(this.state.empty){
            return(
                <div className="tournaments">
                    <h2>Current Tournaments</h2>
                    <p>No Tournaments to show. Ask your Bracket Leader to make more!</p>
                </div>
            )
        }
        else {
            return(
                <div className="tournaments">
                    <h2>Current Tournaments</h2>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}

export default Tournaments;