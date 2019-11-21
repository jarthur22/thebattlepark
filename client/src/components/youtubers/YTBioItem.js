import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';

class YTBioItem extends Component {
    render() {
        const name = this.props.ytbio.name;
        const bio = this.props.ytbio.bio;
        const logo = this.props.ytbio.logo;
        const channelUrl = this.props.ytbio.channel;
        return (
            <div className="bio">
                <a href={channelUrl}>
                    <img src={require(`${logo}`)} alt={name}/>
                </a>
                <div className="column">
                    <a href={channelUrl}><h2>{name}</h2></a>
                    <p>{bio}</p>
                </div>
            </div>
        )
    }
}

//PropTypes
YTBioItem.propTypes = {
    ytbio: PropTypes.object.isRequired
}

export default YTBioItem;