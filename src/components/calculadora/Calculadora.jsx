import { useState } from "react";
import styled from "styled-components";


export default function Calculadora() {
    const Main = styled.main `
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const Visor = styled.div `
      width: 160px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1.2em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      margin-bottom:5px;
    `

    const Container_calculadora = styled.div `
      width:210px;
      background-color: azure;
      padding:5px;
      border-radius: 8px;
    `
    
    const [pNum, setPnum] = useState(0)
    const [sNum, setSnum] = useState(0)
    const [op, setOp] = useState("")
    const [resultado, setResultado] = useState(0)

    const pegarNum = (e) => { 
        if (pNum === 0 || resultado === 0) {
            setPnum(e.target.value)
            setResultado(e.target.value) 
        } else {
            setPnum(pNum + e.target.value)
            setResultado(pNum + e.target.value)
        }
    }

    const operator = (e) => {
        setOp(e.target.value)
        setSnum(pNum)
        setPnum(0)
        setResultado(e.target.value)
    }

    const limpar = () => {
        setResultado(0)
    }

    const apagar = () => {
        setResultado(resultado.slice(0, -1))
    }

    const porcentagem = () => {
        setPnum(pNum / 100)
        setResultado(pNum / 100)
    }

    const calcular = () => {
        setResultado(op === "/" ? sNum / pNum : 
                     op === "-" ? sNum - pNum :
                     op === "+" ? +sNum + +pNum : 
                     op === "x" ? sNum * pNum : "Error")
        setPnum(0)
        setSnum(0)
    }

    return(
    <Main>
      <Container_calculadora>
        <Visor>
          <p>{resultado}</p>
        </Visor>
        <div>
          <button onClick={limpar}>C</button>
          <button onClick={porcentagem}>%</button>
          <button onClick={apagar}>¬</button>
          <button onClick={operator} value={"/"}>/</button>
          <button onClick={pegarNum} value={7}>7</button>
          <button onClick={pegarNum} value={8}>8</button>
          <button onClick={pegarNum} value={9}>9</button>
          <button onClick={operator} value={"x"}>x</button>
          <button onClick={pegarNum} value={4}>4</button>
          <button onClick={pegarNum} value={5}>5</button>
          <button onClick={pegarNum} value={6}> 6</button>
          <button onClick={operator} value={"-"}>-</button>
          <button onClick={pegarNum} value={1}>1</button>
          <button onClick={pegarNum} value={2}>2</button>
          <button onClick={pegarNum} value={3}>3</button>
          <button onClick={operator} value={"+"}>+</button>
          <button onClick={pegarNum} value={"."}>.</button>
          <button onClick={pegarNum} value={0}>0</button>
          <button style={{width: 101}} onClick={calcular}>=</button>
        </div>
      </Container_calculadora>
    </Main>
    )
}