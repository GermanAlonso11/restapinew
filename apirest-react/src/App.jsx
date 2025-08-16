import React from 'react'
import './App.css'
import Header from './componentes/layout/Header.jsx';
import Navegacion from './componentes/layout/Navegacion.jsx';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*Componentes */
import Clientes from './componentes/layout/Clientes.jsx';
import Productos from './componentes/layout/Productos.jsx';
import Pedidos from './componentes/layout/Pedidos.jsx';

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
            <Route exact path="/" component={() => <h1>Clientes</h1>} />
            <Route exact path="/productos" component={() => <h1>Productos</h1>} />
            <Route exact path="/pedidos" component={() => <h1>Pedidos</h1>} />
          </Switch>
        </main>
      </div>

    </Fragment>
    </Router>
  )
}

export default App;
