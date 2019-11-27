import React, { Component } from 'react';
import YTBioItem from './YTBioItem';
import '../../App.css';

class YTBios extends Component {

    state = {
        bios: [
            {
                name:'ZyoniK',
                key: '1',
                bio: `Creator of The Battle Park, Pokémon Go PvP Fan(atic), self-proclaimed Leader of Team Winstict and fully sponsored by my wife “happy wife, happy life”. Bringing you family friendly Pokémon Go PvP content and strategy!`,
                logo: './profiles/zyonik.jpg',
                channel: 'https://www.youtube.com/channel/UCi6snlTgnjOrADLCEGvbU6A'
            },
            {
                name: 'BattleHero (Vange)',
                key: '2',
                bio: `With his unquenchable thirst for coffee and addiction to gaming, he begins to conquer the world one video at a time. Vange is currently on the road to becoming the best that no one ever was...`,
                logo: './profiles/battlehero.jpg',
                channel: 'https://www.youtube.com/user/FightRealmPVP'
            },
            {
                name: 'PogoKieng',
                key: '3',
                bio:`PogoKieng's YouTube channel is a place where you'll find high level PvP battles (silph and non-silph), and detailed analysis including silph cup meta breakdowns and suggested teams to help you be successful in your PvP adventures and tournaments.`,
                logo: './profiles/kieng.jpg',
                channel: 'https://www.youtube.com/user/kieng'
            },
            {
                name: 'Bestinwest',
                key: '4',
            bio: `Pokémon fan for over 20 years and avid video game collector/gamer. Love competition and testing my skill against others. I guess you could say I love being the Best ;)`,
                logo: './profiles/Bestinwest.jpg',
                channel: 'https://www.youtube.com/user/Bestinwest'
            },
            {
                name: 'Elite Four TV',
                key: '5',
                bio: `Elite Four TV is about interview, strategies, tips and tricks for PVP, and how to min-max our game time so our spouses don't beat us up before we battle it out at the next tournament!`,
                logo: './profiles/EFTV.jpg',
                channel: 'https://www.youtube.com/channel/UCz0vZmmKHbGa1ZVNgJEw2bw'
            },
            {
                name: 'JFarmakis',
                key: '6',
                bio: `Hosted by an experienced Pokémon GO player and administrator of a local Toronto group with over 400 users, this channel features all you need to know about PoGo PVP.`,
                logo: './profiles/jfarmakis.jpg',
                channel: 'https://www.youtube.com/channel/UCPsLn8LXKrBMqXYE3B3GUFg'
            },
            {
                name: 'MattyFBaby',
                key: '7',
                bio: `Pokemon GO PvP professor, Boulder, Twilight, and Tempest Cup Winner!`,
                logo: './profiles/mattyfbaby.jpg',
                channel: 'https://www.youtube.com/channel/UChvwW1GuOFtRE2gMduD3XXQ'
            },
            {
                name: 'Purple Kyogre',
                key: '8',
                bio: `Purple Kyogre is a dedicated Pokemon GO player who uploads countless battles to help you prepare for your tournaments!`,
                logo: './profiles/purplekyogre.jpg',
                channel: 'https://www.youtube.com/channel/UC_Q6DKlvgVKb2e8J5uqVc3g'
            },
            {
                name: 'st1x10',
                key: '9',
                bio: `st1x10 brings you Pokemon GO content geared towards helping you win your tournaments and raid challenges with style.`,
                logo: './profiles/st1x10.jpg',
                channel: 'https://www.youtube.com/channel/UClRTxoREZSUbmwVHyBteMQg'
            },
            {
                name: 'stlfancs',
                key: '10',
                bio: `I've been playing Pokemon since 1998 and I focus my channel towards helping people understand the latest and greatest updates in PoGo.`,
                logo: './profiles/stlfancs.jpg',
                channel: 'https://www.youtube.com/channel/UCbnwHDdwPNxAxNPeTAmqKOQ'
            },
            {
                name: 'JimmaBanks',
                key: '11',
                bio: `JimmaBanks is a hardcore PoGO fan that has played with some of the best while trying to build up the community. From PvP battles with the best to raid challenges wafu style, he does it all.`,
                logo: './profiles/jimmabanks.jpg',
                channel: 'https://www.youtube.com/channel/UC4B6SokqkZ-Sg5ofLBWdG0Q'
            },
            {
                name: 'Atticus Nair',
                key: '12',
                bio: `With his trusty whiteboard, Atticus Nair brings you an in-depth analysis of the Pokemon GO PvP meta, including Silph Arena monthly Cups.`,
                logo: './profiles/atticusnair.jpg',
                channel: 'https://www.youtube.com/user/AtticusNair'
            },
            {
                name: 'JayDevin',
                key: '13',
                bio: `JayDevin *cue bongos* brings you detailed practice battles for Pokemon GO PvP, accompanied by the sharpest witt and best sound effects around.`,
                logo: './profiles/jaydevin.jpg',
                channel: 'https://www.youtube.com/channel/UCllfYZCluPnKGEhRd-gSuBg'
            }
        ]
    }

    render() {
        return (
            <div className="bios">
                <div>
                    {this.state.bios.map((ytbio) => (
                        <YTBioItem key={ytbio.key} ytbio={ytbio}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default YTBios;