import './App.css'
import Header from './Header.jsx'
import Resultados from './Resultados.jsx'
import { useState } from 'react'
import { mock1 } from './constants/users.js'
import CONFIG from './config/config.js'
import Formulario from './Formulario.jsx'

function App() {
  const [query, setQuery] = useState("")
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState(null)

  const callServer = async (param) => {
    console.log("CICK!")
    if (CONFIG.use_server) {
      try {
        let queryparams
        if (param === "all") {
          queryparams = "?limit=" + CONFIG.num_items
        } else {
          queryparams = "/search?q=" + query
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`)
        const data = await response.json()
        console.log(data)
        setResultado(data.users)
        setError(null)
      } catch (error) {
        console.log(error)
        setError({description: error.message})
      }

    } else {
      setResultado(mock1.users)
      setError(null)
    }
  }

  return (
    <div className="App">
      <Header />
      <h2 id="buscador">Buscador de usuarios</h2>
      <Formulario contenido={query} setContenido={setQuery} callServer={callServer}/>
      <button id="botonall" onClick={() => callServer("all")}> Buscar todos</button>
      {error && <h1>Ha habido un errror: {error.description}</h1>}
      {resultado && <Resultados resultado={resultado} />}
    </div>

  )
}

export default App
