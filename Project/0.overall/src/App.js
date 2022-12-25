import './App.css';
import Todo_App from './Components/A_Basic_Todo_App/Todo_App';
import A from './Components/Child_To_Parent/A';

function App() {
  return (
    <div className="App">
    <h1 className="heading">Passing data from child to parent component</h1>
    <A/>
    <h1 className="heading">A Basic todo App</h1>
    <Todo_App/>
    </div>
  );
}

export default App;
