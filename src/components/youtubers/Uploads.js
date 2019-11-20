import React, { Component } from 'react';
import UploadItem from './UploadItem';
import PropTypes from 'prop-types';
import '../../App.css';


class Uploads extends Component {
    getStyle = () => {
        return{
            float: 'right',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignItems: 'baseline',
        }
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <div style={this.getStyle()}>
                {this.props.uploads.map((upload) => (
                    <UploadItem key={upload.resourceId.videoId} upload={upload}/>
                ))}
                </div>
            </div>
            
        );
    }
}

//PropTypes
Uploads.propTypes = {
    uploads: PropTypes.array.isRequired
}

export default Uploads;
