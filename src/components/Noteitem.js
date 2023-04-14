import React,{useContext} from "react";
import Img from "./img/22.png"
import {Image} from "react-bootstrap"
import Navbar from "./Navbar";
import NoteContext from "../context/NoteContext";
import Noteitem from "./Noteitem"

const Item =()=>{
    const context = useContext(NoteContext)
    const {datas,state} = context
console.log("=data========",datas);
    return (
        <>
        {/* <Navbar title="TextUtils" /> */}
        <div className="card mx-xl-5 container" style={{width:"18rem"}}>
        <Image src={Img} className="card-img-top"  style={{width:"100%"}} alt="..." />
            <div className="card-body">
                <Image src="{datas[0].images[0]}" style={{width:"100%"}} alt="image"></Image>
                <p className="card-img">{datas[0]?.images[0]}</p>
                <h5 className="card-title">{datas[0]?.email}</h5>
                <p className="card-text">{datas[0]?.passwordHash}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    )
}

export default Item