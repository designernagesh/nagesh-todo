import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: '',
      tasksList: []
    }
  }
  inputHandle = (e) => {
    this.setState({
      tasks: e.target.value
    })
  }
  addTask = (e) => {
    let item = this.state.tasks
    let newTasksList = this.state.tasksList   
    newTasksList.push(item) 
    this.setState({    
      tasksList: newTasksList,
      tasks: ''
    })
    console.log(this.state.tasksList)
    e.target.value = ''
  }
  deleteTask = (e) => {
    let id = e.target.id
    let itemInstance = this.state.tasksList
    itemInstance.splice(id, 1)
    this.setState({
      tasksList: itemInstance
    })
  }
  render() {
    let toShowTasks = this.state.tasksList.map((e, i) => 
      <li key={i}>{ e } <button onClick={this.deleteTask} id={i}> Delete </button></li> 
    )
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input type='text' value={this.state.tasks} onChange={this.inputHandle} /> &nbsp;
        <h3>{this.state.tasks}</h3>  
        <ul>
          {toShowTasks}
        </ul>      
        <button onClick={this.addTask}>Add Task</button>
      </div>
    );
  }
}

ReactDOM.render(<App title='React ToDO App' />, document.getElementById('root'));
