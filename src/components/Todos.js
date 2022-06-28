
const Todos =(prop) => {

    return(
        <div>
          <h4>  Task : {prop.todos.task}</h4>
          <p> Details : {prop.todos.details}</p>
          <p> Completed : {prop.todos.completed}</p>
          <p> Created At : {prop.todos.createdAt}</p>
          <hr />
        </div>
    )

}

export default Todos