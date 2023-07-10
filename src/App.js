import "./Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RouterReact from "./Services/RouterReact";
import NavBar from "./Components/NavBar";

function  App()  {
  return (
  
    <div className="App " style={{ backgroundColor: ' #666666'}}>
     <NavBar />
     <RouterReact />

    </div>
  );
}

export default App;
