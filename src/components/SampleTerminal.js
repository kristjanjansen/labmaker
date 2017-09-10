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
        color: '#aaa',
        whiteSpace: 'pre'
    },
    strong: {
        color: '#fafafa'
    }
}

function convertToInline(style) {
    var inline = ''
    for (var key in style) {
        inline += `${key}: ${style[key]};`
    }
    return inline
}

function formatMarkdown(text) {
    let renderer = new marked.Renderer();
    renderer.strong = text => {
        return `<span style="${convertToInline(styles.strong)}">${text}</span>`
    }
    return marked(text, { renderer, breaks: true})
}

   
const SampleTerminal = ({ tweaks }) => {
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

export default SampleTerminal