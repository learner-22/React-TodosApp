
import './App.css';
import todosData from './data/todosData';
import {Component} from "react"
import Navbar from './components/Navbar'
import TodosList from './components/TodosList'



class App extends Component {
 render(){
  return(
    <div className="App">
      <Navbar />
      <TodosList todos={todosData} />
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
