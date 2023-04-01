import React,{ useState } from "react"
import NoteContext from "./NoteContext"

const NoteState =(props)=>{
    const data =[
        {
        "_id": "641807596d0822ff330995b6",
        "name": [
          {
            "fname": "agadd",
            "lname": "asjdhjhdf",
            "doc": "sdfsldf"
          }
        ],
        "email": "trgbhnuhn",
        "passwordHash": "$2a$10$ZaE1f0rewXdzVL2gfn94He/QqUW0Y5U3yPYgHILDPHMea/mFgQ6Qy",
        "images": [
          "http://localhost:3003/image_1679296345774.png",
          "http://localhost:3003/image_1679296345776.png"
        ],
        "__v": 0
      },
      {
        "_id": "641807606d0822ff330995b8",
        "name": [
          {
            "fname": "agadd",
            "lname": "asjdhjhdf",
            "doc": "sdfsldf"
          }
        ],
        "email": "trgbhnuhn",
        "passwordHash": "$2a$10$NRCmTIizE5Ylfl/ra9cV0.j3qNQp4U60yKeVmheYAHfba5zOPqP8e",
        "images": [
          "http://localhost:3003/image_1679296352095.png",
          "http://localhost:3003/image_1679296352096.png"
        ],
        "__v": 0
        }
        ]

    const [datas,state]=useState(data)
    
 return (
    <NoteContext.Provider value={{datas,state}}>
        {props.children}
    </NoteContext.Provider>
 )

}
export default NoteState

// import { useState } from "react"
// import NoteContext from "./NoteContext"

// const NoteState =(props)=>{
//     const s={
//         "Name":"xyz",
//         "Pwd":"abc"
//     }
//     const [state,setState]=useState(s)
//     const update=()=>{
//         setTimeout(()=>{
//             setState({
//                 "Name":"React",
//                 "Pwd":"ikmbng"
//             })
            
//         },3000)
//     }
//  return (
//     <NoteContext.Provider value={{state,update}}>
//         {props.children}
//     </NoteContext.Provider>
//  )
// }

// export default NoteState