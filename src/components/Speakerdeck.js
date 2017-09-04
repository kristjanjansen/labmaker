
// #191919
// #6a6869
// #262626
// #262626

const styles = {
    wrapper: {
        backgroundColor: '#333',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'center'
    },
    slide: {
        width: '25rem',
        hheight: '17rem',
        backgroundColor: 'papayawhip',
        borderRadius: '7px',
        border: '1px solid #111'
    },
    titlebar: {
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 0.75rem',
        backgroundImage: 'linear-gradient(#5e5b5c, #323232)',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderTop: '1px solid #6a6869',
        borderBottom: '1px solid #111',
        fontSize: '0.7rem',
        textShadow: '1px 1px rgba(0,0,0,0.8)',
        color: '#bbb',
        letterSpacing: '0.03em',
    },
    body: {
        padding: '1.5rem',
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '14rem'
    },
    title: {
        fontSize: '2.5rem',
        color: 'rgba(255,255,255,0.8)',
        lineHeight: '2.75rem'
    }
}

import React from 'react'

import Logo from '../components/Logo'

const Speakerdeck = ({ size, tweaks }) => {
    const slide = {
        ...styles.slide,
        backgroundColor: tweaks.background
    }
    const title = {
        ...styles.title,
        fontFamily: tweaks.titlefont,
        fontWeight: tweaks.titleweight
    }
    const subtitle = {
        fontFamily: tweaks.monospacefont.split(':')[0]
    }
    return (
        <div style={styles.wrapper}>
            <div style={slide}>
                <div style={styles.titlebar}>
                    <div>Speaker Deck</div>
                    <div>Published on Apr 21, 2017</div>
                </div>
                <div style={styles.body}>
                    <div style={title}>So you want to be a data scientist</div>
                    <div style={subtitle}>{tweaks.employeename} {tweaks.symbol}  {tweaks.name}</div>
                </div>
            </div>
        </div>
    )
}

export default Speakerdeck