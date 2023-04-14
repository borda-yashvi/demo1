import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Img from "./img/9.ico"
import {Link} from "react-router-dom"
import { Image} from "react-bootstrap"
import React,{useState} from 'react';
import "./Navbar.css"
import Alert from "./Alert"
import { useLocation } from 'react-router-dom';
import  { Collapse, Popover, Toast, Tooltip, Modal, Dropdown ,dataDismiss} from  "bootstrap"
// import {useAuth0} from "@auth0/auth0-react"

const Navbar = (props)=>{
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

const [alertStatus,setAlertStatus] = useState(false)
// const {loginWithRedirect,logout,isAuthendicated,user}=useAuth0

const Navigate=useNavigate  
  const About=()=>{
    Navigate("/About")
  }
  const Home1=()=>{
    Navigate("/Home1")
  }
  const Accordion=()=>{
    Navigate("/Accordion")
  }
  const Noteitem=()=>{
    Navigate("/Noteitem")
  }
  const Data1=()=>{
    Navigate("/Data1")
  }
  const Contact=()=>{
    Navigate("/Contact")
  }
  // const [mod,mode] = useState('light')
  // const toggleMode =()=>{
  //   if(mod==="light"){
  //         mode('dark')
  //         document.body.style.backgroundColor='grey'
  //         document.body.style.color='white'
  //   }
  //   else{
  //         mode('light')
  //         document.body.style.backgroundColor='white'
  //         document.body.style.color='grey'
  //   }
  // }

  const [mod,mode] = useState('light')
  const [alert,setAlerts] = useState(null)
  
  const showAlert =(message,type)=>{
    setAlerts({
      msg:message,
      type:type
    })
  }
  const per =()=>{
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
 }

  const toggleMode =(cls)=>{
    per()
    console.log(cls);
    document.body.classList.add('bg-'+cls)
   
    if(mod==="light"){
          mode('dark')
          document.body.style.backgroundColor='grey'
          document.body.style.color='white'
          showAlert("dark mod has been enable","dark")
    }
    else if(mod==="dark"){
          mode('light')
          document.body.style.backgroundColor='white'
          document.body.style.color='black'
          showAlert("light mod has been enable","light")
   }
  }



  return(
      <>
       <nav className="navbar navbar-expand-lg" >
           <Image src={Img} id="icon"/>
           <Link className="navbar-brand" href="#">Navbar</Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
          
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
             <ul className="navbar-nav ml-auto">
               <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/Home1"?"active":" "}`} href="Home1" onClick={()=>Home1()}>Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/About"?"active":" "}`} href="About" onClick={()=>About()}>About Us</a>
               </li>
               <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/Data1"?"active":" "}`} href="Data1" onClick={()=>Data1()}>Data</a>
               </li>
               {/* <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/Contact"?"active":" "}`} href="Contact" onClick={()=>Contact()}>Log Out</a>
               </li> */}
               <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle " href="/dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <span className="sr-only">Toggle Dropdown</span>Dropdown
                 </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <a className="dropdown-item" href="#">Action</a>
                   <a className="dropdown-item" href="#">Another action</a>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item" href="#">Something else here</a>
                 </div>
               </li>
               <li className="nav-item active">
                 <a className="nav-link"  href="/Accordion" onClick={()=>Accordion()}>Accordion</a>
               </li>
               <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/Noteitem"?"active":" "}`} href="Noteitem" onClick={()=>Noteitem()}>Noteitem </a>
               </li>
               {/* <li className="nav-item active">
                 <button className={`nav-link ${location.pathname==="/Contact"?"active":" "} btn btn-outline-success`} href="Contact" onClick={()=>
                 {
                 localStorage.removeItem('token')
                 Contact()
                 }}>log Out</button>
               </li> */}
               <li><a>name : {localStorage.getItem('user')}</a></li>
               <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/"?"active":" "}`} href="/" onClick={()=>{
                  localStorage.removeItem('token')
                  localStorage.removeItem('user')
                  localStorage.removeItem('localStorage')
                  Contact()}}>Log Out</a>
               </li>
             </ul>
             <form className="form-inline my-2 my-lg-0 d-flex">
               <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
               <button className="btn btn-outline-success" type="submit">Search</button>
             </form>

             {/* {isAuthendicated && <h2>{user.name}</h2>} */}

             <div className='d-flex'>
                <div className='bg-primary rounded mx-2' onClick={()=>{
                toggleMode('dark') 
                setAlertStatus(true)}} style={{height:'30px',width:'30px'}}></div>
                <div className='bg-success rounded mx-2' onClick={()=>{
                toggleMode('success')
                setAlertStatus(true)}} style={{height:'30px',width:'30px'}}></div>
                <div className='bg-warning rounded mx-2' onClick={()=>{
                toggleMode('warning')
                setAlertStatus(true)
                }} style={{height:'30px',width:'30px'}}></div>
             </div>

             <div className={`form-check form-switch ${mod==='light'?'dark':'light'}`}>
             <input className="form-check-input me-5" onClick={() => {
                toggleMode()
                setAlertStatus(true)
                }} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable drak mode</label>
            </div>

            
            
           </div>
          
         </nav>
         {
          alertStatus && 
          <Alert alert={alert}></Alert>
         }
         </>
         )
  }

export default Navbar