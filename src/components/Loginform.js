import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';

export default function Loginform (){


         const [username, setusername] = useState("");
         const [password, setpassword] = useState("");
         const [islogedin, setislogedin] = useState(localStorage.getItem("logedin"));

     const login=(e)=>{
         e.preventDefault();
         if(username==="sesha" && password ==="sai"){
             localStorage.setItem("logedin",1);
             setislogedin(1);
         } else {
             alert("login fail");
         }
     };
   
   
    return (
        <div>
                   <h1 className="mt-5" > Login Area</h1>
                 <form onSubmit={login} >
                <br/>
                <input className="form-control-lg m-2 border"
                 type="text" 
                placeholder="username"
                value={username}
                onChange={(e)=>setusername(e.target.value)}
            
                 />

            <br/>  

                <input
                className="form-control-lg m-2 border"
                 type="password" 
                placeholder="enterpasword"
                value={password} 
                onChange={(e)=>setpassword(e.target.value)}
                 />
               <br/>
              <br/>
          <button className="button btn-primary"  type="submit">login</button>

          {/* {(islogedin !== null) && (<Redirect to="/dashboard" />)} */}
          
                      </form>
            
        </div>
    );
}
