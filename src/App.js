import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { ReactDOM } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Todos from "./pages/Todos";
import Timer from "./pages/Timer";
import HookCounter from "./pages/HookCounter";
import HookCounter2 from "./pages/HookCounter2";
import UseStateArray from "./pages/UseStateArray";
import UseEffectHook1 from "./pages/UseEffectHook1";
import HookMouse from "./pages/HookMouse";
import UseContext1 from "./pages/UseContext1";
import MouseContainer from "./pages/MouseContainer";
import IntervalHookCounter from "./pages/IntervalHookCounter";
import DataFetching from "./pages/DataFetching";
import CounterOne from "./pages/CounterOne";
function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      {
        <Root />
        /* 
      < MyButton  />
      <AboutPage  />
       <Welcome name="Dhanush" />
      <MyForm/>
      <Root/> 
      <Todos todos = {todos}/>  <hr/>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <Timer/> */
      }
      {/* <HookCounter/>
      <UseStateArray/ > */}
      <UseEffectHook1 />
      {/* <HookMouse />L */}
      {/* <UseContext1 /> */}
      {/* <MouseContainer /> */}
      <IntervalHookCounter />
      <DataFetching />
      <HookCounter2 />
      <CounterOne />
    </div>
  );
}

function MyButton() {
  return <button>I'm a button</button>;
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

function Welcome(props) {
  console.log(props);
  return (
    <>
      <h1>Hello, {props.name}</h1>;
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1 className="ab">About</h1>
      <p style={{ backgroundColor: "lightblue" }}>
        Hello there.
        <br />
        asdfghjk
      </p>
      <ul>{listItems}</ul>
    </>
  );
}

function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("entered name: " + name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </form>
    </>
  );
}

function Root() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="projects" index element={<Projects />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
