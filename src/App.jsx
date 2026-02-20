import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Welcome from React</h1>
      <Counter />  
      <MyButton />  
      <Car />
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
    fontSize: '20px',
    backgroundColor: 'lightyellow'
  }
  return (
    <div>
      <h2 className="myClass">My Car</h2>
      <p className={x}>It is a {brand} {model}.</p>
      <p>This car has {218 * 1.36} horsepower!</p>
      <p>By function call it has {kwToHp(218)} horsepower!!!</p>
      <p>My dream car shall is a {myobj.color}  {myobj.name} {myobj.model} ❤️ </p>
    </div>
  );
}

