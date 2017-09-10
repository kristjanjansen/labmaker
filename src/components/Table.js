import React from 'react'

const styles = {
    table: {
        borderCollapse: 'collapse'
    }
}

const Table = ({ children }) =>
    <table style={styles.table}>
        <tbody>
            { children }
        </tbody>
    </table>

export default Table