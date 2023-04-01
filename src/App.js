// import {Routes,Route,BrowserRouter} from 'react-router-dom'
// import {Switch} from "react-router"
import React from 'react'
import NoteState from './context/NoteState'
import About from './components/About'
import NoteContext from './context/NoteContext'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Accordion from "./components/Accordion"

const App =()=>{
  // "use strict";
 return(
  <>
  <div>
    <BrowserRouter>
    <NoteState>
      <Routes>
      {/* <Switch> */}
        <Route path="/Home" element={<Home />}/>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/About" element={<About heading="enter"/>}/>
        <Route path="NoteState" element={<NoteState/>}/>
        <Route path="NoteContext" element={<NoteContext/>}/>
        <Route path="Accordion" element={<Accordion/>}/>
        {/* </Switch> */}
    /* <Route exact path="/">
      <Home />
        </Route>

          <Route>

          </Route>*/
      </Routes> 
    </NoteState>
    </BrowserRouter>
  </div>
  </>
 )
}

export default App 
