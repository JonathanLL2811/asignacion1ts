
import './App.css';
import Presentacion from './components/Presentacion';
import Saludo from './components/saludo';
import Curso from './components/Curso';

function App() {
  return (
    <div className="App">
      
      <Saludo />
      <Presentacion Nombre='Jonathan' Apellido='Lorenzana' />
      <Curso/>
      
    </div>
  );
}

export default App;
