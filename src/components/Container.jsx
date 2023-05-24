import React from 'react'
import './App.css';

export default function Container() {
  const array = ["장보기", '공부하기'];
  return (
    <>
      
      
    <div className='bg-slate-500 '>
      <div className='bg-red-300'>
      <h2>To do List</h2>

<ul>
  <li>Go to Gym</li>
  <li>go to Library</li>
</ul>
<div>
  <input type="text" placeholder='Add Todo List'/>
  <span>Add</span>
    
</div>
      </div>
    
    </div>
    </>
  )
}
