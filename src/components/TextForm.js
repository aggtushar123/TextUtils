import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log('Onchange was clicked')
        setText(event.target.value)
    }

  
    const [text, setText] = useState('')

    return (
    <div>
        
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value = {text} onChange= {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
    </div>
  )
}