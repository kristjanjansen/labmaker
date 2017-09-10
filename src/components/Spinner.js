import React, { Component } from 'react'
import { dots2 as spinner } from 'cli-spinners'

import { colors } from '../styles'

const styles = {
    spinner: {
        color: colors.green
    }
}

class Spinner extends Component {

    state = {
        intervalId: null,
        count: 0
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState({
                count: this.state.count > spinner.frames.length - 2 ? 0 : this.state.count + 1
            })
        }, spinner.interval)
        this.setState({ intervalId })
    }

    componentWillUnmount() {
       clearInterval(this.state.intervalId);
    }

    render() {
        const { status } = this.props
        const { count } = this.state
        return (
            <div style={styles.spinner}>
                {status === 'running' && spinner.frames[count]}
            </div>
        )
    }

} 

export default Spinner
