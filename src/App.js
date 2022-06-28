
import './App.css';
import todosData from './data/todosData';
import {Component} from "react"
import Navbar from './components/Navbar'
import TodosList from './components/TodosList'



class App extends Component {
 
 state = {
  todosData : todosData,
  task: '',
  details :"",
  completed : "false",
  createdAt : ""
 }

 handleChange = (event) =>{
  this.setState({[event.target.id] : event.target.value} )
 }

 handleSubmit = (event)=>{
   event.preventDefault()
   const newTodo  = {
    task: this.state.task,
  details :this.state.details,
  completed : this.state.completed,
  createdAt :this.state.createdAt
   }
   console.log(newTodo)
   this.setState({
    todosData : [newTodo, ...this.state.todosData],
  task: '',
  details :"",
  completed : "false",
  createdAt : ""
   })
 }
  render(){
  return(
    <div className="App">
      <Navbar />
      <form onSubmit = {this.handleSubmit}>
      <label htmlFor = "task"> ToDo Task </label>
      <input type ="text" value ={this.state.task} onChange ={this.handleChange} id="task" />
      <br />
      <label htmlFor = "details"> Task Details</label>
      <input type ="text" value ={this.state.details} onChange ={this.handleChange} id="details" />
      <br />
      <label htmlFor = "completed"> Task Status </label>
      <input type ="text" value ={this.state.completed} onChange ={this.handleChange} id="completed" />
      <br/>
      <label htmlFor = "createdAt"> Task Created At </label>
      <input type ="text" value ={this.state.createdAt} onChange ={this.handleChange} id="createdAt" />
      <br/>
      <input type="submit" />
      </form>
      <TodosList todos={this.state.todosData} />
    </div>
  )
 }

}

export default App;

// function App() {
//   return (
//     <div className="App">
//      <Navbar />
//      <TodosList todos={todosData} />
//     </div>
//   );
// }
