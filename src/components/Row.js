import React, { Component } from 'react'

const styles = {
    td: {
        padding: '0.35rem'
    }
}

const Row = ({row, children}) =>
    <tr>
        {React.Children.map(children, child => <td style={styles.td}>{child}</td>)}
    </tr>

export default Row