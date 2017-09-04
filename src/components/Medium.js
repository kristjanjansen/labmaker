import React from 'react'
import WebfontLoader from '@dr-kobros/react-webfont-loader';

const styles = {
    wrapper: {
        background: 'white',
        fontFamily: 'sans-serif',
        padding: '4em'
    },
    logo: {
        marginBottom: '3rem'
    },
    profile: {
        display: 'flex',
        lineHeight: '1.1rem',
        marginBottom: '2rem'
    },
    about: {
        marginLeft: '0.5rem'
    },
    link: {
        color: '#1c9963',
        fontSize: '0.75rem',
        opacity: 0.75
    },
    text: {
        opacity: 0.3,
        fontSize: '0.75rem'
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

const fonts = { google: { families: [
    'PT Sans',
    'Merriweather Sans:700'
]}}

const Medium = ({ tweaks }) =>
    <WebfontLoader config={fonts}>
        <div style={styles.wrapper}>
            <div style={styles.logo}>
                <img src="/svg/medium.svg" />
            </div>
            <div style={styles.profile}>
                <Avatar tweaks={tweaks} image={tweaks.avatar} size="2.2" />
                <div style={styles.about}>
                    <div>
                        <span style={styles.link}>{tweaks.employeename}</span> 
                        <span style={styles.text}>in</span> 
                        <span style={styles.link}>{tweaks.name}</span> 
                    </div>
                    <div style={styles.text}>Sep 26, 2016 • 15 min read</div>
                </div>
            </div>
            <Code tweaks={tweaks} />
            <div contentEditable style={styles.title}>
                So you want to be a data scientist
            </div>
            <div contentEditable style={styles.body}>
                You may have heard about machine learning from interesting applications like <a href="">spam filtering</a>, optical character recognition, and computer vision.
                Getting started with machine learning is long process that involves going through several resources. There are books for newbies, academic papers, guided exercises, and standalone projects. It’s easy to lose track of what you need to learn among all these options.
            </div>
        </div>
    </WebfontLoader>

export default Medium