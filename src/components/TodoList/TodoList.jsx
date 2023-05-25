import React, { useState } from 'react'
// import '../../App.css';
import AddTodo from '../AddTodo/AddTodo';

// TodoList.jsx: Mother
//AddTodo.jsx: Child

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '123', text: "Go to Gym", status: "active"},
    {id: '124', text: "Go to Office", status: "active"},
  ]);

  //새로운 (입력받은)todo 를 todos에 업데이트해야 함
  //console.log(todo);
  //setTodo([...todos, todo]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  
  return (
    <section>
      <ul>
        {todos.map((item)=> (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
