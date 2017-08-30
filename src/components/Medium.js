import React from 'react'

const styles = {
    wrapper: {
        background: 'white',
        fontFamily: 'sans-serif',
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
        opacity: 0.8,
        margin: '2rem 0 1rem 0'
    },
    body: {
        fontFamily: '"PT Serif", serif',
        fontSize: '1.2rem',
        opacity: 0.8,
        lineHeight: '2rem'
    }
}

import Code from '../components/Code'
import Avatar from '../components/Avatar'

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
                <Avatar tweaks={tweaks} />
                <div>
                    <div style={styles.name}>Lee Chow</div>
                    <div style={styles.date}>Sep 26, 2016 • 15 min read</div>
                </div>
            </div>
            <Code />
            <div style={styles.title}>
                So you want to be a data scientist
            </div>
            <div style={styles.body}>
                You may have heard about machine learning from interesting applications like <a href="">spam filtering</a>, optical character recognition, and computer vision.
                Getting started with machine learning is long process that involves going through several resources. There are books for newbies, academic papers, guided exercises, and standalone projects. It’s easy to lose track of what you need to learn among all these options.
            </div>
        </div>
    )
}

export default Medium