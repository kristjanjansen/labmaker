import React, { Component } from 'react'

import Tweaker from './components/Tweaker'
import Medium from './components/Medium'
import Twitter from './components/Twitter'
import Code from './components/Code'
import Logo from './components/Logo'
import Speakerdeck from './components/Speakerdeck'

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
            employeename: 'Lee Chow'
        }
    }

    onTweak = (tweaks) => this.setState({ tweaks })

    render() {
        const { tweaks } = this.state
        return (
            <div style={styles.wrapper}>
                <div style={styles.left}>
                    <Speakerdeck tweaks={tweaks} />
                    <Twitter tweaks={tweaks} />
                    <hr />
                    <Medium tweaks={tweaks} />
                </div>
                <div style={styles.right}>
                    <Tweaker tweaks={tweaks} onTweak={this.onTweak} />
                </div>
            </div>
        )
    }

}

export default App