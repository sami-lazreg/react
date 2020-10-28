import myImg from "./mpl.jpg"
import './App.css';

function App() {
  return (
    <div className="App">

      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

         <h1 className="title red">Your name here</h1>

         <br />

          <img src="/rea.jpg"/>

          <br />

          <img src={myImg} />

      </div>
         
          
    </div>
    
  );
}

export default App;
