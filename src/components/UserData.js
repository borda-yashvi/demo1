import React, { Component } from 'react'

const UserData=({user})=>{
     return (
      <>
         { 
         user.map((users)=>{
           const {name,contact,type,address}=users
           return(
             <tr>
            <td>{name}</td>
            <td>{contact}</td>
             <td>{type}</td>
             <td>{address}</td>
           </tr>
           )
           })
          }
      </>
    )
  
}
   

export default  UserData