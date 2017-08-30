import React from 'react'

const styles = {
    wrapper: {
        background: 'white',
        fontFamily: 'sans-serif',
        lineHeight: '2em'
    },
    logo: {
        marginBottom: '3rem'
    },
    profile: {
        display: 'flex',
        lineHeight: '1.1rem',
        marginBottom: '2rem'
    },
    name: {
        color: '#1c9963',
        fontSize: '0.75rem',
        opacity: 0.75
    },
    date: {
        opacity: 0.3,
        fontSize: '0.75rem'
    },
    avatar: {
        borderRadius: '100px',
        width: '2.2rem',
        height: '2.2rem',
        backgroundSize: 'cover',
        marginRight: '0.5rem'
    },
    title: {
        fontFamily: 'Merriweather Sans, sans-serif',
        fontWeight: 700,
        fontSize: '1.6rem',
        opacity: 0.8
    }
}

const Medium = ({ tweaks }) => {
    const wrapper = {
        ...styles.wrapper,
        padding: tweaks.first + 'em'
    }
    const avatar = {
        ...styles.avatar,
        backgroundImage: `url(${tweaks.avatar})` 
    }
    return (
        <div style={wrapper}>
            <div style={styles.logo}>
                <img src="/svg/medium.svg" />
            </div>
            <div style={styles.profile}>
                <div style={avatar}></div>
                <div>
                    <div style={styles.name}>Lee Chow</div>
                    <div style={styles.date}>Sep 26, 2016 • 15 min read</div>
                </div>
            </div>
            <div style={styles.title}>
                So you want to be a data scientist
            </div>
        </div>
    )
}

export default Medium