import React from "react";

const Navegacion = () => {
    return ( 
        <aside>
            <h2>
                Administracion 
            </h2>
            <nav className="navegacion">
                <a href="index.html" className="clientes">Clientes</a>
                <a href="productos.html" className="productos">Productos</a>
                <a href="pedidos.html" className="pedidos">Pedidos</a>
            </nav>
        </aside>

     );
}
 
export default Navegacion;