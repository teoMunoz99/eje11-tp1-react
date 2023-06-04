import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';


function App() {

  return (
    <>
      <Titulo></Titulo>
      <Formulario></Formulario>
      <footer className='bg-dark text-light text-center p-4'>
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
