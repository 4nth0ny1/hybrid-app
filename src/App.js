import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
import { useState } from 'react';

function App() {

  const [ todos, setTodos ] = useState([])

  const addTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Hybrid React | Redux App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoContainer todos={todos} />
    </div>
  );
}

export default App;
