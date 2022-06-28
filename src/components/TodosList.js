import Todos from '../components/Todos'

const TodosList =(props) =>{

    return(
        <div>
            <h2 style={h2style}> ToDos List</h2>
            {
            props.todos.map((item,idx) =>(
            <Todos todos= {item} key = {idx} /> ))
           }
        </div>
    )
}

const h2style ={
    marginLeft : '150px',
}

export default TodosList