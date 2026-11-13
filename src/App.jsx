import './App.css'
import Header from './Header.jsx'
import Resultados from './Resultados.jsx'
import {useState} from 'react'
import {mock1} from './constants/users.js'
import CONFIG from './config/config.js'

function App() {
  const [query, setQuery] = useState('')
  const [resultado, setResultado] = useState(null)

  const callServer = async() => {
    console.log("CICK!")
    if(CONFIG.use_server){
      const response = await fetch(CONFIG.server_url)
      const data = await response.json()
      console.log(data)
      setResultado(data.users)
    }else{
        setResultado(mock1.users)

    }  
  }

  return (
      <div className="App">
        <Header/>
        <h2 id="buscador">Buscador de usuarios</h2>
        <input type="text" id="query" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Texto a buscar" />
        <button id="botonsearch" onClick={() => callServer()}>Buscar</button>

        {resultado && <Resultados resultado={resultado} />}
      </div>
      
  )
}

export default App
