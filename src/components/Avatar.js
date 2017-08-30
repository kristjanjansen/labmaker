import React from 'react'

const Avatar = ({ size, tweaks }) => {
    const avatar = {
        borderRadius: '500px',
        width: size,
        height: size,
        backgroundSize: 'cover',
        marginRight: '0.5rem',
        backgroundImage: `url(${tweaks.avatar})` 
    }
    return <div style={avatar}></div>
}

Avatar.defaultProps = {
    size: '2.2rem'
}

export default Avatar