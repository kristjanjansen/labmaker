import React, { Component } from 'react'

import Tweaker from './components/Tweaker'
import Medium from './components/Medium'
import Twitter from './components/Twitter'
import Code from './components/Code'

class App extends Component {

    state = {
        tweaks: {
            first: 5,
            second: 0,
            avatar: 'https://d3iw72m71ie81c.cloudfront.net/male-43.jpg',
            symbol: '❂',
            name: 'bla'
        }
    }

    onTweak = (tweaks) => this.setState({ tweaks })

    render() {
        const { tweaks } = this.state
        return (
            <div>
                <hr />
                <Twitter tweaks={tweaks} />
                <Tweaker tweaks={tweaks} onTweak={this.onTweak} />
                <hr />
                <Medium tweaks={tweaks} />
                <hr />
                <pre>{/*JSON.stringify(tweaks)*/}</pre>
            </div>
        )
    }

}

export default App