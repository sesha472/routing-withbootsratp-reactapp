
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Content from './components/Contect';

function App() {
  const location =window.location.pathname;
  // console.log(location);
  return (
    <div className="App">
      <Header/>
      
      {location ==="/" && <Content/>}
     {location==="/about"&& <About/>}

    </div>
  );
}

export default App;
