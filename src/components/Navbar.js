const Navbar = () =>{
    return(
        <nav style ={styles.navStyle}>
           <h1> Todos App</h1>
            <ul style={styles.ulStyle}>
                <p>Home</p>
                <p>ToDos</p>
                <p> About</p>
            </ul>
            
        </nav>
    )
}

const styles = {

    navStyle :{
        textAlign: 'center',
        border: 'solid grey 4px'

    },
     ulStyle: {
        display:'flex',
        direction : 'column',
        justifyContent : 'space-around'
     }
}
export default Navbar