import React from 'react';
import {Link} from 'react-router-dom';
import bpbanner from './bpbanner.png';
import '../../App.css';


const Header = (props) => {
    
    var loginBtn = props.loggedIn ?
    <Link className="link" to="/login">Logout</Link> :
    <Link className="link" to="/login">Login</Link>;

    return (
        <header>
            <div className="header_left">
                <Link to="/"><img src={bpbanner} alt ="The Battle Park"></img></Link>
            </div>
            <div className="header_right">
                {loginBtn}
                <Link className="link" to="/youtubers">Youtubers</Link>
                <Link className="link" to="/">Home</Link>
            </div>
        </header>
    )
}

export default Header;