import React, { Component } from 'react'

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '10rem'
    },
    field: {
        marginBottom: '0.5rem',
        padding: '0.5rem'
    }
}

class Adjuster extends Component {

    state = {
        values: {}
    }

    componentWillMount() {
        const { values } = this.props;
        this.setState({ values })    
    }

    handleChange = (e) => {
        const { onAdjust } = this.props;
        const { values } = this.state
        values[e.target.name] = e.target.value
        this.setState({ values })
        onAdjust(values)
    }

    render() {
        const { values } = this.state
        return (
            <div style={styles.wrapper}> 
                <input
                    style={styles.field}
                    type="range"
                    name="first"
                    value={values.first}
                    onChange={this.handleChange}
                />
                <input
                    style={styles.field}
                    type="range"
                    name="second"
                    value={values.second}
                    onChange={this.handleChange}
                />
                <input
                    style={{...styles.field}}
                    type="text"
                    name="avatar"
                    value={values.avatar}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

} 

export default Adjuster