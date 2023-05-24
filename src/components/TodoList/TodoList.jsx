import React, { useState } from 'react'
import '../../App.css';

export default function TodoList() {
  const [name, setName] = useState('');
  const [todo, setTodo] = useState([
    // {id: 123, text: "Go to Gym", status: "Active"},
    // {id: 124, text: "Go to Office", status: "Active"}
  ]);
  let nextId=0;

  return (
    <section>
      <ul>
        {todo.map((item)=>{
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={()=>{
        setTodo([
          ...todo,
          {
            id: nextId,
            text: name 
          }
        ]);
      }}>Add</button>
    </section>
  );
}
