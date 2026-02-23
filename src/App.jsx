import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Welcome from React</h1>
      <Counter />  
      <MyButton />  
      <Car />
      <Fruit />
      <Fruit />
      <Fruit />
    </div>
  );
}

export function MyButton() {
  const myFunc = () => {
    alert('HEYYYYYYYYYYY!!!!!!!!!!!')
  }
  return (
    <button onClick={myFunc}>I'm a button</button>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export function Car() {
  const brand = "Ford"
  const model = "Mustang"
  function kwToHp(kw){
    return kw * 1.36
  }
  const myobj = {
    name: "MHero",
    model: "500",
    color: "Dark Silver"
  };
  const x = "para"
  const myStyles = {
    color: 'red',
    fontSize: '50px',
    backgroundColor: 'lightgray'
  }
  return (
    <div>
      <h1 style={myStyles} >Favorite Car</h1>
      <h2 className="myClass">My Car</h2>
      <p className={x}>It is a {brand} {model}.</p>
      <p>This car has {218 * 1.36} horsepower!</p>
      <p>By function call it has {kwToHp(218)} horsepower!!!</p>
      <p>My dream car is a {myobj.color}  {myobj.name} {myobj.model} ❤️ </p>
    </div>
  );
}

export function Fruit(){
  const x = 1
  
  return (
    <h1>{(x) < 10 ? "Apple" : "Banana"}</h1>
  )
}

