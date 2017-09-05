import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid as style } from 'react-syntax-highlighter/dist/styles';

const styles = {
    code: {
        padding: '1.5rem',
        fontSize: '0.85rem',
        margin: 0
    }
}

const Code = ({ tweaks, rounded }) => {

    const customStyle = {
        ...styles.code,
        borderRadius: rounded ? '5px' : '',
        background: tweaks.background,
        fontFamily: tweaks.monospacefont,
    }

    return (
    <SyntaxHighlighter
        language="javascript"
        style={style}
        customStyle={customStyle}
        CodeTag="div"
    >
{`def inference(images):
    with tf.variable_scope('conv1') as scope:
        kernel = _variable_with_weight_decay('weights',
             shape=[5, 5, 3, 64],
             stddev=5e-2,
             wd=0.0)
`}            
    </SyntaxHighlighter>
    )
}

export default Code