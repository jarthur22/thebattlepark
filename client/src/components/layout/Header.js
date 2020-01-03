import React from 'react';
import {Link} from 'react-router-dom';
import bpbanner from './bpbanner.png';
import '../../App.css';


function Header() {
    return (
        <header>
            <div className="header_left">
                <Link to="/"><img src={bpbanner} alt ="The Battle Park"></img></Link>
            </div>
            <div className="header_right">
                <Link className="link" to="/podcasts">Podcasts</Link>
                <Link className="link" to="/youtubers">Youtubers</Link>
                <Link className="link" to="/">Home</Link>
            </div>
        </header>
    )
}

export default Header;