import React from 'react';
import { BsTrashFill } from 'react-icons/bs';


export default function Todo({key, todo, onUpdate, onDelete}) {
  
  const {text, status} = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'acive';
    onUpdate({...todo, status:status}); //status 로 생략
  }

  const handleDelete = () => {
    onDelete(todo);
  }

  return (
    <li key={key}>
      <input 
        type='checkbox' 
        id='checkbox'
        chekced={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}><BsTrashFill /></button>
    </li>
    
  )
}
