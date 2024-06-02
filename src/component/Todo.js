import React, { useState } from 'react';

const Todo = () => {
    const[newTask,setNewTask]=useState(" ");
    const[task,setTask]=useState([]);


    const handletaskadd =()=>{
        if(newTask){
            setTask([...task,{id:task.length+1,text:newTask,completed:false}]);
            setNewTask('');
        }
    };
const handletaskdelete=(id)=>{
    setTask(task.filter((todo)=> todo.id!==id));
};

const toggleTodoComplete=(id)=>{
    setTask(
        task.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
};
 
  return (
    <div>
      <h1>ToDo App</h1>
      <hr></hr>
      <div className='list'>
        <ol>
            {task.map((todo)=>(<li key={todo.id}><input type="checkbox"checked={todo.completed}
              onChange={() => toggleTodoComplete(todo.id)} ></input><span style={{ textDecoration:todo.completed? 'line-through' : 'none' }}>
              {todo.text}
            </span>        
             <button onClick={()=>handletaskdelete(todo.id)}>Delete</button><hr></hr></li>))}
        </ol>    
            
      </div>
      <div className='head'>
        <input
          type="text"
          placeholder="Freaking ToDo"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handletaskadd}>+ Add Todo</button>
      </div>
    </div>
  );
};

export default Todo;

