import React, {useState} from 'react'




export default function TextFrom(props) {
  const [text, setText] = useState('');

  //text = "Changing text"; // Wrong way to change state variable
  //setText("Changing text");  // Correct way to change state variable
  // const [darkStyle, setDarkStyle] = useState({
  //   color: 'black',
  //   background: 'white',
  // });
  // const [btnText, setBtnText] = useState("Enable Dark Mode");


  // const toggleStyle = () => {
  //   if((darkStyle.color) === 'white') {
  //       setDarkStyle({
  //           color: 'black',
  //           background: 'white',
  //       })
  //       setBtnText("Enable Dark Mode")
  //   } else {
  //       setDarkStyle({
  //           color: 'white',
  //           background: 'black',
  //       })
  //       setBtnText("Disable Dark Mode")
  //   }
    
  // }

  const handleUpClick = () => {
    // console.log("Button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    
  }
  
  const handleLowClick = () => {
    // console.log("Button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  
  const handleCopy = () => {
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value)
    props.showAlert("Text Copied to Clipboard", "success");
  }

  const handleClrClick = () => {
    // console.log("Button clicked");
    setText("");
    props.showAlert("Cleared Text", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  return (
    <>
      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>   
        <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}}  id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-2" onClick={handleUpClick}>Conver to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-2" onClick={handleLowClick}>Conver to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-2" onClick={handleClrClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-2" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          {/* <button type="button" onClick={toggleStyle} className="btn btn-outline-success mx-2 my-4">{btnText}</button>         */}
      </div>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length !== 0;}).length } words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").filter((element) => {return element.length !== 0;}).length)} Mintues to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}


