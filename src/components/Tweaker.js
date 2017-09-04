import React, { Component } from 'react'

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        padding: '0.5rem 1rem',
    },
    label: {
        fontFamily: 'sans-serif',
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.2)',
        margin: '0.5rem 0'
    },
    field: {
        marginBottom: '0.5rem',
        padding: '0.3rem',
        color: 'rgba(0,0,0,0.7)',
    }
}

class Tweaker extends Component {

    state = {
        tweaks: {}
    }

    componentWillMount() {
        const { tweaks } = this.props;
        this.setState({ tweaks })    
    }

    handleChange = (e) => {
        const { onTweak } = this.props;
        const { tweaks } = this.state
        tweaks[e.target.name] = e.target.value
        this.setState({ tweaks })
        onTweak(tweaks)
    }

    render() {
        const { tweaks } = this.state
        return (
            <div style={styles.wrapper}> 
                <div style={styles.label}>Company name</div>
                <input
                    style={styles.field}
                    type="text"
                    name="name"
                    value={tweaks.name}
                    onChange={this.handleChange}
                />
                <div style={styles.label}>Company symbol</div>
                <input
                    style={{...styles.field, width: '1rem'}}
                    type="text"
                    name="symbol"
                    value={tweaks.symbol}
                    maxLength="1"
                    onChange={this.handleChange}
                />
                <div style={styles.label}>Employee name</div>
                <input
                    style={styles.field}
                    type="text"
                    name="employeename"
                    value={tweaks.employeename}
                    onChange={this.handleChange}
                />
                <div style={styles.label}>Employee image</div>
                <input
                    style={styles.field}
                    type="text"
                    name="avatar"
                    value={tweaks.avatar}
                    onChange={this.handleChange}
                />
                <div style={styles.label}>Primary background color</div>
                <div style={{border: '1px solid rgba(0,0,0,0.1)'}}>
                    <input
                        style={{
                            ...styles.field,
                            marginBottom: 'none',
                            border: 'none',
                            borderLeft: `2em solid ${tweaks.background}`,
                        }}
                        type="text"
                        name="background"
                        value={tweaks.background}
                        onChange={this.handleChange}
                    />
                </div>
                <div style={styles.label}>Monospace font</div>
                <input
                    style={styles.field}
                    type="text"
                    name="monospacefont"
                    value={tweaks.monospacefont}
                    onChange={this.handleChange}
                />
                <div style={styles.label}>Title font</div>
                <input
                    style={styles.field}
                    type="text"
                    name="titlefont"
                    value={tweaks.titlefont}
                    onChange={this.handleChange}
                />
                <div style={styles.label}>Title weight: {tweaks.titleweight}</div>
                <input
                    style={{...styles.field, padding: 0}}
                    type="range"
                    step="100"
                    min="100"
                    max="900"
                    name="titleweight"
                    value={tweaks.titleweight}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

} 

export default Tweaker