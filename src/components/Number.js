import React from 'react'

import { colors } from '../styles'

const styles = {
    number: {
    }
}

const Number = ({number,color}) =>
    <div style={styles.number}>
        {[].map.call(String(number), (char, index) => {
            return <span key={index} style={{color: colors[color], opacity: 1.5 / index}}>
                {char}
            </span>
        })}
    </div>

Number.defaultProps = {
    number: null,
    color: 'white'
}

export default Number
