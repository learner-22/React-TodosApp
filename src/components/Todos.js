
const Todos =(prop) => {

    return(
        <div style={styles.divStyle}>
          <h4>  Task : {prop.todos.task}</h4>
          <p> Details : {prop.todos.details}</p>
          <p> Completed : {prop.todos.completed}</p>
          <p> Created At : {prop.todos.createdAt}</p>
        </div>
    )

}

const styles ={
  divStyle :{
    borderRadius : '20%',
    height : '200px',
    width :'400px',
    border :'grey 2px solid',
    textAlign : 'center',
    margin : '20px'

  }
}
export default Todos