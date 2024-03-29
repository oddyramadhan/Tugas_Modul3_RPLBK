import React from 'react';
import { useState } from 'react';

function ShowTodo({ task, time, setTask, setTime }) {
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (task === '' || time === '') {
      alert('Task dan Time tidak boleh kosong');
      return;
    }
    setTodos([...todos, { task, time }]);
    setTask('');
    setTime('');
  };

  return (
    <div className="containerShow">
      <button onClick={handleSubmit}>Tambah Todo</button>
      <div className="showTodo">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <div className="card" key={index}>
                <p>Task: {todo.task}</p>
                <p>Time: {todo.time}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ShowTodo;
