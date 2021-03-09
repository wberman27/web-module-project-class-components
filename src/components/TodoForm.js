import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            taskText: ''
        }
    }

    handleChanges = e => {
        this.setState({[e.target.task]: e.target.value})
    };

    submit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.taskText)
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