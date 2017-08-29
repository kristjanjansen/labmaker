import React, { Component } from 'react'

import Adjuster from './components/Adjuster'
import SampleMedium from './components/SampleMedium'
import SampleCode from './components/SampleCode'

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
                <SampleCode values={values} />
                <SampleMedium values={values} />
                <pre>{JSON.stringify(values)}</pre>
            </div>
        )
    }

}

export default App