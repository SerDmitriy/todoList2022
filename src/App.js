import { useState } from "react"
import './App.css';

function App() {

  const [value, setValue] = useState("")
  const [list, setList] = useState([])

  const addTodo = () => {
    const newTodo = value;
    setValue("")
    setList([...list, newTodo])
  }

  const deleteItem = (index) => {
    const newList = list.filter((e, i) => i !== index)
    setList(newList)
  }


  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
        {list.map((el, index) =>
          <div className="list-item" key={index}>
            {index} - {el}
            <button className="delete-btn" onClick={() => deleteItem(index)}>x</button>
          </div>)
        }
      </header >
    </div >
  );
}

export default App;
