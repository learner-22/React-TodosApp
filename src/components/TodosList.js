import Todos from '../components/Todos'

const TodosList =(props) =>{

    return(
        <div>
            <h2> ToDos List</h2>
            {
            props.todos.map((item,idx) =>(
            <Todos todos= {item} key = {idx} /> ))
           }
        </div>
    )
}

export default TodosList