import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log('Onchange was clicked')
        setText(event.target.value)
    }

    const handleClearText = () =>{
        let newText = ' '
        setText(newText)
    }

    const handleCopyText = () =>{
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
  
    const [text, setText] = useState('')

    return (
        <>
        <div className='container' style= {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='light'?'light':'grey', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText} >Clear Text</button>
        
        </div>
        
        <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview"}</p>

        </div>
        </>
    
  )
}
