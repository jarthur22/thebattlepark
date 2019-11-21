import React, { Component } from 'react';

class EcElite4 extends Component {
    render() {
        return (
            <div>
                <h1 style={headerStyle}>El Cerrito Elite 4</h1>
                <p>This is the page for the Elite 4</p>
            </div>
        )
    }
}

const headerStyle = {
    fontSize: '45px',
    textShadow: '3px -2px grey',
    paddingTop: '50px'
}


export default EcElite4;