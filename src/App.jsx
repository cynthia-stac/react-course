import { useState } from "react";

export default function App() {

   const carInfo = {
    name : "Ford",
    model : "Mustang",
    color : "Red",
    year : 1969
  }

  return (
    <div>
      <h1>Welcome from React</h1>
      <Counter />  
      <MyButton />  
      <Car />
      <Car size ="Tortoise" />
      <Car size = "Cow" />
      <Car carinfo={carInfo} />
      <Fruit />
      <Son />
      <Daughter />
      <Parent />
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

export function Car({ 
  size = "Normal", 
  carinfo = {} 
}) {
  const brand = "Ford";
  const model = "Mustang";

  function kwToHp(kw) {
    return kw * 1.36;
  }

  const myobj = {
    name: "MHero",
    model: "500",
    color: "Dark Silver"
  };

  const myStyles = {
    color: "red",
    fontSize: "50px",
    backgroundColor: "lightgray"
  };

  return (
    <div>
      <h1 style={myStyles}>Favorite Car</h1>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
      <p>I am a car of a {size} size!</p>
      <p>My {carinfo.name} {carinfo.model}!</p>
      <p>It is {carinfo.color} and it comes from the year {carinfo.year}</p>
      <p>This car has {218 * 1.36} horsepower!</p>
      <p>By function call it has {kwToHp(218)} horsepower!!!</p>
      <p>My dream car is a {myobj.color} {myobj.name} {myobj.model} ❤️</p>
    </div>
  );
}

export function Fruit(){
  const x = 1
  
  return (
    <h1>{(x) < 10 ? "Apple" : "Banana"}</h1>
  )
}


export function Son(props) {
  return (
    <div style={{background: 'lightblue'}}><h2>Son</h2><div>{props.children}</div></div>
  );
}

export function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'pink'}}><h2>Daughter</h2><div>{props.children}</div></div>
  );
}

export function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son><p>
          This was written in the Parent component,
          but displayed as a part of the Son component
          </p>
      </Son>
      <Daughter><p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
          </p>
      </Daughter>
    </div>
  );
}

export function MissedGoal() {
  return <h1>MISSED!</h1>;
}

export function MadeGoal() {
  return <h1>Goal!</h1>;
}


export function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
