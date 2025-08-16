import React from 'react'
import './App.css'
import Header from './componentes/layout/Header.jsx';
import Navegacion from './componentes/layout/Navegacion.jsx';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*Componentes */
import Clientes from './componentes/layout/Clientes.jsx';
import Productos from './componentes/productos/Productos.jsx';
import Pedidos from './componentes/pedidos/Pedidos.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <Fragment>
      <Header />

      <div class="grid contenedor contenido-principal">
        <Navegacion />

        <main class="caja-contenido col-9">
          <Switch>
            <Route exact path="/" component={Clientes} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/pedidos" component={Pedidos} />
          </Switch>
        </main>
      </div>

    </Fragment>
    </Router>
  )
}

export default App;
