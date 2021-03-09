import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            taskText: ''
        }
    }

    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value}) //setState to control target input value
    };

    submit = (e) => {
        e.preventDefault(); //prevents refresh default
        this.props.addTask(this.state.taskText) //add task from taskText
        this.setState({
            taskText: '', //resets form
        })
    }

    render(){
        return(
            <form onSubmit = {this.submit}>
                <input 
                type='text' 
                name='taskText' 
                value={this.state.taskText} 
                onChange={this.handleChanges}
                 />
                 <button>Add Todo</button>


            </form>


        )


    }

}

export default TodoForm;