import React from 'react';

const Todo = props => {
    // console.log(props.task)
    return (
        
        <div onClick = {()=> {props.toggleTask(props.task.id)}} className={`task${props.task.completed ? ' completed' : ''}`}> {/*add completed to className if props.task.completed is true */}
            <p>{props.task.task}</p>
        </div>


    );

};

export default Todo;