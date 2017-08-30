import React from 'react'

const Avatar = ({ size, image }) => {
    const avatar = {
        borderRadius: '500px',
        width: size,
        height: size,
        backgroundSize: 'cover',
        backgroundImage: `url(${image})` 
    }
    return <div style={avatar}></div>
}

Avatar.defaultProps = {
    size: '2.2rem',
    image: ''
}

export default Avatar