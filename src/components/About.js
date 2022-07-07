import React, { useState } from 'react'

export default function About(props) {
    
    // const [darkStyle, setDarkStyle] = useState({
    //     color: 'black',
    //     background: 'white',
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if((darkStyle.color) === 'white') {
    //         setDarkStyle({
    //             color: 'black',
    //             background: 'white',
    //         })
    //         setBtnText("Enable Dark Mode")
    //     } else {
    //         setDarkStyle({
    //             color: 'white',
    //             background: 'black',
    //         })
    //         setBtnText("Disable Dark Mode")
    //     }
        
    // }

    // let darkStyle = {
    //     color: 'white',
    //     background: 'black',
    // };

    // let lightStyle = {
    //     color: 'black',
    //     background: 'white',
    // }


    return (
    <div className="containers" style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}}>
        <div className="accordion" id="accordionExample">
        <h1 className="my-3">About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About StringUtils
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}}>
                    <strong>StringUtils</strong> is a Utility that helps to modify and manipulate the text/strings according to the user's reqiurement, it is purely build with the help of ReactJS. It could be a very useful utility for those who works with the text a lot like students, authors. It could also be a great help to anyone for everyday easy but time consuming tasks.
                </div>
                </div>
            </div>
        </div>
        {/* <div>
            <button type="button" onClick={toggleStyle} className="btn btn-outline-dark my-4" style={darkStyle}>{btnText}</button>
        </div> */}
    </div>
  )
}
