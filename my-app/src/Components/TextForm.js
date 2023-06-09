import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here')
    return (
        <>
            <div>
                <h1 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" value={text} onChange={handleChange} 
                    style={{ backgroundColor: props.mode === 'dark' ? '#272b53' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                     rows="5"></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>
            <div className="container">
                <h6 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    {text.split(' ').filter((element)=>{return element.length !== 0}).length} Words and {text.length} characters</h6>
            </div>
        </>
    )
}
