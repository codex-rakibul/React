import logo from './logo.svg';
import './App.css';

function App() {
  const nums = [12, 25, 37, 29];
  const map = nums.map(num => num * 2);
  console.log(map);
  nums.filter(num => num > 20);
  nums.find(num => num > 30);


  //use Reduce:-
  const total = nums.reduce((sum, num) =>
  {
    console.log(sum,num);
    return sum + num;
  }, 0);


  const person = [
    {name:'Habib', id: 61},
    {name:'Robin', id: 21},
    {name:'Bishal', id: 37},
    {name:'Musfiq', id: 27},
    {name:'Shohan', id: 15},
    {name:'Rakibul', id: 62}
  ];
  const friends = person.reduce((sum2, friend) => sum2 + friend.name, 0);
  console.log(friends);

  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
