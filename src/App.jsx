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
  return (
    <button>I'm a button</button>
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
  return (
    <div>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
    </div>
  );
}

