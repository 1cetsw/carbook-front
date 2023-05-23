
import './Css/Bootstrap.css';
// import './Css/App.css';
import Test from './Components/Test/Test'
import StartPage from './Components/Pages/StartPage';
import RouterReact from './Components/Router/RouterReact'
function App() {
  return (
    <div className="App">
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer></script>
      
      <RouterReact/>
      {/* <StartPage /> */}
      
    </div>
  );
}

export default App;
