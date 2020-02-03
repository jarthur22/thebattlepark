import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

class UploadItem extends Component {
    
    truncateTitle = (title) => {
        return (title.length > 50) ? title.substr(0, 50) + '...' : title;
    }

    render() {
        const channelUrl = `https://www.youtube.com/channel/${this.props.upload.channelId}`;
        const videoUrl = `https://www.youtube.com/watch?v=${this.props.upload.resourceId.videoId}`;
        const title = this.truncateTitle(this.props.upload.title);
        const channelTitle = this.props.upload.channelTitle;
        const thumbnail = this.props.upload.thumbnails.medium.url;
       
        return (
            <div className="upload">
                <a href={videoUrl} rel="noopener noreferrer" target="_blank">
                    <img src={thumbnail} alt={title} style={{height:'100px'}}/>
                </a>
                <div className="u_column">
                    <a className="video_link" href={videoUrl} rel="noopener noreferrer" target="_blank">{title}</a>
                    <br/>
                    <a className="channel_link" href={channelUrl} rel="noopener noreferrer" target="_blank">{channelTitle}</a>
                </div>
            </div>
        )
    }
}

//PropTypes
UploadItem.propTypes = {
    upload: PropTypes.object.isRequired
}

export default UploadItem;