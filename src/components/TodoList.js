import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return (
        <>
        <div className="todoList">
          {props.tasks.map(task => (
            <Todo key={task.id} task={task} toggleTask = {props.toggleTask}/>
          ))}
        </div>
          <button className="clearButton" onClick={()=> {props.clearCompleted(props.tasks)}}>
            Clear Completed
          </button>
        </>
      );
    };
    
export default TodoList;