import React from 'react'

 function MemoTest(props) {
    console.log('render memo component')
    return (
        <div>
            <p>hello world</p>
            <h1>{props.name}</h1>
        </div>
    )
}
export default MemoTest;