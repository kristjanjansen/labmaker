import React from 'react'

const Avatar = ({ size, tweaks }) => {
    const avatar = {
        borderRadius: '500px',
        width: `${size}rem`,
        height: `${size}rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tweaks.background,
        color: 'white',
        fontSize: `${size/1.5}rem`,
        lineHeight: 0
    }
    return <div style={avatar}>{tweaks.symbol}</div>
}

Avatar.defaultProps = {
    size: 3,
}

export default Avatar