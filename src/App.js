import React, { Component } from 'react'

import Tweaker from './components/Tweaker'
import SampleMedium from './components/SampleMedium'
import SampleCode from './components/SampleCode'

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
                <SampleCode tweaks={tweaks} />
                <hr />
                <SampleMedium tweaks={tweaks} />
                <hr />
                <pre>{JSON.stringify(tweaks)}</pre>
            </div>
        )
    }

}

export default App