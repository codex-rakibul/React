import './App.css';
import Todo_App from './Components/A_Basic_Todo_App/Todo_App';
import A from './Components/Child_To_Parent/A';
import Fetch_Data from './Components/Fetch_Data/Fetch_Data';
import Pro_Custom_Hook from './Components/Pro_Custom_Hook/Pro_Custom_Hook';

function App() {
  return (
    <div className="App">
    <h1 className="heading">Passing data from child to parent component</h1>
    <A/>
    <h1 className="heading">A Basic todo App</h1>
    <Todo_App/>
    <h1 className="heading">Fetching data with useEffect</h1>
    <Fetch_Data/>
    <h1 className="heading">Custom Hook </h1>
    <Pro_Custom_Hook/>
    </div>
  );
}

export default App;
