function Navbar() {
    return(
        
            <nav className="navbar navbar-expand-lg bg-teal-500 fw-bold">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://localhost:3000/">Lista de tareas</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                            <a className="nav-link" href="create-task">Agregar tarea</a>
                            </li>
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
        
        
    );
}

export default Navbar;