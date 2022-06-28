const Navbar = () =>{
    return(
        <nav style ={styles.navStyle}>
           <h1> Todos App</h1>
            <ul>
                <li>Home</li>
                <li>ToDos</li>
                <li> About</li>
            </ul>
            
        </nav>
    )
}

const styles = {

    navStyle :{
        display :'flex',
        justifyContent :'space-around',
        border: 'solid blue 4px'

    }
}
export default Navbar