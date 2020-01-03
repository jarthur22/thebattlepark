import React, { Component } from 'react';

class PodcastItem extends Component {

    truncate = (desc) => {
        return (desc.length > 110) ? desc.substr(0, 110) + '...' : desc;
    }

    render() {
        const {
            artist,
            artwork_url,
            audio_url,
            description,
            duration,
            episode_number,
            id,
            published_at,
            summary,
            title
        } = this.props.upload;

        var parseDate = published_at.split("-");
        var date = `${parseDate[1]}/${parseDate[2].split('T')[0]}/${parseDate[0]}`
        //var subtext = summary === '' ? this.truncate(description.replace(/<[^>]*>?/gm, '')) : summary;
        var subtext = this.truncate(description.replace(/<[^>]*>?/gm, ''));
        return (
            <div className="podcast_upload">
                <div className="pu_column">
                    <p className="p_nomargin">{date}</p>
                    <img src={artwork_url}
                    alt={`Episode ${episode_number}`} 
                    style={{width: '15vw', maxWidth: '100px', padding: '5px 10px', borderRadius: '20%'}}></img>
                    <p className="p_nomargin">{artist}</p>
                </div>
                <div className="pu_column">
                    <h3>{title}</h3>
                    <p>{subtext}</p>
                    <audio controls>
                        <source src={audio_url} type="audio/mpeg"/>
                        Your browser does not support audio.
                    </audio>
                </div>
            </div>
        )
    }
}

export default PodcastItem;