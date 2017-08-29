import React from 'react'

const styles = {
    wrapper: {
        background: 'white',
        fontFamily: '"Merriweather Sans",sans-serif',
        lineHeight: '2em'
    },
    avatar: {
        borderRadius: '100px',
        width: '2rem',
        height: '2rem',
        backgroundSize: 'cover'
    }
}

const MediumSample = ({ values }) => {
    const wrapper = {
        ...styles.wrapper,
        padding: values.first + 'em'
    }
    const avatar = {
        ...styles.avatar,
        backgroundImage: `url(${values.avatar})` 
    }
    return (
        <div style={wrapper}>
            <div style={avatar}></div>
            Hello World I like to be here { values.first }
        </div>
    )
}

export default MediumSample