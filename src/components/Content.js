import React from 'react'

export default function Content(props) {
    return (
        <div>
            {props.children}
            <h1 style={{margin:"200px 10%",
            backgroundColor:"aqua" ,
            borderRadius:"20px",
            boxShadow:"10px 20px 30px black",
            padding:"10px"}}>
          welcome to sesha react.js routing practice content         
             </h1>
            
        </div>
    )
}
