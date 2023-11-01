import CalculadoraV2 from "./components/calculadoraV2/Calculadorav2"
import Calculadora from "./components/calculadora/Calculadora"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import IndexStyle from "./assets/IndexStyle"

function App() {

  return (
    <IndexStyle>
      <GlobalStyle/>
      <BrowserRouter>
      <header>
          <nav>
            <ul>
              <li><Link to={"/"}>Calc V1</Link></li>
              <li><Link to={"/calcv2"}>Calc V2</Link></li>
            </ul>
          </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Calculadora/>}/>
          <Route path="/calcv2" element={<CalculadoraV2/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </IndexStyle>
  )
}

export default App
