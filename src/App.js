import React, { Component } from 'react'

import Tweaker from './components/Tweaker'
import Terminal from './components/Terminal'
import Medium from './components/Medium'
import Twitter from './components/Twitter'
import Code from './components/Code'
import Logo from './components/Logo'
import Speakerdeck from './components/Speakerdeck'
import WebfontLoader from '@dr-kobros/react-webfont-loader';

const styles = {
    wrapper: {
        display: 'flex'
    },
    left: {
        flex: 1
    },
    right: {
        width: '15rem',
        height: '200vh',
        borderLeft: '1px solid rgba(0,0,0,0.1)'
    }
}

class App extends Component {

    state = {
        tweaks: {
            first: 5,
            second: 0,
            avatar: 'https://d3iw72m71ie81c.cloudfront.net/male-43.jpg',
            symbol: '❂',
            name: 'bla',
            background: '#333',
            employeename: 'Lee Chow',
            monospacefont: 'Roboto Mono',
            titlefont: 'Rubik',
            titleweight: 600
        }
    }

    onTweak = (tweaks) => this.setState({ tweaks })

    render() {
        const { tweaks } = this.state
        const fonts = { google: { families: [
            tweaks.monospacefont,
            tweaks.titlefont
        ]}}
        return (
            <WebfontLoader config={fonts}>
                <div style={styles.wrapper}>
                    <div style={styles.left}>
                        <Terminal tweaks={tweaks} />
                        <Twitter tweaks={tweaks} />
                        <hr />
                        <Medium tweaks={tweaks} />
                        <Speakerdeck tweaks={tweaks} />
                    </div>
                    <div style={styles.right}>
                        <Tweaker tweaks={tweaks} onTweak={this.onTweak} />
                    </div>
                </div>
            </WebfontLoader>
        )
    }

}

export default App