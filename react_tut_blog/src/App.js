import './App.css';
import NavBar from './Navbar';

// this is not hmtl it is jsx (which is why it looks differently), babel converts it and renders it to the dom
//this is also the root component all others will be nested inside of it.
function App() {

  return (
    <div className="App">
      <NavBar />
     <div className="content">
      <h1>App Component</h1>
     </div>
    </div>
  );
}

export default App;
