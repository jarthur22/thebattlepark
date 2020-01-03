import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';


const Header = (props) => {
    var avatarLink = props.user.id ?
    `http://cdn.discordapp.com/avatars/${props.user.id}/${props.user.avatar}.png?size=2048` :
    `${process.env.PUBLIC_URL}/bplogo.png`;

    var loginBtn = props.loggedIn ?
    <Link className="profile_link" to="/account"><img src={avatarLink} alt="profile" style={{
        width: "49px",
        height: "49px",
        padding: "0",
        borderRadius: "50%",
        border: "1px solid blue"}}/></Link> :
    <Link className="link" to="/login">Login</Link>;

    

    return (
        <header>
            <div className="header_left">
                <Link to="/"><img src={`${process.env.PUBLIC_URL}/bpbanner.png`} alt ="The Battle Park"></img></Link>
            </div>
            <div className="header_right">
                {loginBtn}
                <Link className="link" to="/podcasts">Podcasts</Link>
                <Link className="link" to="/youtubers">Youtubers</Link>
                <Link className="link" to="/">Home</Link>
            </div>
        </header>
    )
}

export default Header;