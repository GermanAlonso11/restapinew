import React from 'react'
import './App.css'
import Header from './componentes/layout/Header.jsx';
import Navegacion from './componentes/layout/Navegacion.jsx';
import { Fragment } from 'react';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Header />

      <div class="grid contenedor contenido-principal"/>
      <Navegacion />

      <main className="caja-contenido col-9">
        
      </main>

    </Fragment>
    
  )
}

export default App;
