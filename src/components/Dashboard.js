import React from 'react'
import { Redirect, useHistory, useLocation, useParams, useRouteMatch } from 'react-router'

export default function Dashboard() {
    let history= useHistory(); //this means url's api is avilable  when we push any componet url i will redirect to that component
    let location =useLocation();//we can get the location detail by using this hook
    let {id}=useParams();

    function Blog(){
    let match=useRouteMatch("/dashboard/s")
    if(match){
        return <p>this is blog</p>;
    } else{
    return null;
     }
    };

    return (
        <div>

            <h1>welcome to dashboard</h1>
            {/* {id} */}
            <Blog/>

            {/* <p>{location.pathname}</p> */}

            <button onClick={()=>history.push("/about")}>to about </button>
            {/* when we click this button this will redirect to about component  */}

              
            {/* <Redirect to="loginform" /> */}
            

        </div>
    )
}
