import React, { Component } from 'react';
import axios from 'axios';

class Podcast extends Component {

    state = {
        token: 'f1ab81620815c8b30c111f273372d879',
        channelId: '670102',
        uploads: []
    }

    componentDidMount() {
        axios.get(`https://www.buzzsprout.com/api/${this.state.channelId}/episodes.json`)
    }

    render() {
        return (
            <div style={{marginTop: '70px', textAlign: 'center', padding: '0vh 4vw'}}>
                <h1>The Competitive Edge Podcast</h1>
                <p>Hosted by your very own ZyoniK and kltd32 (Kody), this weekly podcast brings you the latest in competitive PvP content.</p>
                <br/>
                <h2 style={{textAlign: 'left', marginLeft: '8vw', marginBottom: '-1vh'}}>Uploads</h2>
                <hr style={{margin: '2vh 4vw'}}/>

                <div style={{overflow: 'auto', height: '60vh', border: '1px solid white'}}>
                    
                </div>
            </div>
        )
    }
}

export default Podcast;