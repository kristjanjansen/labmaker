import React from 'react'

const styles = {
    body: {
        padding: '1.5rem',
        fontSize: '0.8rem',
        lineHeight: '1rem',
        fontFamily: 'Monaco, monospace',
        height: '10rem'
    }
}

const Terminal = ({ tweaks }) => {
    return (
        <div style={styles.body}>
{`${tweaks.name}`}

    Something this thing does or says
        </div>
    )
}

export default Terminal