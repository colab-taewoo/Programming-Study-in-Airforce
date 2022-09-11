import { useState, useEffect } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault(); //forms have a submit event on default. define onSubmit function to prevent it.
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  const deleteBtn = (index) => {
    setToDos((curToDos)=>curToDos.filter((_, curIndex) => curIndex !== index))
  }
  return (
    <div>
      <h1>My To dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}{'\u00A0'}<button onClick={() => deleteBtn(index)}>❌</button></li>)}
      </ul>
    </div>   
  );
}

export default App;
