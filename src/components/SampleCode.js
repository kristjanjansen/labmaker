import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid as style } from 'react-syntax-highlighter/dist/styles';

const styles = {
    code: {
        fontFamily: 'Roboto Mono, sans-serif',
        padding: '1.5rem',
        fontSize: '0.85rem',
        margin: 0
    }
}

const SampleCode = ({ tweaks }) =>
    <SyntaxHighlighter
        language="javascript"
        style={style}
        customStyle={styles.code}
        CodeTag="div"
    >
{`import React from 'react'

const SampleCode = ({ values }) =>
    <div>
        {values.first}
    </div>
`}            
    </SyntaxHighlighter>

export default SampleCode