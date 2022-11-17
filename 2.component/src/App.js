import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React Application</h1>
       <Person></Person>
       <Pra></Pra>
      </header>
    </div>
  );
}

function Person() {
  return (
    <div>
      <h3>Rakibul Islam Sony</h3>
      <p>id: 01319106062 </p>
    </div>
  );
}

function Pra(){
  return (
    <div>
      <p>Hey, I'm a Pra2</p>
    </div>
  );
}

export default App;
