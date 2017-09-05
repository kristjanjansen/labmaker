import React from 'react'

const styles = {
    wrapper: {
        background: '#e6ecf0',
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        width: '35rem',
        background: 'white',
        fontFamily: 'sans-serif',
        padding: '1em'
    },
    profile: {
        display: 'flex',
        lineHeight: '1.1rem',
        marginBottom: '0.1rem'
    },
    avatar: {
        marginRight: '0.75rem'
    },
    name: {
        marginBottom: '0.5rem',
        fontSize: '0.85rem',
    },
    username: {
        fontWeight: 'bold',
    },
    handle: {
        opacity: 0.6,
    },
    date: {
        opacity: 0.6,
    },
    body: {
        fontFamily: 'sans-serif',
        fontSize: '0.9rem',
        opacity: 0.8,
        lineHeight: '1.3rem',
        marginBottom: '0.75rem'
    }
}

import Code from '../components/Code'
import Logo from '../components/Logo'

const Twitter = ({ tweaks }) =>
    <div style={styles.wrapper}>
        <div style={styles.content}>
            <div style={styles.profile}>
                <div style={styles.avatar}>
                    <Logo tweaks={tweaks} />
                </div>
                <div>
                    <div style={styles.name}>
                        <span style={styles.username}>{tweaks.name}</span> 
                        <span style={styles.handle}>@{tweaks.name}</span> 
                        <span style={styles.date}>• Sep 26, 2016</span>
                    </div>
                    <div style={styles.body}>
                        You may have heard about machine learning from interesting applications like spam filtering, optical character recognition.
                        {tweaks.symbol} 
                    </div>
                    <Code tweaks={tweaks} rounded="true" />
                </div>
            </div>
            
        </div>
    </div>

export default Twitter