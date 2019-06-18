import React from 'react'
import marked from 'marked'

const styles = {
    body: {
        padding: '1.5rem',
        fontSize: '0.8rem',
        lineHeight: '1rem',
        fontFamily: 'Monaco, monospace',
        height: '10rem',
        background: 'rgba(0,0,0,0.9)',
        color: '#ddd',
        whiteSpace: 'pre'
    },
    em: {
        color: 'rgb(58,187,49)'
    }
}

function formatMarkdown(text) {
    let renderer = new marked.Renderer();
    renderer.strong = text => {
        return `<span style="color: rgb(58,187,49)">${text}</span>`
    }
    return marked(text, { renderer, breaks: true})
}

   
const Terminal = ({ tweaks }) => {
    return (
        <div
            style={styles.body}
            dangerouslySetInnerHTML={{__html: formatMarkdown(`
**${tweaks.name}**
    Hello
            `)}}>
        </div>
    )
}

export default Terminal