import './App.css'
import Header from './Header.jsx'

function App() {

  return (
      <div className="App">
        <Header/>
        <h2 id="buscador">Buscador de usuarios</h2>
        <input type="text" id="query" placeholder="Texto a buscar" />
        <button id="botonsearch">Buscar</button>
      </div>
      
  )
}

export default App
