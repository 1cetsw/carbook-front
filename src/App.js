import "./Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RouterReact from "./Services/RouterReact";
import NavBar from "./Components/NavBar";

function  App()  {
    const backgroundColor=(global.config.BackgroundColor);




  return (
    <div className="App " style={{ backgroundColor: backgroundColor}}>

     <NavBar />
     <RouterReact />
    </div>
  );
}

export default App;
