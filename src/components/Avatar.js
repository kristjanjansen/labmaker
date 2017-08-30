import React from 'react'

const Avatar = ({ size, image }) => {
    const avatar = {
        borderRadius: '500px',
        width: `${size}rem`,
        height: `${size}rem`,
        backgroundSize: 'cover',
        backgroundImage: `url(${image})` 
    }
    return <div style={avatar}></div>
}

Avatar.defaultProps = {
    size: 3,
    image: ''
}

export default Avatar