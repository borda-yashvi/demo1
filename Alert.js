import React,{useState} from "react";
import { CloseButton } from "react-bootstrap";

const Alert = (props)=>{
    console.log("=props",props);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    return(
        props.alert &&
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{props.alert.type}</strong>  : {props.alert.msg}
            <button type="button" className="close" data-bs-dismiss="alert">&times;</button> 
            </div>
    )
}

export default Alert
