import React, { Component } from 'react';
import Uploads from './Uploads';
import YTBios from './YTBios';
import axios from 'axios';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

class Youtubers extends Component {
    state = {
      apiKey: 'AIzaSyABY2HEkHsu2XEMEVn2f5GWIxmbN9GcMn8',
      uploads: [],
      channelIDs: [
        {
          name: 'ZyoniK',
          id: 'UUi6snlTgnjOrADLCEGvbU6A'
        },
        {
          name: 'BattleHero',
          id: 'UUgZBkQT4gpH9E4X3gQTfAKQ'
        },
        {
          name: 'Bestinwest',
          id: 'UUZojcYclMVVsBob2IstepEA'
        },
        {
          name: 'Elite Four TV',
          id: 'UUz0vZmmKHbGa1ZVNgJEw2bw'
        },
        {
          name: 'JayDevin',
          id: 'UUllfYZCluPnKGEhRd-gSuBg'
        },
        {
          name: 'JFarmakis',
          id: 'UUPsLn8LXKrBMqXYE3B3GUFg'
        },
        {
          name: 'JimmaBanks',
          id: 'UU4B6SokqkZ-Sg5ofLBWdG0Q'
        },
        {
          name: 'PogoKieng',
          id: 'UUlkLzoqmR066FRDvV_1jbJA'
        },
        {
          name: 'MattyFBaby',
          id: 'UUhvwW1GuOFtRE2gMduD3XXQ'
        },
        {
          name: 'Purple Kyogre',
          id: 'UU_Q6DKlvgVKb2e8J5uqVc3g'
        },
        {
          name: 'St1x10',
          id: 'UUlRTxoREZSUbmwVHyBteMQg'
        },
        {
          name: 'stlfancs',
          id: 'UUbnwHDdwPNxAxNPeTAmqKOQ'
        },
        {
          name: 'Atticus Nair',
          id: 'UUkSyL4NlI70Cd37qN6YHmNg'
        }
      ]
    }

    componentDidMount() {
        this.state.channelIDs.forEach(channel => {
          axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${channel.id}&key=${this.state.apiKey}`)
        .then(res => this.setState({uploads: [...this.state.uploads, res.data.items[0].snippet]}))
        });
    }



    render() {
        return (
            <React.Fragment>
              <div style={{marginTop: '60px'}}></div>
              <div className="bios">
              <br/>
              <h1>YOUTUBERS</h1>
              <p style={{marginTop: '-15px'}}>Our content creators are the backbone of our community. They put out quality content for all to view and learn from, and bring us together to form a community of avid battlers and helpful teammates. See here the list of all of the hard-working content creators who work for you each day: feel free to visit their channels by clicking on their profile images, or view their recent uploads.</p>
              </div>
              <div className="yt_main">
              <Router>
                <div className="yt_switch">
                  <Link className="yt_switch_el" to="/youtubers/bios">Bios</Link>
                  <Link className="yt_switch_el" to="/youtubers/uploads">Uploads</Link>
                </div>
                <Switch>
                  <Route exact path="/youtubers" component={YTBios}/>
                  <Route path="/youtubers/bios" component={YTBios}/>
                  <Route path="/youtubers/uploads" render={props => (<Uploads{...props} uploads={this.state.uploads}/>)}/>
                </Switch>
              </Router>
              {/* <YTBios/>
              <Uploads uploads={this.state.uploads}/> */}
              </div>
            </React.Fragment>
        )
    }
}

export default Youtubers;