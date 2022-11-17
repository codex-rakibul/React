import logo from './logo.svg';
import './App.css';

function App() {
  const student ={
      firstName: "",
      lastName: "",
      id:"01319106062",
      dept:"CSE",
      fName:"",
      fullName: function(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
          return this.firstName + " " + this.lastName;
      }
  };
  let txt = "";
  for(let x in student){
    if(student[x].length-2){
      txt += student[x] + " ";
    }
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {"Student Info: "+student.fullName("Rakibul","Islam Sony")} </p>
        <p>{txt}</p>     
      </header>
    </div>
  );
}

export default App;
