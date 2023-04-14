import React,{useContext} from "react";
import NoteContext from "../context/NoteContext";
import Noteitem from "./Noteitem"
import Navbar from "./Navbar";

const Data1 =()=>{
    const context = useContext(NoteContext)
    const {datas,state} = context

    return (
        <>
        <Navbar title="TextUtils"/>
        <div className="container d-flex my-4">
            <h2>You Notes</h2>
            {datas?.map((data)=>{
                

                return <Noteitem data={data}/>
            })}
            </div>
           </> 
    )
}

export default Data1