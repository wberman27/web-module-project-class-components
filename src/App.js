import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const tasks = [
  {
    task: 'Learn React',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    }
  }

  toggleTask = (clickedId) =>{
    this.setState({
      tasks: this.state.tasks.map((item)=>{
        return item.id === clickedId ? {...item, completed: !item.completed} : item;
      })
    })
  }

  addTask = (taskName) =>{
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask],
    })
  }


  clearCompleted = (tasks) =>{
    this.setState({
      tasks: this.state.tasks.filter(item => item.completed === false)
    })
  }





  render() {
    return (
      <div className = "todoApp">
        <div className = "formContainer">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm  addTask = {this.addTask}/>
        </div>
        <div className = "listContainer">
          <TodoList tasks = {this.state.tasks} toggleTask = {this.toggleTask} clearCompleted = {this.clearCompleted}/>
        </div>
      </div>
    );
  }
}


export default App
