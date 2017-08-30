import React, { Component } from 'react'

import Tweaker from './components/Tweaker'
import Medium from './components/Medium'
import Code from './components/Code'

class App extends Component {

    state = {
        tweaks: {
            first: 5,
            second: 0,
            avatar: "https://d3iw72m71ie81c.cloudfront.net/male-43.jpg"
        }
    }

    onTweak = (tweaks) => this.setState({ tweaks })

    render() {
        const { tweaks } = this.state
        return (
            <div>
                <Tweaker tweaks={tweaks} onTweak={this.onTweak} />
                <hr />
                <Code tweaks={tweaks} />
                <hr />
                <Medium tweaks={tweaks} />
                <hr />
                <pre>{/*JSON.stringify(tweaks)*/}</pre>
            </div>
        )
    }

}

export default App