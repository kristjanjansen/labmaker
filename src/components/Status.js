import React from 'react'

import { colors } from '../styles'

const styles = {
    running: {
        color: colors.green
    },
    done: {
        color: colors.gray
    }
}

const Status = ({status}) =>
    <div style={styles[status]}>
        {status}
    </div>

export default Status
