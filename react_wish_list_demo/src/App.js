import './App.css';
import MyClassComp
 from './MyClassComp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyClassComp propName="Prop Name" anotherProp="Another Prop"/>
      </header>
    </div>
  );
}

export default App;
