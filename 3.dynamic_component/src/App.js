import React from 'react';
import './App.css';

function App() {
  const Sname = ['Rakibul','Habib', 'Musfiq', 'Robin', 'Bishal', 'Shohan'];
  
  const products = [
    {name:'Photoshop', price:'$90.12'},
    {name:'Illustrator', price:'$60.56'},
    {name:'PDF Reader', price:'$6.78'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Componets</h1>
       
        <ul>
          {
            Sname.map(name => <li >{name}</li>)
          }
          {
            products.map(product => <li >{product.name}</li>)
          }
        </ul>
          {
            products.map(pd => <Product product={pd}></Product>)
          }
      </header>
    </div>
  );
}

function Product(props) {
  const {name, price} = props.product;
  return (
    <div style={{border:'2px solid red', width:'400px', margin:'5px'}}>
      <h3>{name}</h3>
      <p> {price} </p>
    </div>
  );
}



export default App;
