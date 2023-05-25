import React, { useState } from 'react'
// import '../../App.css';
import { v4 as uuidv4} from 'uuid'

//props는 객체이므로 구조 분해(destrucuring) 방식을 이용해 데이터를 받는 변수를 중괄호({})로 감싸주었습니다
export default function AddTodo({ onAdd }) {
  const [string, setString] = useState('');

  {/* input이 변경될때마다, state에서 따라서 변경해주고 있어야하고... */}
  const handleChange = (e) => setString(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    //if(string.trim() === '' ){ }
    if(string.trim().length === 0 ) {  //이 경우에는 아무것도 입력이 안된 경우지 (트림을 했는데도 아무 데이터도 없으니) 그 경우에는, 아예 함수 종료.
      return; 
    }
    onAdd({id:uuidv4(), text: string, status:'active'});
    // onAdd({id:'uniqueId', string:string, status:'Active'});
    setString('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Add Todo'
        value={string}
        // onChange: 변경될때마다 handleChange호출
        onChange={handleChange} /> 
      <button>Add</button>
    </form>
  );
}
