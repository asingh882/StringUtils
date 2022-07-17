import React, { useState } from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        background: props.mode === 'dark' ? '#353535' : 'white',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'white' : 'black', 
    }
    
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
    // <div className="containers" >
    //     <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>About Us</h1>
    //     <div className="accordion" id="accordionExample">
    //         <div className="accordion-item" >
    //             <h2 className="accordion-header" id="headingOne">
    //             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
    //                 <strong>Analzye your text</strong>
    //             </button>
    //             </h2>
    //             <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={myStyle}>
    //                 <strong>StringUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
    //             </div> 
    //             </div>
    //         </div>


    //         <div className="accordion-item" style={myStyle}>
    //             <h2 className="accordion-header" id="headingTwo">
    //             <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    //                <strong> Free to use</strong>
    //             </button>
    //             </h2>
    //             <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={myStyle}>
    //                 StringUtils is a free character counter tool that provides instant character count & word count statistics for a given text. StringUtils reports the number of words and characters Thus it is suitable for writing text with word/character limit.
    //             </div>
    //             </div>
    //         </div>


    //         <div className="accordion-item" >
    //             <h2 className="accordion-header" id="headingThree" >
    //             <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    //                 <strong>Browser Compatible</strong>
    //             </button>
    //             </h2>
    //             <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={myStyle}>
    //                 This word counter software works in web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     {/* <div>
    //         <button type="button" onClick={toggleStyle} className="btn btn-outline-dark my-4" style={darkStyle}>{btnText}</button>
    //     </div> */}
    // </div>

    <div className="container" >
        <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>About Us</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <strong>Analzye your text</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                <strong>StringUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong> Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                StringUtils is a free character counter tool that provides instant character count & word count statistics for a given text. StringUtils reports the number of words and characters Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    This word counter software works in web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>

    </div>
    
  )
}
