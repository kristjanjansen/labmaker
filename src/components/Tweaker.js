import React, { Component } from 'react'

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '10rem',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        padding: '0.5rem 1rem',
        borderLeft: '1px solid rgba(0,0,0,0.1)'
    },
    field: {
        marginBottom: '0.5rem',
        padding: '0.5rem'
    }
}

class Adjuster extends Component {

    state = {
        tweaks: {}
    }

    componentWillMount() {
        const { tweaks } = this.props;
        this.setState({ tweaks })    
    }

    handleChange = (e) => {
        const { onTweak } = this.props;
        const { tweak } = this.state
        tweaks[e.target.name] = e.target.tweak
        this.setState({ tweaks })
        onTweak(tweaks)
    }

    render() {
        const { tweaks } = this.state
        return (
            <div style={styles.wrapper}> 
                <input
                    style={styles.field}
                    type="range"
                    name="first"
                    value={tweaks.first}
                    onChange={this.handleChange}
                />
                <input
                    style={styles.field}
                    type="range"
                    name="second"
                    value={tweaks.second}
                    onChange={this.handleChange}
                />
                <input
                    style={{...styles.field}}
                    type="text"
                    name="avatar"
                    value={tweaks.avatar}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

} 

export default Adjuster