import React from 'react'

function Footer() {
    return (
        <footer style={footerStyle}>
            <p>Copyright © 2019 The Battle Park- All Rights Reserved.</p>
        </footer>
    )
}

const footerStyle = {
    display: 'block',
    textAlign: 'center',
    padding: '10px',
    bottom: '0',
    borderTop: '2px solid grey'
}

export default Footer;