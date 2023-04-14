// import React,{useState} from "react"
// import Navbar from "./Navbar"
// import {Alert} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';  

// import NoteContext from "../context/NoteContext"
// import Data from "./data"

// const About = () =>{
    
//     return(
//         <div className="container justify-items-center">
//        <h1>About contain </h1>
//        <form>
//         <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1"/>
//         </div>
//         <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//             <label className="form-check-label" for="exampleCheck1">Check me out</label>
//         </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//             <h1>add note</h1>
//         <Data></Data>
//         </div>
//     )
// }

// export default About 
/* 
// const About = () =>{
//     const a = useContext(NoteContext)
//     return(
//        <h1>
//         About contain {a.Pwd}
//        </h1>
//     )
// } */

import React,{useState,useEffect} from "react"
import Navbar from "./Navbar"
import Alert from "./Alert"
import 'bootstrap/dist/css/bootstrap.min.css';  
import  { Collapse, Popover, Toast, Tooltip, Modal, Dropdown ,dataDismiss} from  "bootstrap"

const State=(props)=>{
    const [text,setText]=useState('enter text')
    const [alert,setAlerts] = useState(null)
    const [alertstatus,setAlertstatus] = useState(false)

    const showAlert =(message,type)=>{
        setAlerts({
          msg:message,
          type:type
        })
      }

      useEffect(() => {
        const timeId = setTimeout(() => {
            showAlert(false)
        }, 2000)
        return () => {
            clearTimeout(timeId)
          }
        }, []);

   const up=()=>{
        console.log("upper was clicked"+text);
        setText(text.toUpperCase())
    }
    const lw=()=>{
        console.log("upper was clicked"+text);
        setText(text.toLowerCase())
    }
    const cl=()=>{
        console.log("upper was clicked"+text);
        setText("")
    }
    const cp=()=>{
        console.log("copy text");
        // text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text)
        showAlert("copiy to clipboard!","success")
    }
    const es=()=>{
        let nt = text.split(/[ ]+/)
        console.log(nt);
        const newText={text}
        setText(newText.join(" "))
    }
    const on=(event)=>{ 
        console.log("upper was clicked"+text);
        setText(event.target.value)
    }

  

    return(<>
    <Navbar title="TextUtils"/>  {
        alertstatus&&
        <Alert alert={alert}/>
    }
    <div className="container" >
        <h1>{props.heading}</h1>
        <div>
             <textarea className="from-control" value={text} onChange={on} style={{backgroundColor:props.mod==='dark'?'blue':'pink'}} id="Box" cols="10" rows="15"></textarea>
        </div>
        {/* <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div> */}
   <br/><button disabled={text.length==0} className="btn btn-danger" onClick={up}>conver to upper case</button>
        <button disabled={text.length==0} className="btn btn-warning ms-3" onClick={()=>{lw()}}> conver to lower case</button>
        <button disabled={text.length==0} className="btn btn-success ms-3" onClick={cl}> cls text</button>
        <button disabled={text.length==0} className="btn btn-primary ms-3" onClick={()=>{
            cp()
            setAlertstatus(true)
        }}>copy text</button>
        <button disabled={text.length==0} className="btn btn-primary ms-3" onClick={es}>extra space</button>
    </div>
    <div className="container my-lg-3">
        <h1>text character {text.split(/\s+/).length} sentense {text.split(/\s+/).filter((e)=>{return e.length!==0}).length}</h1>
        <h1>text read {0.008*text.split(" ").length}</h1>
        <h1>text read in local{0.008*text.split(" ").filter((element)=>[
            element.length!=0
        ])}</h1>
        <h1>Preview</h1>
        <p>{text.length>0?text:"blank"}</p>
    </div>
  
    </>
    )
}
 
export default State