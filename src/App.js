import React, { Component } from 'react'

import Adjuster from './components/Adjuster'
import MediumSample from './components/MediumSample'

class App extends Component {

    state = {
        values: {
            first: 5,
            second: 0,
            avatar: "https://d3iw72m71ie81c.cloudfront.net/male-43.jpg"
        }
    }

    onAdjust = (values) => this.setState({ values })

    render() {
        const { values } = this.state
        return (
            <div>
                <Adjuster values={values} onAdjust={this.onAdjust} />
                <MediumSample values={values} />
                <pre>{JSON.stringify(values)}</pre>
            </div>
        )
    }

}

export default App