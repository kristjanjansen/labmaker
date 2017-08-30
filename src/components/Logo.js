import React from 'react'

const Avatar = ({ size, tweaks }) => {
    const avatar = {
        borderRadius: '500px',
        width: size,
        height: size,
    }
    return <div style={avatar}>{tweaks.symbol}</div>
}

Avatar.defaultProps = {
    size: '2.2rem',
}

export default Avatar