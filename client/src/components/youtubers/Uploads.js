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
        if(this.props.apiError){
            return(
                <div>
                    <br/>
                    <br/>
                    <div style={this.getStyle()}>
                        <h2>
                            Uploads are currently not available.
                        </h2>
                        <p style={{textAlign: 'center', padding: '10px'}}>
                            There may be an issue with the YouTube API, or a routine maintenance may be underway. Check back later or bring your questions to Ruah22#1562 on Discord.
                        </p>
                        <br/>
                        <br/>
                    </div>
                </div>
            )
        }else {
            return (
                <div>
                    <br/>
                    <br/>
                    <div style={this.getStyle()}>
                    {this.props.uploads.map((upload) => (
                        <UploadItem key={upload.resourceId.videoId} upload={upload} reportAPIError={this.reportAPIError}/>
                    ))}
                    </div>
                </div>
                
            );
        }
    }
}

//PropTypes
Uploads.propTypes = {
    uploads: PropTypes.array.isRequired
}

export default Uploads;
