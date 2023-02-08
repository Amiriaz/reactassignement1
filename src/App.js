import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  let add = () => {
    arr.push(text);
    setArr([...arr]);
  };
  let edit = (i) => {
    let a = prompt("Enter Value", arr[i]);
    arr[i] = a;
    setArr([...arr]);
  };
  let del = (i) => {
    arr.splice(i, 1);
    setArr([...arr]);
  };
  let DeleteAll = () =>{
    setArr([]);
  }
  return (
    <div className="App">
      <header className="">
        <input onChange={(e) => {setText(e.target.value); }} placeholder="Enter Text"/>
        <button className="book1" onClick={add}>Add</button>
        <button className="book1" onClick={DeleteAll}>Delete All</button>
       {arr.map((x, i) => (
          <p className="list">
            {x}
            <button className="book2" onClick={() => del(i)}>Delete</button>
            <button className="book3" onClick={() => edit(i)}>Edit</button>
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
