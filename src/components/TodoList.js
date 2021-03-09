import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return (
        <div className="todoList">
          {props.tasks.map(item => (
            <Todo key={item.id} task={item.task} toggleTask = {props.toggleTask}/>
          ))}
          <button className="clearButton">
            Clear Completed
          </button>
        </div>
      );
    };
    
export default TodoList;