
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Content from './components/Content';
import Contact from './components/Contact';
import {Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Loginform from './components/Loginform';
 

function App() {
  // const location =window.location.pathname;
  // console.log(location);
  return (
    <div className="App">
      <Header/>
      <Switch >
   
     

      <Route path="/" exact >
       
        </Route>

        <Route path="/menu" exact >
        <Content/>
        </Route>
      
        <Route path="/dashboard" exact >
        <Dashboard/>
        </Route>
      
        <Route path="/topics">
         <h1> this is topcs list  </h1>
        </Route>

        <Route path="/about"   >
           <About/>
        </Route>

        <Route path="/contact" exact >
        <Contact/>
        </Route>
        <Route path="/loginform" exact >
        <Loginform/>
        </Route>


      </Switch>
      {/* {location ==="/" && <Content/>}
     {location==="/about"&& <About/>} */}

    </div>
  );
}

export default App;
