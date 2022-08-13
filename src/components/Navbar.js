function Navbar() {
    return(
        
            <nav class="navbar navbar-expand-lg bg-teal-500 fw-bold">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:3000/">Lista de compras</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            
                            <li class="nav-item">
                            <a class="nav-link" href="create-task">Agregar tarea</a>
                            </li>
                        
                        </ul>
                        <div class="container-fluid">
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="¿Qué buscas?" aria-label="Search" />
                            <button 
                            class="btn bg-teal-500 fw-bold"
                            type="submit"
                            Hover="bg-yellow-300 #white"
                            onClick="bg-yellow-300"
                            >Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        
        
    );
}

export default Navbar;