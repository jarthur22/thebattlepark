import React, { Component } from 'react';
import axios from 'axios';
import PodcastItem from './PodcastItem';

class Podcast extends Component {

    state = {
        token: 'f1ab81620815c8b30c111f273372d879',
        channelId: '670102',
        uploads: []
    }

    componentDidMount() {
        axios.get(`https://www.buzzsprout.com/api/${this.state.channelId}/episodes.json?api_token=${this.state.token}`)
        .then(res => {
            this.setState({uploads: res.data});
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div style={{alignSelf: 'center', marginTop: '70px', textAlign: 'center', padding: '0vh 4vw'}}>
                <h2>The Competitive Edge Podcast</h2>
                <p>Hosted by your very own ZyoniK and kltd32 (Kody), this weekly podcast brings you the latest in competitive PvP content.</p>
                <h3 style={{textAlign: 'left', marginLeft: '8vw', marginBottom: '-1vh'}}>Uploads</h3>
                <hr style={{margin: '2vh 4vw'}}/>

                <div style={{border: '1px solid gray', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
                    {
                        this.state.uploads.map(upload => {
                            return (
                                <PodcastItem
                                key={upload.id} 
                                upload={upload}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Podcast;