import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);

  // Props
  // const Person = (props) => {
  //   return (
  //     <>
  //       <h1>Name: {props.name}</h1>
  //       <h2>Last name: {props.lastName}</h2>
  //       <h2>Age: {props.age}</h2>
  //     </>
  //   );
  // };

  // const name = "Dmytro";
  // const isNameShowing = false;

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>

      {/* props */}
      {/* <Person name={"Dmytro"} lastName={"Fitsych"} age={"26"} />
      <Person name="Mary" lastName="Fitsych" age="27" />
      <Person />
      <Person /> */}

      {/* <h1>Hello, {isNameShowing ? name : "someone"}</h1>
      {isNameShowing ? (
        <>{name}</>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )} */}
    </div>
  );
};

export default App;
