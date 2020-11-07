import React from 'react'
import './input.css'


function Input({ captureInput, inputRef }) {

    return <input ref={inputRef} onKeyUp={(e) => { captureInput(e) }} placeholder='Search a country' />
}

export default Input