import React from 'react'

export default function About() {
    const style1={
        backgroundColor:"skyblue",
        borderRadius:"10px",
        width:"80%",
        margin:" 100px auto",
        boxShadow:"10px 20px 30px black",
    };
    return (
        <div style={style1}>

            <h1>About</h1>
            <p>This is the about text</p>
            
        </div>
    )
}
