import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return (
        <div className="todoList">
          {props.tasks.map(task => (
            <Todo key={task.id} task={task} toggleTask = {props.toggleTask}/>
          ))}
          <button className="clearButton" onClick={()=> {}}>
            Clear Completed
          </button>
        </div>
      );
    };
    
export default TodoList;